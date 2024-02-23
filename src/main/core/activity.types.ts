import { Presence } from 'discord-rpc'

export enum ItemMediaType {
  Audio = 'Audio',
  Video = 'Video'
}

export enum ItemType {
  // Music has no type, only media type.
  Episode = 'Episode',
  Movie = 'Movie',
  TvChannel = 'TvChannel',
  MusicVideo = 'MusicVideo'
}

// Enhanced type with some defaults for easier handling.
export type Activity = Presence & {
  buttons: Array<Button>
}
export type Button = { label: string; url: string }
