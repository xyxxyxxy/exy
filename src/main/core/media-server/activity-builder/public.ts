import log from 'electron-log'
import { Activity, ExternalDataType } from '../../activity/types'
import { Observable, catchError, from, map, of } from 'rxjs'
import axios from 'axios'

const logger = log.scope('builder-public')

// Looks for public images and links for the item.
// Returns an activity with the available values set.
export const addPublicContent$ = (activity: Activity): Observable<Activity> => {
  if (!activity.path) return of(activity)

  const youTubeId = getId(activity.path, /youtube.*\[([^"&?/\s]{11})\]/i)
  const bitChuteId = getId(activity.path, /bitchute.*\[([^"&?/\s]*)\]/i)

  if (youTubeId && bitChuteId)
    logger.warn(`Multiple matches for activity with path:`, activity.path)

  if (youTubeId) {
    const watchUrl = `https://youtube.com/watch?v=${youTubeId}`
    const imageUrl = `https://img.youtube.com/vi/${youTubeId}/0.jpg`
    // Using image URL for YouTube, since the video 404 page is responding with status 200.
    return confirm$(imageUrl).pipe(
      map((isValid) => {
        if (isValid) add(activity, ExternalDataType.YouTube, watchUrl, imageUrl)
        return activity
      })
    )
  }

  if (bitChuteId) {
    const watchUrl = `https://www.bitchute.com/video/${bitChuteId}/`
    return confirm$(watchUrl).pipe(
      map((isValid) => {
        if (isValid) add(activity, ExternalDataType.BitChute, watchUrl)
        return activity
      })
    )
  }

  return of(activity)
}

function getId(path: string, idMatcher: RegExp): string | null {
  const match = path.match(idMatcher)
  if (!match || !match[1]) return null
  return match[1]
}

function confirm$(url: string): Observable<boolean> {
  return from(axios.get(url)).pipe(
    map((response) => response.status === 200),
    catchError((error) => {
      logger.warn(`Public URL "${url}" failed confirmation.`, error)
      return of(false)
    })
  )
}

function add(
  activity: Activity,
  dataType: ExternalDataType.YouTube | ExternalDataType.BitChute,
  watchUrl: string,
  imageUrl?: string
): void {
  if (imageUrl) activity.imageUrl = imageUrl
  activity.externalData.push({ type: dataType, url: watchUrl })
}
