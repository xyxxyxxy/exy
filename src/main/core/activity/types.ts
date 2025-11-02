import type { MediaServerConfig } from '../stores/config.types'

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
  externalData: Array<ExternalData>

  // Optionals.

  // Used as fallback in case no more detailed information is available.
  description?: string
  tagline?: string
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

export enum ActivityMediaType {
  Audio = 'Audio',
  Video = 'Video', // Visual content in general.
  Book = 'Book' // Books are special (Jellyfin only).
}

export function isActivityItemType(str: string): str is ActivityItemType {
  return [
    'Songs',
    'Episodes',
    'Movies',
    'MusicVideos',
    'LiveTv',
    'LiveRecordings',
    'OtherVideos',
    'Books'
  ].includes(str)
}

export enum ActivityItemType {
  // Note: Emby does not have a special identifier for audio books.
  Songs = 'Songs',
  Episodes = 'Episodes',
  Movies = 'Movies',
  MusicVideos = 'MusicVideos',
  LiveTv = 'LiveTv',
  LiveRecordings = 'LiveRecordings',
  OtherVideos = 'OtherVideos',
  Books = 'Books'
}

export type ExternalData = {
  type: ExternalDataType
  url: string
}

export enum ExternalDataType {
  // Music
  MusicBrainzAlbum = 'MusicBrainz Album',
  MusicBrainzAlbumArtist = 'MusicBrainz Album Artist',
  MusicBrainzArtist = 'MusicBrainz Artist',
  MusicBrainzReleaseGroup = 'MusicBrainz Release Group',
  MusicBrainzTrack = 'MusicBrainz Track',
  // Episodes
  TheTVDB = 'TheTVDB',
  // Movies
  IMDb = 'IMDb',
  TheMovieDb = 'TheMovieDb',
  Trakt = 'Trakt',
  // Public
  WatchLink = 'Watch link'
}
