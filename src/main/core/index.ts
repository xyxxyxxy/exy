import { config$ } from './stores/config'
import {
  distinctUntilChanged,
  filter,
  map,
  skipWhile,
  switchMap,
  takeUntil,
  tap,
  timer
} from 'rxjs'
import { BaseItemDto, PlayerStateInfo, Session_SessionInfo } from './emby-client'
import { getActivity$ } from './activity'
import { MediaServerConfig } from './stores/config.types'
import { discordReady$, discordDisconnected$, clearActivity, setActivity } from './discord-client'
import { getNowPlaying$ } from './media-server'
import log from 'electron-log/main'

const logCore = log.scope('core')
logCore.info(`Startig.`)

// export const iconPath = path.join(__dirname, '../icons', 'tray.png') // TODO

// // When app is ready.
// from(app.whenReady()).subscribe(() => {
//   logCore.debug('App is ready.')
//   app.setAppUserModelId(productName)
//   initTray()
// })

// // Singelton process lock.
// if (!app.requestSingleInstanceLock()) {
//   logCore.error(`${productName} is already running.`)
//   app.quit()
// }

// // Catch and display errors.
// logCore.errorHandler.startCatching()
// unhandled({
//   logger: (error) => logCore.error(error),
//   showDialog: true
// })

// Apply log-level.
config$
  .pipe(
    map((config) => config.isDebugLoggingEnabled),
    distinctUntilChanged()
  )
  .subscribe((isEnabled) => {
    log.transports.file.level = isEnabled ? 'debug' : 'info'
    log.transports.console.level = isEnabled ? 'debug' : 'info'
    logCore.info(`Debug logging ${isEnabled ? 'enabled' : 'disabled'}.`)
  })

//
// Main pipe to handle now playing item.
//

const pollingIntervalInSeconds = 5
discordReady$
  .pipe(
    switchMap(() => config$),
    skipWhile((config) => {
      const hasNoMediaServers = !config.mediaServers.length
      if (hasNoMediaServers) logCore.info('No media-servers configured.')
      return hasNoMediaServers
    }),
    switchMap((config) =>
      // Get now playing session.
      timer(0, pollingIntervalInSeconds * 1000).pipe(
        tap(() => logCore.debug('Polling media-servers for sessions.')),
        switchMap(() => getNowPlaying$(config.mediaServers)),
        takeUntil(discordDisconnected$)
      )
    ),
    // Avoid setting the same activity twice.
    // Checking item ID and pause state.
    distinctUntilChanged(
      (previous, current) =>
        previous.session?.NowPlayingItem?.Id === current.session?.NowPlayingItem?.Id &&
        previous.session?.PlayState?.IsPaused === current.session?.PlayState?.IsPaused
    ),
    // Clear activity if nothing is playing.
    tap((nowPlaying) => {
      if (!nowPlaying.session) {
        logCore.info(`Now playing nothing.`)

        return clearActivity()
      }
    }),
    // This filter acts as an early exit, in case nothing is being played and
    // also a type guard to ensure the expected properties are set.
    filter(isNowPlaying),
    tap((nowPlaying) =>
      logCore.info(`Now playing item changed to ${nowPlaying.session.NowPlayingItem?.Name}.`)
    ),
    // Generating Discord activity.
    switchMap((nowPlaying) => getActivity$(nowPlaying.server, nowPlaying.session))
  )
  .subscribe((activity) => {
    setActivity(activity)
  })

function isNowPlaying(nowPlaying: {
  session?: Session_SessionInfo
  server?: MediaServerConfig
}): nowPlaying is {
  session: Session_SessionInfo & {
    NowPlayingItem: BaseItemDto
    PlayState: PlayerStateInfo
  }
  server: MediaServerConfig
} {
  return (
    !!nowPlaying.session &&
    !!nowPlaying.session.NowPlayingItem &&
    !!nowPlaying.session.PlayState &&
    !!nowPlaying.server
  )
}
