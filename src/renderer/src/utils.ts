import type { ElectronAPI } from '@electron-toolkit/preload'
import { ActivityItemType } from '../../main/core/activity/types'

// For some reason the typings do not work. This is a workaround.
const electronApi: ElectronAPI = window['electron']
export const ipcRenderer = electronApi.ipcRenderer

export function getItemTypeText(type: ActivityItemType | 'All'): string {
  if (type === ActivityItemType.LiveRecordings) return 'Live Recordings'
  if (type === ActivityItemType.LiveTv) return 'Live TV'
  if (type === ActivityItemType.MusicVideos) return 'Music Videos'
  if (type === ActivityItemType.OtherVideos) return 'Other Videos'
  return type
}
