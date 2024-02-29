import type { ActivityBase } from '../activity/types'
import type { BaseItemDto, PlayerStateInfo, Session_SessionInfo } from '../emby-client'
import type { MediaServerConfig } from '../stores/config.types'

// Some additional types, not provided by the API.
export enum ItemMediaType {
  Audio = 'Audio',
  Video = 'Video',
  Book = 'Book'
}

export enum ItemType {
  Episode = 'Episode',
  Movie = 'Movie',
  TvChannel = 'TvChannel',
  MusicVideo = 'MusicVideo',
  // Used for "Home videos & photos" library.
  Video = 'Video',
  Book = 'Book'
}

export type ValidSession = Session_SessionInfo & {
  NowPlayingItem: BaseItemDto
  PlayState: PlayerStateInfo
}

export type PollingBaseResult = {
  server: MediaServerConfig
  nowPlayingSession: ActivityBase
}

export type PollingResult = {
  server: MediaServerConfig
  nowPlayingSession: ValidSession | null
}

export type PollingResultPlaying = PollingResult & { nowPlayingSession: ValidSession }

export type MediaServerActivityMapping = { [serverId: string]: ActivityBase | null }
