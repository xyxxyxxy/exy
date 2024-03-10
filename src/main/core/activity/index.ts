import log from 'electron-log'
import { Activity } from './types'
import { BehaviorSubject, Observable, map, shareReplay, tap, withLatestFrom } from 'rxjs'
import { config$ } from '../stores/config'
import { mediaServerMainActivity$ } from '../media-server'
import { isIgnoredType } from './utils'

const logger = log.scope('activity')

const activitySubject: BehaviorSubject<Activity | null> = new BehaviorSubject<Activity | null>(null)
export const activity$: Observable<Activity | null> = activitySubject.asObservable().pipe(
  // TODO Emits null twice on startup
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

  .subscribe((mediaServerActivity) => activitySubject.next(mediaServerActivity))

export function clearActivity(): void {
  activitySubject.next(null)
}
