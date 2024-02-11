import { Observable, from, map, of, switchMap, tap, withLatestFrom } from 'rxjs'
import log from 'electron-log'
import { config$ } from './stores/config'
import { ImgurClient } from 'imgur'
import { createHash } from 'crypto'
import { cacheImageLink, getCachedImageLink } from './stores/cache'

const logImage = log.scope('image')

// Image upload to an external service has two main purposes:
// - Avoid exposing the media-server address through image URLs.
// - Make images available if media-server is not reachable from the internet.

// We upload images to Imgur, so the media-server URL is not exposed through Discord.
// A cache is implemented to upload each image only once.
//
// Caching is done using the image content hash.
// The source URL is no good cache key, since the same image can be available via differnet URLs.
// For example the songs in an album. Each song has the same primary image, but a different item ID in the URL.

// Returns null Imgur client ID is not configured and there was no cache hit.
export function getPublicImageLink$(sourceUrl: string): Observable<string | null> {
  return from(fetch(sourceUrl)).pipe(
    tap((response) => {
      if (response.ok) logImage.debug(`Downloaded image from source "${sourceUrl}".`)
      else
        throw new Error(
          `Failed to download from source "${sourceUrl}". Status: ${response.status} ${response.statusText}`
        )
    }),
    switchMap((response) => from(response.arrayBuffer())),
    // See: https://stackoverflow.com/questions/33926399/fetch-resource-compute-hash-return-promise
    map((arrayBuffer) => {
      const buffer: Buffer = Buffer.from(arrayBuffer)
      const hash: string = createHash('md5').update(buffer).digest('hex')

      return { buffer, hash }
    }),
    tap(({ hash }) => logImage.debug(`Generated image hash:`, hash)),
    withLatestFrom(config$),
    switchMap(([image, config]) => {
      const cachedLink: string | undefined = getCachedImageLink(image.hash)

      // Cache hit.
      if (cachedLink) {
        logImage.debug(`Cache hit for "${sourceUrl}" (${image.hash}). Cached link:`, cachedLink)
        return of(cachedLink)
      }

      // Without Imgur client ID no upload is possible.
      if (!config.imgurClientId) {
        logImage.debug('No Imgur client ID configured. Skipping image upload.')
        return of(null)
      }

      // Upload image to Imgur.
      return uploadToImgur$(image.buffer, config.imgurClientId).pipe(
        tap((link) => cacheImageLink(image.hash, link)),
        tap((link) =>
          logImage.debug(
            `Link "${link}" of source image "${sourceUrl}" (${image.hash}) is now cached.`
          )
        )
      )
    })
  )
}

// Returns Imgur URL of image.
function uploadToImgur$(image: Buffer, clientId: string): Observable<string> {
  return of(new ImgurClient({ clientId })).pipe(
    tap(() => logImage.debug('Uploading Imgur.')),
    // tap(client => client.searchGallery)
    switchMap((client) => from(client.upload({ image: image }))),
    map((response) => response.data.link),
    // While testing the link returned here was a function in case the image download failed.
    // The download issue was fixed and this check is an addition, to throw in such a case.
    tap((link) => {
      if (typeof link !== 'string')
        throw new Error('Failed to upload to Imgur. Returned value is not a string.')
    }),
    tap((link) => logImage.debug(`Upload done. Imgur Link:`, link))
  )
}
