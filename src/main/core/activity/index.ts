import log from 'electron-log'
import { Activity } from './types'
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  map,
  shareReplay,
  tap,
  withLatestFrom
} from 'rxjs'
import { configActivity$, configIgnoredItemTypes$ } from '../stores/config'
import { mediaServerMainActivity$ } from '../media-server'
import { addConfigExtras, isIgnoredActivity } from './utils'

const logger = log.scope('activity')

const activitySubject: BehaviorSubject<Activity | null> = new BehaviorSubject<Activity | null>(null)
export const activity$: Observable<Activity | null> = activitySubject.asObservable().pipe(
  tap((activity) => logger.debug(`New activity:`, activity)),
  shareReplay(1)
)

// Subscribe to activity providers.
combineLatest([
  // Get config and trigger re-build activity on config change.
  configActivity$.pipe(tap(() => logger.debug(`Re-building activity after config change.`))),
  mediaServerMainActivity$
])
  .pipe(
    // Add configured extras.
    map(([config, activity]) => {
      if (!activity) return activity
      // Clone activity before modifying, to
      // avoid mutating the same object twice on config event.
      const clone = Object.assign({}, activity)
      return addConfigExtras(clone, config)
    }),
    withLatestFrom(configIgnoredItemTypes$),
    // Last guard against ignored activity types.
    map(([activity, ignored]) => {
      if (activity && isIgnoredActivity(activity, ignored)) {
        logger.warn(`Ignored activity type emitted by source. Will be ignored.`)
        return null
      }
      return activity
    })
  )

  .subscribe((mediaServerActivity) => activitySubject.next(mediaServerActivity))

export function clearActivity(): void {
  activitySubject.next(null)
}
