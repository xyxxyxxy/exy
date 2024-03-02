import { ActivityConfig } from '../stores/config.types'
import { Activity, ActivityItemType, ActivityMediaType } from './types'

export function getStateText(activity: Activity, config: ActivityConfig): string {
  if (activity.isPaused) return `Paused`

  // Genres for music.
  if (activity.itemType === ActivityItemType.Song && hasGenres(activity)) {
    return getGenreText(activity)
  }

  if (config.isThemeColorUsed) {
    const sourceCapitalized = activity.sourceType[0].toUpperCase() + activity.sourceType.slice(1)
    return `Playing on ${sourceCapitalized}`
  }

  return `Playing`
}

export function getPrimaryText(activity: Activity): string {
  let text = 'Watching'
  if (activity.mediaType === ActivityMediaType.Audio) text = 'Listening to'
  if (activity.mediaType === ActivityMediaType.Book) text = 'Reading'
  text += ' '
  // For shows the main text is the title of the show.
  text +=
    activity.showTitle && activity.itemType === ActivityItemType.Episode
      ? activity.showTitle
      : activity.title

  // For shows the premier year is added in brackets.

  return activity.releaseDate && activity.itemType === ActivityItemType.Movie
    ? withReleaseYear(activity, text)
    : text
}

export function getSecondaryText(activity: Activity): string {
  // Artist list for songs and music videos.
  if ([ActivityItemType.Song, ActivityItemType.MusicVideo].includes(activity.itemType))
    return getArtistText(activity)

  if (activity.itemType === ActivityItemType.Episode && activity.seasonTitle) {
    let text = activity.seasonTitle

    // Add year after season, if the season itself does not include four digits for a year.
    if (activity.releaseDate && !activity.seasonTitle?.match(/\d{4}/))
      text = withReleaseYear(activity, text)

    return text
  }

  if (activity.itemType === ActivityItemType.HomeVideo && activity.chapterTitle)
    return activity.chapterTitle

  return activity.description || ''
}

export function getImageText(activity: Activity): string {
  if (activity.itemType === ActivityItemType.Song && activity.albumTitle)
    return withReleaseYear(activity, activity.albumTitle)

  if (activity.itemType === ActivityItemType.Episode && activity.episodeNumber)
    return `Episode ${activity.episodeNumber} ${activity.title}`

  if (activity.itemType === ActivityItemType.Movie) return getGenreText(activity)

  if (activity.itemType === ActivityItemType.HomeVideo && activity.releaseDate)
    return activity.releaseDate.toDateString()

  return ''
}

export function getEndTime(activity: Activity): Date | undefined {
  if (
    !activity.isPaused &&
    // No time for songs and music videos, not really relevant.
    activity.itemType !== ActivityItemType.Song &&
    activity.itemType !== ActivityItemType.MusicVideo
  )
    return activity.endTime

  return undefined
}

function getArtistText(activity: Activity): string {
  if (!activity.artists.length) return ''
  return `by ` + activity.artists.slice(0, 3).join(`, `)
}

export function isMusic(activity: Activity): boolean {
  return (
    activity.itemType !== ActivityItemType.Song && activity.itemType !== ActivityItemType.MusicVideo
  )
}

export function hasGenres(activity: Activity): boolean {
  return !!activity.genres.length
}

export function getGenreText(activity: Activity): string {
  if (!activity.genres.length) return ''
  // Limit to first genre.
  return activity.genres[1]
}

function withReleaseYear(activity: Activity, str: string): string {
  return activity.releaseDate ? str + ` (${activity.releaseDate.getFullYear()})` : str
}
