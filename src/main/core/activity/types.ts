import { MediaServerConfig } from '../stores/config.types'

export enum ActivityMediaType {
  Audio = 'Audio',
  Video = 'Video',
  Book = 'Book'
}

export enum ActivityItemType {
  Song = 'Song',
  Podcast = 'Podcast', // TODO Needed?
  Movie = 'Movie',
  Episode = 'Episode',
  LiveTv = 'LiveTV',
  LiveTvRecording = 'LiveTvRecording',
  MusicVideo = 'MusicVideo',
  HomeVideo = 'HomeVideo',
  Book = 'Book'
}

export enum ActivityPlayState {
  Playing = 'Playing',
  Paused = 'Paused',
  Muted = 'Muted'
}

export type ExternalLink = { label: string; url: string }
export type ActivityExternalLinks = Array<ExternalLink>

// These properties are used to determine if an activity changed.
export type ActivityBase = {
  title: string
  mediaType: ActivityMediaType
  itemType: ActivityItemType
  playState: ActivityPlayState
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
