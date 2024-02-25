import { Observable, catchError, map, of, tap } from 'rxjs'
import {
  Activity,
  ActivityBase,
  ActivityExternalLinks,
  ActivityItemType,
  ActivityMediaType,
  ActivityPlayState
} from '../activity/types'
import { BaseItemDto, ChapterInfo, PlayerStateInfo } from '../emby-client'
import { MediaServerConfig } from '../stores/config.types'
import { getItemImageUrl, getParentImageUrl } from '.'
import log from 'electron-log'
import { getImgurLink$ } from '../imgur'
import { ItemMediaType, ItemType, ValidSession } from './types'

const logMediaServerActivityBuilder = log.scope('media-server activity-builder')

export function buildActivityBase(session: ValidSession): ActivityBase {
  const item = session.NowPlayingItem
  const playState = session.PlayState

  const activity: ActivityBase = {
    title: item?.Name || item?.OriginalTitle || 'something',
    mediaType: getActivityMediaType(item),
    itemType: getActivityItemType(item),
    playState: getActivityPlayState(playState),
    chapterTitle: getChapterName(item, playState),
    path: item.Path
  }

  return activity
}

function getActivityMediaType(item?: BaseItemDto): ActivityMediaType {
  if (item?.MediaType === ItemMediaType.Audio) return ActivityMediaType.Audio
  if (item?.MediaType === ItemMediaType.Video) return ActivityMediaType.Video
  logMediaServerActivityBuilder.warn(`Unexpected media type '${item?.MediaType}'.`)
  return ActivityMediaType.Video
}

function getActivityItemType(item?: BaseItemDto): ActivityItemType {
  // Straight forward types.
  if (item?.Type === ItemType.Movie) return ActivityItemType.Movie
  if (item?.Type === ItemType.MusicVideo) return ActivityItemType.MusicVideo
  if (item?.Type === ItemType.TvChannel) return ActivityItemType.LiveTv

  // Music has type 'Audio' for item and media type.
  if (item?.MediaType === ItemMediaType.Audio && item.Type === ItemMediaType.Audio)
    return ActivityItemType.Song

  // Episodes can be episodes of a show or a live recording.
  if (item?.Type === ItemType.Episode) {
    // Live TV recordings did not have any index number in my tests.
    return item.IndexNumber ? ActivityItemType.Episode : ActivityItemType.LiveTvRecording
  }

  logMediaServerActivityBuilder.warn(
    `Unexpected item type '${item?.Type}' for media of type '${item?.MediaType}'.`
  )

  return ActivityItemType.Song
}

function getActivityPlayState(playStateInfo: PlayerStateInfo): ActivityPlayState {
  if (playStateInfo.IsPaused) return ActivityPlayState.Paused
  if (playStateInfo.IsMuted) return ActivityPlayState.Muted
  return ActivityPlayState.Playing
}

function getChapterName(item: BaseItemDto, playState: PlayerStateInfo): string | undefined {
  if (!item.Chapters?.length) return undefined

  let currentChapter: ChapterInfo = item.Chapters[0]
  item.Chapters.find((chapter) => {
    const chapterStartPosition = chapter.StartPositionTicks || 0
    const playPosition = playState.PositionTicks || 0
    // Going through chapters until the chapter start position is after the current play position.
    if (chapterStartPosition < playPosition) {
      currentChapter = chapter
      return false
    }

    return true
  })

  return currentChapter.Name
}

// Builds an activiti incliding all the informations that does not require async operations.
export function buildFullActivity$(
  baseActivity: ActivityBase,
  server: MediaServerConfig,
  session: ValidSession
): Observable<Activity> {
  const item = session.NowPlayingItem
  const playState = session.PlayState

  const activity: Activity = {
    ...baseActivity,
    sourceType: server.type,
    artists: item.Artists || [],
    genres: item.Genres || [],
    description: item.Type === ItemType.TvChannel ? item.CurrentProgram?.Overview : item.Overview,
    albumtitle: item.Album,
    showTitle: item.SeriesName,
    seasonTitle: item.SeasonName,
    startTime: parseStartTime(item),
    episodeNumber: item.IndexNumber ? item.IndexNumber : undefined,
    premierDate: item.PremiereDate ? parsePremierDate(item.PremiereDate) : undefined,
    externalLinks: item.ExternalUrls ? mapExternalLinks(item) : [],
    endTime: parseEndTime(item, playState)
  }

  return addImage$(activity, server, session)
}

function mapExternalLinks(item: BaseItemDto): ActivityExternalLinks {
  const urls = item.ExternalUrls
  if (!urls) return []
  // Select specific links to include.

  // Musicbrainz for audio.
  if (item.MediaType === ItemMediaType.Audio) {
    const musicMrainz = urls.find((externalUrl) => externalUrl.Url?.includes(`/release/`))?.Url
    if (musicMrainz) return [{ label: `Checkout this Release`, url: musicMrainz }]
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

function parsePremierDate(rawPremiereDate: string): Date | undefined {
  const date: Date = new Date(rawPremiereDate)

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
  if (!item.RunTimeTicks || !playState.PositionTicks) return undefined

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

  return getPrimaryImageLink$(server, session.NowPlayingItem).pipe(
    tap((url) => (activity.imageUrl = url)),
    map(() => activity)
  )
}

function getPrimaryImageLink$(
  server: MediaServerConfig,
  item: BaseItemDto
): Observable<string | undefined> {
  return getImgurLink$(getItemImageUrl(server, item)).pipe(
    catchError((error) => {
      logMediaServerActivityBuilder.warn(
        `Failed to get primary image link. Trying parent image next.`
      )
      logMediaServerActivityBuilder.debug(error)

      if (!item.ParentId) return of(undefined)

      // Emby responds with 500 error for primary images of some songs.
      // Also some episodes don't have images, like specials/extras not present in TVDB.
      // In such cases we fallback to the parent image (Album cover for songs and show poster for episodes).
      return getImgurLink$(getParentImageUrl(server, item)).pipe(
        catchError((error) => {
          logMediaServerActivityBuilder.warn(
            `Failed to get album image link. Continueing without primary image.`
          )
          logMediaServerActivityBuilder.debug(error)
          return of(undefined)
        })
      )
    })
  )
}
