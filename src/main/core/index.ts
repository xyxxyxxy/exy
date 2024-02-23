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

const pollingIntervalSec = 5
discordReady$
  .pipe(
    switchMap(() => config$),
    skipWhile((config) => {
      const hasNoServer = !config.mediaServers.length
      if (hasNoServer) logCore.info('No media-servers configured.')
      return hasNoServer
    }),
    switchMap((config) =>
      // Get now playing session.
      timer(0, pollingIntervalSec * 1000).pipe(
        tap(() => logCore.debug('Polling media-servers.')),
        switchMap(() => getNowPlaying$(config.mediaServers)),
        takeUntil(discordDisconnected$)
      )
    ),
    // Clear activity if nothing is playing.
    tap((nowPlaying) => {
      if (!nowPlaying) clearActivity()
    }),
    // Early exit and type guard.
    filter(isNowPlaying),
    // Generating Discord activity.
    switchMap((nowPlaying) => getActivity$(nowPlaying.server, nowPlaying.session)),
    // Avoid unnecessary updates.
    distinctUntilChanged(
      (previous, current) =>
        previous.details === current.details &&
        previous.state === current.state &&
        previous.largeImageKey === current.largeImageKey &&
        previous.largeImageText === current.largeImageText &&
        previous.smallImageKey === current.smallImageKey &&
        previous.smallImageText === current.smallImageText
      // End timestamp fluxuates due to API response time and rounding.
    )
  )
  .subscribe((activity) => {
    logCore.debug(`New activity "${activity.details}".`)
    setActivity(activity)
  })

function isNowPlaying(
  nowPlaying: {
    server: MediaServerConfig
    session: Session_SessionInfo
  } | null
): nowPlaying is {
  server: MediaServerConfig
  session: Session_SessionInfo & {
    NowPlayingItem: BaseItemDto
    PlayState: PlayerStateInfo
  }
} {
  return (
    !!nowPlaying &&
    !!nowPlaying.server &&
    !!nowPlaying.session &&
    !!nowPlaying.session.NowPlayingItem &&
    !!nowPlaying.session.PlayState
  )
}
