import type { ActivityBase } from '../activity/types'
import { BaseItemDto, PlayerStateInfo, SessionSessionInfo } from '../openapi/emby'
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
  Trailer = 'Trailer',
  // Used for "Home videos & photos" library.
  Video = 'Video',
  Book = 'Book'
}

export type ValidSession = SessionSessionInfo & {
  NowPlayingItem: BaseItemDto
  PlayState: PlayerStateInfo
}

export type PollingResult = {
  server: MediaServerConfig
  session: ValidSession
  activity: ActivityBase | null
}

export type PollingResultPlaying = PollingResult & { activity: ValidSession }

export type MediaServerActivityMapping = { [serverId: string]: ActivityBase | null }
