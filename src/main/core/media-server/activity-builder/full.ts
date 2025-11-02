import { Observable, catchError, from, map, of, switchMap } from 'rxjs'
import { MediaServerConfig } from '../../stores/config.types'
import { Activity, ActivityBase, ExternalData, ExternalDataType } from '../../activity/types'
import { ItemMediaType, ItemType, ValidSession } from '../types'
import log from 'electron-log'
import { BaseItemDto, PlayerStateInfo } from '../../openapi/emby'
import { getImageUrl } from '..'
import axios from 'axios'
import { uploadImage$ } from '../../freeimage-host'

const logger = log.scope('builder-full')

// Builds a basic activity without expensive async operations.
export function buildFullActivity$(
  server: MediaServerConfig,
  session: ValidSession,
  baseActivity: ActivityBase
): Observable<Activity> {
  logger.debug(`Building full activity.`)
  const item = session.NowPlayingItem
  const playState = session.PlayState

  const activity: Activity = {
    ...baseActivity,
    sourceType: server.type,
    artists: item.Artists || [],
    genres: item.Genres || [],
    description: item.Type === ItemType.TvChannel ? item.CurrentProgram?.Overview : item.Overview,
    tagline: item.Taglines?.length ? item.Taglines[0] : undefined,
    albumTitle: item.Album,
    showTitle: item.SeriesName,
    seasonTitle: item.SeasonName,
    episodeNumber: item.IndexNumber ? item.IndexNumber : undefined,
    releaseDate: getReleaseDate(item),
    externalData: mapExternalData(item),
    endTime: parseEndTime(item, playState)
  }

  const watchLink = getWatchLink(item)
  if (watchLink) activity.externalData.push({ type: ExternalDataType.WatchLink, url: watchLink })

  return addImage$(activity, server, session)
}
function mapExternalData(item: BaseItemDto): Array<ExternalData> {
  if (!item.ExternalUrls) return []
  return item.ExternalUrls.filter(
    (external): external is { Name: ExternalDataType; Url: string } => {
      if (!external.Name) return false
      const isType = Object.values(ExternalDataType).includes(external.Name as ExternalDataType)

      if (!isType) {
        logger.warn(`Encountered unexpected external data type '${external.Name}'. Ignoring.`)
        return false
      }

      return !!external.Url
    }
  ).map((external) => ({ type: external.Name, url: external.Url }))
}

function getReleaseDate(item: BaseItemDto): Date | undefined {
  // For home video, the date created is returned.
  if (item.Type === ItemType.Video && item.DateCreated) return new Date(item.DateCreated)

  if (!item.PremiereDate) return undefined
  const date: Date = new Date(item.PremiereDate)

  // Avoid invalid dates. Faced the issue of a premier date set to '1' once.
  if (date && date.getFullYear() < 1000) return undefined

  return date
}

function parseEndTime(item: BaseItemDto, playState: PlayerStateInfo): Date | undefined {
  if (item.MediaType === ItemMediaType.Book || !item.RunTimeTicks || !playState.PositionTicks)
    return undefined

  const runtimeMs = item.RunTimeTicks / 10000
  const playPositionMs = playState.PositionTicks / 10000
  // Now, plus runtime, minus play position.
  return new Date(Date.now().valueOf() + runtimeMs - playPositionMs)
}

function addImage$(
  activity: Activity,
  server: MediaServerConfig,
  session: ValidSession
): Observable<Activity> {
  if (activity.imageUrl) return of(activity)

  const externalImage = getExternalImageLink(session.NowPlayingItem)

  if (externalImage) {
    activity.imageUrl = externalImage
    return of(activity)
  }

  const sourceImageUrl = getSourceImageUrl(server, session.NowPlayingItem)

  if (!sourceImageUrl) return of(activity)

  // Image size is already reduced via the
  // media-server image download parameters.
  return downloadImage$(sourceImageUrl).pipe(
    switchMap((image) => uploadImage$(image)),
    map((publicImageUrl) => {
      activity.imageUrl = publicImageUrl
      return activity
    }),
    // Fallback to activity without image on error.
    catchError((error) => {
      logger.warn(`Failed to download/upload image.`, error)
      return of(activity)
    })
  )
}

function downloadImage$(url: string): Observable<Buffer> {
  return from(
    axios.get(url, {
      responseType: 'arraybuffer'
    })
  ).pipe(
    map((response) => {
      return Buffer.from(response.data, 'binary')
    })
  )
}

// Images need to be publicly available. Even if the media-server is reachable on the
// public internet, sending the server address to Discord should be avoided, since
// everyone seeing the status will also be able to see the media-server domain.
function getExternalImageLink(item: BaseItemDto): string | undefined {
  if (!item.ProviderIds) return undefined

  // YouTube
  const youtubeId = item.ProviderIds.youtube
  if (youtubeId) return `https://img.youtube.com/vi/${youtubeId}/0.jpg`

  return undefined
}

function isYouTubeId(id: string): boolean {
  // Assuming based on the size.
  return id.length === 11
}

function getWatchLink(item: BaseItemDto): string | null {
  if (!item.ProviderIds) return null

  const youtubeId = item.ProviderIds.youtube
  // Make sure the provider ID set for YouTube is actually a YouTube ID.
  if (youtubeId && isYouTubeId(youtubeId)) return `https://youtube.com/watch?v=${youtubeId}`

  return null
}

function getSourceImageUrl(server: MediaServerConfig, item: BaseItemDto): string | undefined {
  // Not every item has a primary image,
  // but if the image is mentioned in the image
  // tags it can be assumed that the primary image exists.
  if (item.ImageTags?.Primary && item.Id) return getImageUrl(server, item.Id)

  // From high to low priority.
  const fallbackIds: Array<string> = [item.AlbumId, item.SeriesId, item.ParentId]
    // Remove undefined entries.
    .filter((id): id is string => typeof id === 'string')
    // Reverse to process in the right order.
    .reverse()

  const tryNextImage = (): string | undefined => {
    const id = fallbackIds.pop()

    if (!id) {
      logger.info(`Failed to get any image for item:`, item)
      return undefined
    }

    return getImageUrl(server, id)
  }

  return tryNextImage()
}
