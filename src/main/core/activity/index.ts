import log from 'electron-log'
import { Activity } from './types'
import {
  BehaviorSubject,
  Observable,
  distinctUntilChanged,
  map,
  shareReplay,
  tap,
  withLatestFrom
} from 'rxjs'
import { config$ } from '../stores/config'
import { mediaServerMainActivity$ } from '../media-server'
import { isIgnoredType } from './utils'

const logger = log.scope('activity')

const activitySource: BehaviorSubject<Activity | null> = new BehaviorSubject<Activity | null>(null)
export const activity$: Observable<Activity | null> = activitySource.asObservable().pipe(
  distinctUntilChanged(),
  tap((activity) => logger.debug(`New activity:`, activity)),
  shareReplay(1)
)

// Subscribe to activity providers.
mediaServerMainActivity$
  .pipe(
    withLatestFrom(config$),
    // Add configured extras.
    map(([activity, config]) => {
      if (!activity) return activity

      // Guard against ignored activity types.
      if (activity && isIgnoredType(activity, config.ignoredTypes)) {
        logger.debug(`Ignored activity type emitted by source. Will be ignored.`)
        return null
      }

      return activity
    })
  )

  .subscribe((mediaServerActivity) => activitySource.next(mediaServerActivity))

export function clearActivity(): void {
  activitySource.next(null)
}
