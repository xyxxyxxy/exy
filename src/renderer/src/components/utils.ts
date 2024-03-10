import { ActivityItemType } from '../../../main/core/activity/types'

export function getItemTypeText(type: ActivityItemType | 'All'): string {
  if (type === ActivityItemType.LiveRecordings) return 'Live Recordings'
  if (type === ActivityItemType.LiveTv) return 'Live TV'
  if (type === ActivityItemType.MusicVideos) return 'Music Videos'
  if (type === ActivityItemType.OtherVideos) return 'Other Videos'
  return type
}
