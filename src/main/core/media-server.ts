import {
  Observable,
  catchError,
  distinctUntilChanged,
  forkJoin,
  iif,
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
  return getAuthenticatedClient$(server).pipe(
    switchMap((client) => client.sessionsService.getSessions(server.userId)),
    // Get all sessions with now playing items.
    map((sessions) => sessions.filter((session) => session.NowPlayingItem))
  )
}

// Gets all now playing sessions and filters them down to one.
// Returns now playing session and source server.
export function getNowPlaying$(servers: Array<MediaServerConfig>): Observable<{
  session?: Session_SessionInfo
  server?: MediaServerConfig
}> {
  // Get now playing sessiosn for all servers.
  return forkJoin(
    servers.map((server) =>
      getNowPlayingSessions$(server).pipe(
        catchError((error) => {
          logMediaServer.warn(
            'Failed to get now playing sessions of server with ID `${server.id}`.',
            error
          )
          return of([])
        })
      )
    )
  ).pipe(
    // Flatten the array of arrays first.
    map((sessions) => sessions.flat()),
    tap((sessions) =>
      logMediaServer.debug(`${sessions.length} session${sessions.length > 1 ? 's' : ''} found.`)
    ),
    // Determine the one sessions to use,
    // since we can have multiple playing sessions at once.
    switchMap((sessions) =>
      iif(
        () => !sessions.length,
        // There are no now playing sessions.
        of({}),
        of(sessions).pipe(
          // Remove paused sessions, if we also have playing sessios.
          map((sessions) => {
            const isPausedCount = sessions.filter((session) => session.PlayState?.IsPaused).length

            // All or none sessions are paused, nothing to do.
            if (isPausedCount === 0 || isPausedCount === sessions.length) return sessions

            // Remove paused sessions.
            return sessions.filter((session) => !session.PlayState?.IsPaused)
          }),
          tap((s) =>
            logMediaServer.debug(
              `${s.length} session${s.length > 1 ? 's' : ''} remaining after filtering.${s.length > 1 ? ' Picking the first one.' : ''}`
            )
          ),
          // Pick the first session.
          map((sessions) => sessions[0]),
          // Add media-server config back.
          map((session) => {
            const server = servers.find((server) => server.serverId === session.ServerId)

            if (!server)
              logMediaServer.warn('Failed to add media-server config to now playing result.')

            return { session, server }
          })
        )
      )
    ),

    catchError((error) => {
      logMediaServer.error('Error while getting now playing sessions.', error)
      return of({})
    })
  )
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

export function getAlbumImageUrl(server: ConnectionDetails, item: BaseItemDto): string {
  if (!item.AlbumId) throw new Error('Failed to get album image URL. No album ID set.')
  return getImageUrl(server, item.AlbumId)
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
