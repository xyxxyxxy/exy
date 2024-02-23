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

const pillingIntervalSec = 5
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
      timer(0, pillingIntervalSec * 1000).pipe(
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
    // Avoid unnecessary updates.
    distinctUntilChanged(
      (previous, current) =>
        previous.session.NowPlayingItem.Id === current.session.NowPlayingItem.Id &&
        previous.session.PlayState.IsPaused === current.session.PlayState.IsPaused &&
        previous.session.PlayState.IsMuted === current.session.PlayState.IsMuted
    ),
    tap((nowPlaying) =>
      logCore.info(`Now playing item changed to ${nowPlaying.session.NowPlayingItem?.Name}.`)
    ),
    // Generating Discord activity.
    switchMap((nowPlaying) => getActivity$(nowPlaying.server, nowPlaying.session))
  )
  .subscribe((activity) => {
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
