export type ConfigStore = {
  deviceId: string
  isStartupEnabled: boolean
  mediaServers: Array<MediaServerConfig>
  imgurClientId: string | null
  activity: ActivityConfig
  isDebugLoggingEnabled: boolean
}

export type ActivityConfig = {
  isLogoShown: boolean
  isThemeColorUsed: boolean
  isHomepageLinked: boolean
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
