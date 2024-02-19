import { MediaServerConfig } from './core/stores/config.types'

export enum IpcChannel {
  Config = 'Config',
  ToggleStartup = 'ToggleStartup',
  ToggleDebugLogging = 'ToggleDebugLogging',
  SaveImgurClientId = 'SaveImgurClientId',
  ConnectMediaServer = 'ConnectMediaServer',
  DisconnectMediaServer = 'DisconnectMediaServer'
}

// Initial configuration used to generate a new media-server config.
export type NewMediaServerConfig = Pick<
  MediaServerConfig,
  'type' | 'protocol' | 'address' | 'port' | 'username'
> & { password: string } // Password can be empty string, since it is optional.

export type ConnectionErrorInfo = {
  message: string
  code?: string
  status?: number
}
