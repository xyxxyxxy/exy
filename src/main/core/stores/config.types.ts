import type { ActivityItemType, ExternalDataTypes, ExternalLink } from '../activity/types'

export type ConfigStore = {
  deviceId: string
  isStartupEnabled: boolean
  ignoredTypes: IgnoredMediaItemTypes
  mediaServers: Array<MediaServerConfig>
  imgurClientId: string | null
  activity: ActivityConfig
  isDebugLoggingEnabled: boolean
}

export type IgnoredMediaItemTypes = Array<ActivityItemType>
export type ExternalLinkConfig = {
  isActive: boolean
  label: string
  type: ExternalDataTypes
  for?: ActivityItemType // All if unset.
  customUrl?: string
}
// Examples:
// { isActive: true, appliesTo: 'Shows', label: 'Watch on YouTube', url: '{YouTube}' }
// TODO
// TODO Order is important.
// Save button needed
// Hint that only first two buttons will be displayed

export type ActivityConfig = {
  isLogoShown: boolean
  isThemeColorUsed: boolean
  isHomepageLinked: boolean
  externalLinks: Array<ExternalLinkConfig>
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

export enum ConfigSelector {
  deviceId = 'deviceId',
  IgnoredTypes = 'ignoredTypes',
  IsStartupEnabled = 'isStartupEnabled',
  Activity = 'activity',
  isHomepageLinked = 'isHomepageLinked',
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
