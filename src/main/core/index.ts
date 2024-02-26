import { config$ } from './stores/config'
import { distinctUntilChanged, map } from 'rxjs'
import log from 'electron-log/main'

const logger = log.scope('core')

logger.info(`Startig.`)

// Apply log-level.
config$
  .pipe(
    map((config) => config.isDebugLoggingEnabled),
    distinctUntilChanged()
  )
  .subscribe((isEnabled) => {
    log.transports.file.level = isEnabled ? 'debug' : 'info'
    log.transports.console.level = isEnabled ? 'debug' : 'info'
    logger.info(`Debug logging ${isEnabled ? 'enabled' : 'disabled'}.`)
  })
