import { ActivityConfig, IgnoredMediaItemTypes } from '../stores/config.types'
import { Activity, ActivityBase, ActivityItemType, ActivityMediaType } from './types'
import { name, homepage } from '../../../../package.json'

// Pick one activity from an array of activities.
// Filtering out paused activities, if there are playing ones.
// Might return ignored activity types. Prefers not ignored types.
export function pickActivity(
  activities: Array<ActivityBase>,
  ignoredTypes: IgnoredMediaItemTypes
): ActivityBase | null {
  if (!activities.length) return null

  // Remove options if there are better alternatives.
  const pauseFiltered = filterSome(activities, (activity) => !activity.isPaused)
  const ignoreFiltered = filterSome(
    pauseFiltered,
    (activity) => !isIgnoredType(activity, ignoredTypes)
  )

  // If there are still multiple activities, pick the first.
  return ignoreFiltered[0]
}

// Applies a filter if not all, but some elements match the filter.
function filterSome<T>(source: Array<T>, filter: (element: T) => boolean): Array<T> {
  const every = source.every(filter)
  const some = source.some(filter)
  if (!every && some) return source.filter(filter)
  return source
}

export function isIgnoredType(
  activity: ActivityBase,
  ignoredTypes: IgnoredMediaItemTypes
): boolean {
  return ignoredTypes.includes(activity.itemType)
}

export function getStateText(activity: Activity, config: ActivityConfig): string {
  if (activity.isPaused) return `Paused`

  // Genres for music.
  if (activity.itemType === ActivityItemType.Music && hasGenres(activity)) {
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
  if ([ActivityItemType.Music, ActivityItemType.MusicVideo].includes(activity.itemType))
    return getArtistText(activity)

  if (activity.itemType === ActivityItemType.Episode && activity.seasonTitle) {
    let text = activity.seasonTitle

    // Add year after season, if the season itself does not include four digits for a year.
    if (activity.releaseDate && !activity.seasonTitle?.match(/\d{4}/))
      text = withReleaseYear(activity, text)

    return text
  }

  if (activity.itemType === ActivityItemType.OtherVideo && activity.chapterTitle)
    return activity.chapterTitle

  return activity.description || ''
}

export function getImageText(activity: Activity): string {
  if (activity.itemType === ActivityItemType.Music && activity.albumTitle)
    return withReleaseYear(activity, activity.albumTitle)

  if (activity.itemType === ActivityItemType.Episode && activity.episodeNumber)
    return `Episode ${activity.episodeNumber} ${activity.title}`

  if (activity.itemType === ActivityItemType.Movie) return getGenreText(activity)

  if (activity.itemType === ActivityItemType.OtherVideo && activity.releaseDate)
    return activity.releaseDate.toDateString()

  return ''
}

export function getEndTime(activity: Activity): Date | undefined {
  if (
    !activity.isPaused &&
    // No time for songs and music videos, not really relevant.
    activity.itemType !== ActivityItemType.Music &&
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
  return [ActivityItemType.Music, ActivityItemType.MusicVideo].includes(activity.itemType)
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

export function addConfigExtras(activity: Activity, config: ActivityConfig): Activity {
  // Add additional data according to config.
  if (config.isHomepageLinked && activity?.externalLinks)
    activity.externalLinks.push({ label: `${name}?`, url: homepage })

  // Freeze to prevent further modification.
  return activity
}
