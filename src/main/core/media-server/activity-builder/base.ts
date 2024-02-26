import {
  ActivityBase,
  ActivityItemType,
  ActivityMediaType,
  ActivityPlayState
} from '../../activity/types'
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
    playState: getActivityPlayState(playState),
    chapterTitle: getChapterName(item, playState),
    path: item.Path
  }

  return activity
}

function getActivityMediaType(item?: BaseItemDto): ActivityMediaType {
  if (item?.MediaType === ItemMediaType.Audio) return ActivityMediaType.Audio
  if (item?.MediaType === ItemMediaType.Video) return ActivityMediaType.Video
  logger.warn(`Unexpected media type '${item?.MediaType}'.`)
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

  if (item?.Type === ItemType.Video) {
    return ActivityItemType.HomeVideo
  }

  logger.warn(`Unexpected item type '${item?.Type}' for media of type '${item?.MediaType}'.`)

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
