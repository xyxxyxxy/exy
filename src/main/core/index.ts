import { config$ } from './stores/config'
import { distinctUntilChanged, map } from 'rxjs'
import log from 'electron-log/main'
import { setActivity } from './activity'
import { mainActivity$ } from './media-server'

const logCore = log.scope('core')
logCore.info(`Startig.`)

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

mainActivity$.subscribe((activity) => setActivity(activity))

// discordReady$
//   .pipe(
//     switchMap(() => config$),
//     skipWhile((config) => {
//       const hasNoServer = !config.mediaServers.length
//       if (hasNoServer) logCore.info('No media-servers configured.')
//       return hasNoServer
//     }),
//     switchMap((config) =>
//       // Get now playing session.
//       timer(0, pollingIntervalSec * 1000).pipe(
//         tap(() => logCore.debug('Polling media-servers.')),
//         switchMap(() => pollAll$(config.mediaServers)),
//         takeUntil(discordDisconnected$)
//       )
//     ),
//     distinctUntilChanged(),
//     // Clear activity if nothing is playing.
//     tap((nowPlaying) => {
//       if (!nowPlaying) clearActivity()
//     }),
//     // Early exit and type guard.
//     filter(isNowPlaying),
//     // Generating Discord activity.
//     switchMap((nowPlaying) => getActivity$(nowPlaying.server, nowPlaying.session)),
//     // Avoid unnecessary updates.
//     distinctUntilChanged(
//       (previous, current) =>
//         previous.details === current.details &&
//         previous.state === current.state &&
//         previous.largeImageKey === current.largeImageKey &&
//         previous.largeImageText === current.largeImageText &&
//         previous.smallImageKey === current.smallImageKey &&
//         previous.smallImageText === current.smallImageText
//       // End timestamp fluxuates due to API response time and rounding.
//     )
//   )
//   .subscribe((activity) => {
//     logCore.debug(`New activity "${activity.details}".`)
//     setActivity(activity)
//   })
