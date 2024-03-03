import type { MediaServerConfig } from '../stores/config.types'

export enum ActivityMediaType {
  Audio = 'Audio',
  Video = 'Video',
  Book = 'Book'
}

// This enum is rendered in the 'ignore media type' UI.
// Order and values matter in that context.
export enum ActivityItemType {
  // Note: Emby does not have a special identifier for audio books.
  Music = 'Music',
  MusicVideo = 'Music Video',
  Movie = 'Movie',
  Episode = 'Episode',
  LiveTv = 'Live TV',
  LiveTvRecording = 'Live Recording',
  OtherVideo = 'Other Video',
  Book = 'Book'
}

export type ExternalLink = { label: string; url: string }
export type ActivityExternalLinks = Array<ExternalLink>

// These properties are used to determine if an activity changed.
export type ActivityBase = {
  title: string
  mediaType: ActivityMediaType
  itemType: ActivityItemType
  isPaused: boolean
  // Currently playing chapter.
  chapterTitle?: string
  // Path to file that is being played.
  path?: string
}

export type Activity = ActivityBase & {
  sourceType: MediaServerConfig['type']

  // Arrays.
  artists: Array<string>
  genres: Array<string>
  externalLinks: ActivityExternalLinks

  // Optionals.

  // Used as fallback in case no more detailed information is available.
  description?: string
  // Publicly available preview image URL.
  // Keep privacy in mind, do not set to URL containing media-server address.
  imageUrl?: string
  // Time when this media item was released.
  releaseDate?: Date
  // Set for live media.
  startTime?: Date
  // Set for media with a fixed end time.
  endTime?: Date

  // Mostly used for music.
  albumTitle?: string

  // Mostly used for shows
  showTitle?: string
  seasonTitle?: string
  episodeNumber?: number
}
