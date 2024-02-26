import { Activity, ActivityItemType, ActivityMediaType, ActivityPlayState } from './types'

export function getStateText(activity: Activity, isMediaServerTypeShown: boolean): string {
  if (isMediaServerTypeShown && activity.playState === ActivityPlayState.Playing) {
    const sourceCapitalized = activity.sourceType[0].toUpperCase() + activity.sourceType.slice(1)
    return `${activity.playState} on ${sourceCapitalized}`
  }

  return activity.playState
}

export function getStateImage(activity: Activity, isMediaServerTypeShown: boolean): string {
  // Return special icons for songs, depending on genre.
  let prefix = isMediaServerTypeShown ? activity.sourceType : 'neutral'
  prefix += '-'
  if (activity.playState === ActivityPlayState.Paused) return prefix + `pause`
  if (activity.playState === ActivityPlayState.Muted) return prefix + `mute`
  return prefix + `small`
}

export function getPrimaryText(activity: Activity): string {
  let text = activity.mediaType === ActivityMediaType.Audio ? 'Listening to' : 'Watching'
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
  if (activity.itemType === ActivityItemType.Song && activity.albumtitle)
    return withReleaseYear(activity, activity.albumtitle)

  if (activity.itemType === ActivityItemType.Episode && activity.episodeNumber)
    return `Episode ${activity.episodeNumber} ${activity.title}`

  if (activity.itemType === ActivityItemType.Movie) return getGenreText(activity)

  if (activity.itemType === ActivityItemType.HomeVideo && activity.releaseDate)
    return activity.releaseDate.toDateString()

  return ''
}

function getArtistText(activity: Activity): string {
  if (!activity.artists.length) return ''
  return `by ` + activity.artists.join(`, `)
}

function getGenreText(activity: Activity): string {
  if (!activity.genres.length) return ''
  return `by ` + activity.genres.join(`/`)
}

function withReleaseYear(activity: Activity, str: string): string {
  return activity.releaseDate ? str + ` (${activity.releaseDate.getFullYear()})` : str
}
