import {
  Observable,
  catchError,
  distinctUntilChanged,
  forkJoin,
  map,
  of,
  shareReplay,
  switchMap,
  tap
} from 'rxjs'
import { MediaServerConfig } from './stores/config.types'
import { hostname } from 'os'
import { version, name } from '../../../package.json'
import { config$ } from './stores/config'
import log from 'electron-log'
import {
  Authentication_AuthenticationResult,
  BaseItemDto,
  EmbyClient,
  Session_SessionInfo,
  SystemInfo
} from './emby-client'

const logMediaServer = log.scope('media-server')

export function authenticate$(
  connectionDetails: Pick<MediaServerConfig, 'protocol' | 'address' | 'port' | 'username'> & {
    username: string
    password: string
  }
): Observable<Authentication_AuthenticationResult> {
  return xEmbyAuthorization$.pipe(
    switchMap((xEmbyAuthorization) =>
      new EmbyClient({
        BASE: getBaseUrl(connectionDetails)
      }).userService.postUsersAuthenticatebyname(xEmbyAuthorization, {
        Username: connectionDetails.username,
        Pw: connectionDetails.password
      })
    )
  )
}

export function testConnection$(server: MediaServerConfig): Observable<SystemInfo> {
  return getAuthenticatedClient$(server).pipe(
    switchMap(
      // Testing system info endpoint, since it requires authentication.
      (client) => client.systemService.getSystemInfo()
    )
  )
}

export function logout$(server: MediaServerConfig): Observable<void> {
  return getAuthenticatedClient$(server).pipe(
    switchMap((client) => client.sessionsService.postSessionsLogout())
  )
}

// Returns the first now playing session of a media-server.
function getNowPlayingSessions$(server: MediaServerConfig): Observable<Array<Session_SessionInfo>> {
  logMediaServer.debug(`Getting now playing sessions of '${server.address}'.`)
  return getAuthenticatedClient$(server).pipe(
    switchMap((client) => client.sessionsService.getSessions(server.userId)),
    // Get all sessions with now playing items.
    map((sessions) => sessions.filter((session) => session.NowPlayingItem)),
    tap((sessions) =>
      logMediaServer.debug(`Got ${sessions.length} now playing sessions for '${server.address}'.`)
    )
  )
}

// Gets all now playing sessions and filters them down to one.
// Returns now playing session and source server.
export function getNowPlaying$(servers: Array<MediaServerConfig>): Observable<{
  server: MediaServerConfig
  session: Session_SessionInfo
} | null> {
  // Get now playing sessiosn for all active servers.
  return forkJoin(
    servers
      .filter((server) => server.isActive)
      .map((server) =>
        getNowPlayingSessions$(server).pipe(
          // Pick one now playing session on a server level.
          map((sessions) => {
            return { server, session: pickNowPlaying(sessions) }
          }),
          catchError((error) => {
            logMediaServer.warn(
              'Failed to get now playing sessions of server with ID `${server.id}`.',
              error
            )
            return of({ server, session: null })
          })
        )
      )
  ).pipe(
    // Filter out empty results.
    map((results) =>
      results.filter(
        (result): result is { server: MediaServerConfig; session: Session_SessionInfo } =>
          !!result.session
      )
    ),
    // Pick one now playing session on a server level.
    map((results) => pickNowPlayingBetweenServers(results)),

    catchError((error) => {
      logMediaServer.error('Error while getting now playing sessions.', error)
      return of(null)
    })
  )
}

// Pick one session of multiple.
function pickNowPlaying(sessions: Array<Session_SessionInfo>): Session_SessionInfo | null {
  if (!sessions.length) return null

  // Remove paused sessions if there are also playing sessions.
  const isPausedCount = sessions.filter((session) => session.PlayState?.IsPaused).length
  if (isPausedCount > 0 && isPausedCount < sessions.length)
    sessions = sessions.filter((session) => !session.PlayState?.IsPaused)

  if (sessions.length > 1)
    logMediaServer.debug(`More than one session playing. Returning first session.`)

  return sessions[0]
}

function pickNowPlayingBetweenServers(
  sessions: Array<{
    server: MediaServerConfig
    session: Session_SessionInfo
  }>
): {
  server: MediaServerConfig
  session: Session_SessionInfo
} | null {
  if (!sessions.length) return null

  // TODO
  // Remove paused sessions if there are also playing sessions.
  // const isPausedCount = playing.filter((session) => session.PlayState?.IsPaused).length
  // if (isPausedCount === 0 || isPausedCount === playing.length)
  //   playing = playing.filter((session) => !session.PlayState?.IsPaused)
  if (sessions.length > 1)
    logMediaServer.debug(`More than one server playing. Returning first one.`)

  return sessions[0]
}

const xEmbyAuthorization$ = config$.pipe(
  map((config) => config.deviceId),
  distinctUntilChanged(),
  map(
    (deviceId) =>
      `Emby Client=${name}, Device=${hostname}, DeviceId=${deviceId}, Version=${version}`
  ),
  shareReplay(1)
)

export type ConnectionDetails = Pick<MediaServerConfig, 'protocol' | 'address' | 'port'>

export function getPrimaryImageUrl(server: ConnectionDetails, item: BaseItemDto): string {
  if (!item.Id) throw new Error('Failed to get primary image. No ID set.')
  return getImageUrl(server, item.Id)
}

export function getParentImageUrl(server: ConnectionDetails, item: BaseItemDto): string {
  if (!item.ParentId) throw new Error('Failed to get album image URL. No album ID set.')
  return getImageUrl(server, item.ParentId)
}

function getImageUrl(server: ConnectionDetails, id: string): string {
  const dimensionLimit = 512
  return `${getBaseUrl(server)}/Items/${id}/Images/Primary?maxHeight=${dimensionLimit}&maxWidth=${dimensionLimit}`
}

function getBaseUrl(server: ConnectionDetails): string {
  return `${server.protocol}://${server.address}:${server.port}`
}

function getAuthenticatedClient$(server: MediaServerConfig): Observable<EmbyClient> {
  return of(
    new EmbyClient({
      BASE: getBaseUrl(server),
      HEADERS: { 'X-Emby-Token': server.accessToken }
    })
  )
}
