import { ActivityConfig } from '../stores/config.types'
import { Activity, ActivityItemType, ActivityMediaType, ActivityPlayState } from './types'

export function getStateText(activity: Activity, config: ActivityConfig): string {
  if (config.isThemeColorUsed && activity.playState === ActivityPlayState.Playing) {
    const sourceCapitalized = activity.sourceType[0].toUpperCase() + activity.sourceType.slice(1)
    return `${activity.playState} on ${sourceCapitalized}`
  }

  return activity.playState
}

export function getStateImage(activity: Activity, config: ActivityConfig): string {
  if (activity.mediaType === ActivityMediaType.Book) return ''

  let theme = config.isThemeColorUsed ? activity.sourceType : 'neutral'
  theme += '-'
  if (activity.playState === ActivityPlayState.Paused) return theme + `pause`
  if (activity.playState === ActivityPlayState.Muted) return theme + `mute`
  // TODO Return special icons for songs, depending on genre.
  const genreImage = getGenreImage(activity)
  if (genreImage) return theme + genreImage

  const playIcon = config.isLogoShown ? 'small' : 'play'

  return theme + playIcon
}

function getGenreImage(activity: Activity): null | 'casette' | 'acoustic-guitar' {
  // Check case insensitive if a genre identifier is included in any of the genres.
  const isGenre = (identifier: string): boolean =>
    activity.genres.some((genre) => genre.match(new RegExp(identifier, 'i')))

  // if (isGenre('indie')) return 'casette'
  // if (isGenre('rock')) return 'acoustic-guitar'
  // pop
  // rock
  // metal
  // classical?
  // electro?
  // jazz?

  return null
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
