import type { ActivityItemType, ExternalDataType } from '../activity/types'

export type ConfigStore = {
  deviceId: string
  isStartupEnabled: boolean
  ignoredTypes: IgnoredMediaItemTypes
  mediaServers: Array<MediaServerConfig>
  isPlayStateShown: boolean
  isLogoUsed: boolean
  isThemeUsed: boolean
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
  DeviceId = 'deviceId',
  IgnoredTypes = 'ignoredTypes',
  IsStartupEnabled = 'isStartupEnabled',
  IsPlayStateShown = 'isPlayStateShown',
  IsLogoUsed = 'isLogoUsed',
  IsThemeUsed = 'isThemeUsed',
  ExternalLinks = 'externalLinks',
  MediaServers = 'mediaServers',
  IsDebugLoggingEnabled = 'isDebugLoggingEnabled'
}

// Set of properties to identify a connection.
// At least one of these must be
// different to make a unique connection.
export type MediaServerConnectionIdentifiers = Pick<
  MediaServerConfig,
  'address' | 'port' | 'username'
>
