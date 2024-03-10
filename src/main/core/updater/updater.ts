import axios from 'axios'
import { Observable, catchError, filter, from, map, of, shareReplay } from 'rxjs'
import log from 'electron-log/main'
import { name, version, homepage } from '../../../../package.json'
import { Update } from './types'

const logger = log.scope('updater')

// Checking for updates by downloading the latest package.json and comparing versions.

const latestPackageUrl =
  homepage.replace('github.com', 'raw.githubusercontent.com') + '/main/package.json'

export const updateAvailable$: Observable<Update> = from(axios.get(latestPackageUrl)).pipe(
  map((response) => response.data.version),
  map((latestVersion) => {
    if (version === latestVersion) {
      logger.info(`Running latest version.`)
      return null
    }

    const link = `${homepage}/releases/latest`
    logger.info(`Update available (${name} v${latestVersion}). Get it here:`, link)
    return { version: latestVersion, link }
  }),
  // Check only once per run.
  shareReplay(1),
  catchError((error) => {
    logger.warn(`Failed to check for updates.`, error)
    return of(null)
  }),
  filter((update): update is Update => !!update)
)
