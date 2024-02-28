import { type MediaServerConfig } from './core/stores/config.types'

export enum IpcChannel {
  Config = 'Config',
  DiscordStatus = 'DiscordStatus',
  ToggleStartup = 'ToggleStartup',
  ToggleActivityLogoShown = 'ToggleActivityLogoShown',
  ToggleActivityThemeColorUsed = 'ToggleActivityThemeColorUsed',
  ToggleActivityHomepageLinked = 'ToggleActivityHomepageLinked',
  TestDiscordActivity = 'TestDiscordActivity',
  MediaServerActivities = 'MediaServerActivities',
  ToggleMediaServerActive = 'ToggleMediaServerActive',
  DisconnectMediaServer = 'DisconnectMediaServer',
  TestMediaServer = 'TestMediaServer',
  ConnectMediaServer = 'ConnectMediaServer',
  SaveImgurClientId = 'SaveImgurClientId',
  ToggleDebugLogging = 'ToggleDebugLogging',
  OpenLogFile = 'OpenLogFile'
}

// Initial configuration used to generate a new media-server config.
export type NewMediaServerConfig = Pick<
  MediaServerConfig,
  'type' | 'protocol' | 'address' | 'port' | 'username'
> & { password: string } // Password can be empty string, since it is optional.

export type ConnectMediaServerError = {
  message: string
  code?: string
  status?: number
}
