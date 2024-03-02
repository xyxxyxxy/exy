import { Observable, catchError, map, of, switchMap, tap } from 'rxjs'
import { MediaServerConfig } from '../../stores/config.types'
import { getImageUrl } from '..'
import { getImgurLink$ } from '../../imgur'
import { Activity, ActivityBase, ActivityExternalLinks } from '../../activity/types'
import { ItemMediaType, ItemType, ValidSession } from '../types'
import type { BaseItemDto, PlayerStateInfo } from '../../emby-client'
import log from 'electron-log'
import { addPublicContent$ } from './public'

const logger = log.scope('builder-full')

// Builds a basic activity without expensive async operations.
export function buildFullActivity$(
  server: MediaServerConfig,
  session: ValidSession,
  baseActivity: ActivityBase
): Observable<Activity> {
  const item = session.NowPlayingItem
  const playState = session.PlayState

  const activity: Activity = {
    ...baseActivity,
    sourceType: server.type,
    artists: item.Artists || [],
    genres: item.Genres || [],
    description: item.Type === ItemType.TvChannel ? item.CurrentProgram?.Overview : item.Overview,
    albumTitle: item.Album,
    showTitle: item.SeriesName,
    seasonTitle: item.SeasonName,
    startTime: parseStartTime(item),
    episodeNumber: item.IndexNumber ? item.IndexNumber : undefined,
    releaseDate: parsePremierDate(item),
    externalLinks: item.ExternalUrls ? mapExternalLinks(item) : [],
    endTime: parseEndTime(item, playState)
  }

  return addPublicContent$(activity).pipe(
    switchMap((activity) => {
      // Adding the image can be avoided if the public content already added a URL.
      if (activity.imageUrl) return of(activity)
      else return addImage$(activity, server, session)
    })
  )
}

function mapExternalLinks(item: BaseItemDto): ActivityExternalLinks {
  const urls = item.ExternalUrls
  if (!urls) return []
  // Select specific links to include.

  // MusicBrainz for audio.
  if (item.MediaType === ItemMediaType.Audio) {
    const musicBrainz = urls.find((externalUrl) => externalUrl.Url?.includes(`/release/`))?.Url
    if (musicBrainz) return [{ label: `Checkout this Release`, url: musicBrainz }]
  }

  // IMDb for movies.
  if (item.Type === ItemType.Movie) {
    const IMDb = urls.find((externalUrl) => externalUrl.Name === 'IMDb')?.Url
    if (IMDb) return [{ label: `Checkout this Movie`, url: IMDb }]
  }

  // TheTVDB for episodes.
  if (item.Type === ItemType.Movie) {
    const theTVDB = urls.find((externalUrl) => externalUrl.Name === 'TheTVDB')?.Url
    if (theTVDB) return [{ label: `Checkout this Episode`, url: theTVDB }]
  }

  return []
}

function parsePremierDate(item: BaseItemDto): Date | undefined {
  // For home video, the date created is returned.
  if (item.Type === ItemType.Video && item.DateCreated) return new Date(item.DateCreated)

  if (!item.PremiereDate) return undefined
  const date: Date = new Date(item.PremiereDate)

  // Avoid invalid dates. Faced the issue of a premier date set to '1' once.
  if (date && date.getFullYear() < 1000) return undefined

  return date
}

function parseStartTime(item: BaseItemDto): Date | undefined {
  // TODO This is not the time watching started.
  if (item.Type !== ItemType.TvChannel || !item.CurrentProgram?.StartDate) return undefined
  return new Date(item.CurrentProgram.StartDate)
}

function parseEndTime(item: BaseItemDto, playState: PlayerStateInfo): Date | undefined {
  if (item.MediaType === ItemMediaType.Book || !item.RunTimeTicks || !playState.PositionTicks)
    return undefined

  const runtimeMs: number = item.RunTimeTicks / 10000
  const playPositionMs: number = playState.PositionTicks / 10000
  // Now, plus runtime, minus play position.
  return new Date(Date.now().valueOf() + runtimeMs - playPositionMs)
}

function addImage$(
  activity: Activity,
  server: MediaServerConfig,
  session: ValidSession
): Observable<Activity> {
  if (activity.imageUrl) return of(activity)

  return getImageLink$(server, session.NowPlayingItem).pipe(
    tap((url) => (activity.imageUrl = url)),
    map(() => activity)
  )
}

function getImageLink$(
  server: MediaServerConfig,
  item: BaseItemDto
): Observable<string | undefined> {
  const imageIds: Array<string> = [
    // Try the item image first.
    item.Id,
    // Emby responds with 500 error for primary images of some songs.
    // Also some episodes don't have images, like specials/extras not present in TVDB.
    // In such cases we fallback to the parent image (Album cover for songs and show poster for episodes).
    item.ParentId,
    // For some shows the parent ID also returns nothing. Falling back to series ID and then parent backdrop.
    item.SeriesId,
    item.ParentBackdropItemId
  ]
    // Remove undefined entries.
    .filter((id): id is string => typeof id === 'string')
    // Reverse to process in the right order.
    .reverse()

  const tryNextImage = (): Observable<string | undefined> => {
    const id = imageIds.pop()

    if (!id) {
      logger.info(`Failed to get any image for item:`, item)
      return of(undefined)
    }

    const url = getImageUrl(server, id)
    return getImgurLink$(url).pipe(catchError(() => tryNextImage()))
  }

  return tryNextImage()
}
