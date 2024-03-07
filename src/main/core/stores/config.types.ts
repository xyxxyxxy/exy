import type { ActivityItemType, ExternalDataType } from '../activity/types'

export type ConfigStore = {
  deviceId: string
  isStartupEnabled: boolean
  ignoredTypes: IgnoredMediaItemTypes
  mediaServers: Array<MediaServerConfig>
  imgurClientId: string | null
  activity: ActivityConfig
  externalLinks: Array<ExternalLinkConfig>
  isDebugLoggingEnabled: boolean
}

export type MediaServerConfig = {
  id: string
  isActive: boolean
  serverId: string
  userId: string
  accessToken: string
  type: 'emby' | 'jellyfin'
  protocol: 'http' | 'https'
  address: string
  port: number
  username: string
}

export type ActivityConfig = {
  isLogoShown: boolean
  isThemeColorUsed: boolean
}

export type IgnoredMediaItemTypes = Array<ActivityItemType>

export type ExternalLinkConfig = {
  id: string
  isActive: boolean
  label: string
  forItemType: ActivityItemType | 'All'
  target: ExternalDataType | 'CustomUrl'
  customUrl?: string
}

export enum ConfigSelector {
  deviceId = 'deviceId',
  IgnoredTypes = 'ignoredTypes',
  IsStartupEnabled = 'isStartupEnabled',
  Activity = 'activity',
  ExternalLinks = 'externalLinks',
  MediaServers = 'mediaServers',
  ImgurClientId = 'imgurClientId',
  IsDebugLoggingEnabled = 'isDebugLoggingEnabled'
}

// Set of properties to identify a connection.
// At least one of these must be
// different to make a unique connection.
export type MediaServerConnectionIdentifiers = Pick<
  MediaServerConfig,
  'address' | 'port' | 'username'
>
