import log from 'electron-log'
import { Activity } from './types'
import { BehaviorSubject, Observable, combineLatest, map, tap } from 'rxjs'
import { configActivity$ } from '../stores/config'
import { mediaServerActivity$ } from '../media-server'
import { name, homepage } from '../../../../package.json'

const logger = log.scope('activity')

const activity: BehaviorSubject<Activity | null> = new BehaviorSubject<Activity | null>(null)
export const activity$: Observable<Activity | null> = activity.asObservable()

// Subscribe to activity providers.
combineLatest([
  // Get config and trigger re-build activity on config change.
  configActivity$.pipe(tap(() => logger.debug(`Re-building activity after config change.`))),
  mediaServerActivity$
])
  .pipe(
    map(([config, mediaServerActivity]) => {
      // Add additional data according to config.
      if (config.isHomepageLinked)
        mediaServerActivity?.externalLinks.push({ label: `${name}?`, url: homepage })

      // Freeze to prevent further modification.
      Object.freeze(mediaServerActivity)
      Object.freeze(mediaServerActivity?.artists)
      Object.freeze(mediaServerActivity?.genres)
      Object.freeze(mediaServerActivity?.externalLinks)
      return mediaServerActivity
    })
  )
  .subscribe((mediaServerActivity) => activity.next(mediaServerActivity))

// Logging of activity.
activity.subscribe((activity) => {
  logger.debug(`New activity:`, activity)
})

export function clearActivity(): void {
  activity.next(null)
}
