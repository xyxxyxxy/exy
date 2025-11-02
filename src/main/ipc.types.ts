import { type MediaServerConfig } from './core/stores/config.types'

export enum IpcChannel {
  UpdateAvailable = 'UpdateAvailable',
  Config = 'Config',
  DiscordStatus = 'DiscordStatus',
  ToggleStartup = 'ToggleStartup',
  ToggleIgnoredMediaType = 'ToggleIgnoredMediaType',
  ToggleIsPlayStateShown = 'ToggleIsPlayStateShown',
  ToggleIsLogoUsed = 'ToggleActivityLogoShown',
  ToggleIsThemeUsed = 'ToggleIsThemeUsed',
  TestDiscordActivity = 'TestDiscordActivity',
  MediaServerActivities = 'MediaServerActivities',
  ToggleMediaServerActive = 'ToggleMediaServerActive',
  DisconnectMediaServer = 'DisconnectMediaServer',
  TestMediaServer = 'TestMediaServer',
  ConnectMediaServer = 'ConnectMediaServer',
  SaveExternalLink = 'SaveExternalLink',
  ToggleExternalLinkActive = 'ToggleExternalLinkActive',
  MoveExternalLinkUp = 'MoveExternalLinkUp',
  MoveExternalLinkDown = 'MoveExternalLinkDown',
  DeleteExternalLink = 'DeleteExternalLink',
  ClearCache = 'ResetCache',
  ResetExternalLinks = 'ResetExternalLinks',
  ClearConfig = 'ResetConfig',
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
