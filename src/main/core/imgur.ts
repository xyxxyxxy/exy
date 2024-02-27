import { Observable, from, map, of, switchMap, take, tap } from 'rxjs'
import log from 'electron-log'
import { config$ } from './stores/config'
import { ImgurClient } from 'imgur'
import { createHash } from 'crypto'
import { cacheImageLink, getCachedImageLink } from './stores/cache'
import { readFileSync } from 'fs'
import icon from '../../../resources/icon.png?asset'

const logger = log.scope('imgur')

export function testImgurClientId$(clientId: string): Observable<unknown> {
  const client = new ImgurClient({ clientId })

  return from(client.upload({ image: readFileSync(icon) })).pipe(
    tap((response) => {
      if (!response.success) throw new Error(`Response status ${response.status}: ${response.data}`)
    }),
    // Delete test image.
    tap((response) => {
      if (response.data.deletehash) client.deleteImage(response.data.deletehash)
    })
  )
}

// Image upload to an external service has two main purposes:
// - Avoid exposing the media-server address through image URLs.
// - Make images available if media-server is not reachable from the internet.

// We upload images to Imgur, so the media-server URL is not exposed through Discord.
// A cache is implemented to upload each image only once.
//
// Two cache instances are involved here. One runtime cache for the image hash and one file cache for Imgur upload URLs.
//
// The runtime hash cache is to avoid downloading the source image again to generate a hash.
// If the image behind a URL changes, the app needs to be restarted to clear this cache and download the new image.
// This is accepted, since images on the media-server do not change often.
//
// Imgur upload cache is stored in a file and used to upload each image only once.
// This is important, since one image can have multiple URLs. For example the image of songs in an music album.

const hashCache: { [url: string]: string } = {}

export function getImgurLink$(sourceUrl: string): Observable<string | undefined> {
  // Check hash cache and get cached Imgur link on hit.
  const cachedHash = hashCache[sourceUrl]
  if (cachedHash) return of(getCachedImageLink(cachedHash))

  return config$.pipe(
    take(1),
    // Avoid image download if no Imgur client ID is configured.
    map((config) => config.imgurClientId),
    switchMap((imgurClientId) => {
      if (!imgurClientId) return of(undefined)

      // Download source image.
      return from(fetch(sourceUrl)).pipe(
        tap((response) => {
          if (response.ok) logger.debug(`Downloaded image from source "${sourceUrl}".`)
          else
            throw new Error(
              `Failed to download from source "${sourceUrl}". Status: ${response.status} ${response.statusText}`
            )
        }),
        switchMap((response) => response.arrayBuffer()),
        // Generate image hash.
        // See: https://stackoverflow.com/questions/33926399/fetch-resource-compute-hash-return-promise
        map((arrayBuffer) => {
          const buffer: Buffer = Buffer.from(arrayBuffer)
          const hash: string = createHash('md5').update(buffer).digest('hex')

          return { sourceUrl, buffer, hash }
        }),
        tap(({ hash }) => logger.debug(`Generated image hash:`, hash)),
        // Set hash cash.
        tap(({ sourceUrl, hash }) => (hashCache[sourceUrl] = hash)),
        // Get Imgur link.
        switchMap((image) => {
          // Check Imgur cache.
          const cachedLink: string | undefined = getCachedImageLink(image.hash)
          if (cachedLink) return of(cachedLink)

          // Upload to Imgur.
          return uploadToImgur$(image.buffer, imgurClientId).pipe(
            // Set Imgur cache.
            tap((link) => cacheImageLink(image.hash, link))
          )
        })
      )
    })
  )
}

// Returns Imgur URL of image.
function uploadToImgur$(image: Buffer, clientId: string): Observable<string> {
  return of(new ImgurClient({ clientId })).pipe(
    switchMap((client) => from(client.upload({ image }))),
    map((response) => response.data.link),
    // While testing the link returned here was a function in case the image download failed.
    // The download issue was fixed and this check is an addition, to throw in such a case.
    tap((link) => {
      if (typeof link !== 'string')
        throw new Error('Failed to upload to Imgur. Returned value is not a string.')
    }),
    tap((link) => logger.debug(`Upload done. Imgur Link:`, link))
  )
}
