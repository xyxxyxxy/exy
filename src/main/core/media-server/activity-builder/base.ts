import { ActivityBase, ActivityItemType, ActivityMediaType } from '../../activity/types'
import { BaseItemDto, ChapterInfo, PlayerStateInfo } from '../../emby-client'
import { ItemMediaType, ItemType, ValidSession } from '../types'
import log from 'electron-log'

const logger = log.scope('builder-base')

export function buildActivityBase(session: ValidSession): ActivityBase {
  const item = session.NowPlayingItem
  const playState = session.PlayState

  const activity: ActivityBase = {
    title: item?.Name || item?.OriginalTitle || 'something',
    mediaType: getActivityMediaType(item),
    itemType: getActivityItemType(item),
    isPaused: !!playState.IsPaused,
    chapterTitle: getChapterName(item, playState),
    path: item.Path
  }

  return activity
}

function getActivityMediaType(item?: BaseItemDto): ActivityMediaType {
  if (item?.MediaType === ItemMediaType.Audio) return ActivityMediaType.Audio
  if (item?.MediaType === ItemMediaType.Video) return ActivityMediaType.Video
  if (item?.MediaType === ItemMediaType.Book) return ActivityMediaType.Book
  logger.warn(`Unexpected media type '${item?.MediaType}'.`)
  return ActivityMediaType.Video
}

function getActivityItemType(item?: BaseItemDto): ActivityItemType {
  // Straight forward types.
  if (item?.Type === ItemType.Movie) return ActivityItemType.Movies
  if (item?.Type === ItemType.MusicVideo) return ActivityItemType.MusicVideos
  if (item?.Type === ItemType.TvChannel) return ActivityItemType.LiveTv

  if (item?.MediaType === ItemMediaType.Audio && item.Type === ItemMediaType.Audio)
    // Music has type 'Audio' for item and media type.
    return ActivityItemType.Songs

  // Episodes can be episodes of a show or a live recording.
  if (item?.Type === ItemType.Episode) {
    // Live TV recordings did not have any index number in my tests.
    return item.IndexNumber ? ActivityItemType.Episodes : ActivityItemType.LiveRecordings
  }

  if (item?.Type === ItemType.Video) return ActivityItemType.OtherVideos
  if (item?.Type === ItemType.Book) return ActivityItemType.Books
  // No special treatment for trailers.
  if (item?.Type === ItemType.Trailer) return ActivityItemType.OtherVideos

  logger.warn(`Unexpected item type '${item?.Type}' for media of type '${item?.MediaType}'.`)

  return ActivityItemType.Songs
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
