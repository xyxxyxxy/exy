export type ConfigStore = {
  deviceId: string
  isStartupEnabled: boolean
  isMediaServerTypeShown: boolean
  mediaServers: Array<MediaServerConfig>
  imgurClientId: string | null
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
  ignoredLibraryIds: Array<string>
}

// Set of properties to identify a connection.
// At least one of these must be
// different to make a unique connection.
export type MediaServerConnectionIdentifiers = Pick<
  MediaServerConfig,
  'address' | 'port' | 'username'
>
