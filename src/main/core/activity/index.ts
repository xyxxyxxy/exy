import log from 'electron-log'
import { Activity } from './types'
import { BehaviorSubject, Observable, combineLatest, map, tap } from 'rxjs'
import { configActivity$ } from '../stores/config'
import { mediaServerActivity$ } from '../media-server'
import { addConfigExtras } from './utils'

const logger = log.scope('activity')

const activitySubject: BehaviorSubject<Activity | null> = new BehaviorSubject<Activity | null>(null)
export const activity$: Observable<Activity | null> = activitySubject.asObservable()

// Subscribe to activity providers.
combineLatest([
  // Get config and trigger re-build activity on config change.
  configActivity$.pipe(tap(() => logger.debug(`Re-building activity after config change.`))),
  mediaServerActivity$
])
  .pipe(
    // Add configured extras.
    map(([config, activity]) => {
      if (!activity) return activity
      // Clone activity before modifying, to
      // avoid mutating the same object twice on config event.
      const clone = Object.assign({}, activity)
      return addConfigExtras(clone, config)
    })
  )
  .subscribe((mediaServerActivity) => activitySubject.next(mediaServerActivity))

// Logging of activity.
activitySubject.subscribe((activity) => {
  logger.debug(`New activity:`, activity)
})

export function clearActivity(): void {
  activitySubject.next(null)
}
