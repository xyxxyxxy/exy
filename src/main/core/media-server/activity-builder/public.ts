import log from 'electron-log'
import { Activity } from '../../activity/types'
import { Observable, catchError, from, map, of, tap } from 'rxjs'

const logger = log.scope('builder-public')

// Looks for public images and links for the item.
// Returns an activity with the available values set.
export const addPublicContent$ = (activity: Activity): Observable<Activity> => {
  if (!activity.path) return of(activity)

  const youTubeId = getId(activity.path, /youtube.*\[([^"&?/\s]{11})\]/i)
  const bitChuteId = getId(activity.path, /bitchute.*\[([^"&?/\s]*)\]/i)

  if (youTubeId && bitChuteId)
    logger.warn(`Multiple matches for activity with path:`, activity.path)

  if (youTubeId)
    return confirmAndAdd$(
      activity,
      'YouTube',
      `https://youtube.com/watch?v=${youTubeId}`,
      `https://img.youtube.com/vi/${youTubeId}/0.jpg`
    )
  if (bitChuteId)
    return confirmAndAdd$(activity, 'BitChute', `https://www.bitchute.com/video/${bitChuteId}/`)

  return of(activity)
}

function getId(path: string, idMatcher: RegExp): string | null {
  const match = path.match(idMatcher)
  if (!match || !match[1]) return null
  return match[1]
}

function confirmAndAdd$(
  activity: Activity,
  siteName: string,
  watchUrl: string,
  imageUrl?: string
): Observable<Activity> {
  logger.debug(`Checking watch link  for ${siteName}.`)
  return from(fetch(watchUrl)).pipe(
    tap((response) => {
      if (!response.ok) {
        throw new Error(`Watch link '${watchUrl}' failed confirmation request.`)
      }
    }),
    map(() => {
      // URL is valid.
      if (imageUrl) activity.imageUrl = imageUrl
      activity.externalLinks.push({ label: `Watch on ${siteName}`, url: watchUrl })
      return activity
    }),
    catchError((error) => {
      logger.warn(`Failed to get ${siteName} content.`, error)
      return of(activity)
    })
  )
}
