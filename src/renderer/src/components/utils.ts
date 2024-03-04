import { ActivityItemType } from '../../../main/core/activity/types'

export function getItemTypeText(value: ActivityItemType): string {
  if (value === ActivityItemType.LiveRecordings) return 'Live Recording'
  if (value === ActivityItemType.LiveTv) return 'Live TV'
  if (value === ActivityItemType.MusicVideos) return 'Music Videos'
  if (value === ActivityItemType.OtherVideos) return 'Other Videos'
  return value
}
