import { BaseItemDto, PlayerStateInfo, Session_SessionInfo } from '../emby-client'
import { MediaServerConfig } from '../stores/config.types'

// Some additional types, not provided by the API.
export enum ItemMediaType {
  Audio = 'Audio',
  Video = 'Video'
}

export enum ItemType {
  Episode = 'Episode',
  Movie = 'Movie',
  TvChannel = 'TvChannel',
  MusicVideo = 'MusicVideo'
}

export type ValidSession = Session_SessionInfo & {
  NowPlayingItem: BaseItemDto
  PlayState: PlayerStateInfo
}

export type PollingResult = {
  server: MediaServerConfig
  nowPlayingSession: ValidSession | null
}

export type PollingResultPlaying = PollingResult & { nowPlayingSession: ValidSession }
