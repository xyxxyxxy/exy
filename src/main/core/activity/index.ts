import log from 'electron-log'
import { Activity } from './types'
import { BehaviorSubject, Observable, distinctUntilChanged, filter, map } from 'rxjs'
import { config$ } from '../stores/config'

const logger = log.scope('activity')

const activity: BehaviorSubject<Activity | null> = new BehaviorSubject<Activity | null>(null)

// Logging of activity.
activity.subscribe((activity) => {
  logger.debug(`New activity:`, activity)
})

export const activity$: Observable<Activity | null> = activity.asObservable()

export function setActivity(newActivity: Activity | null): void {
  if (!newActivity) clearActivity()
  activity.next(newActivity)
}

export function clearActivity(): void {
  activity.next(null)
}

// Clear activity if last media-server is removed.
config$
  .pipe(
    map((config) => config.mediaServers.length),
    distinctUntilChanged(),
    filter((count) => count === 0)
  )
  .subscribe(() => {
    logger.debug(`No more media-servers configured. Clearing activity.`)
    clearActivity()
  })

// TODO Set activity in behavior subject and re-apply on discord re-connect.
// TODO Re-apply also on relevant config changes.
