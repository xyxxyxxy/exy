import {
  Observable,
  distinctUntilChanged,
  forkJoin,
  map,
  mergeMap,
  of,
  shareReplay,
  switchMap,
  tap,
  timer
} from 'rxjs'
import { MediaServerConfig } from '../stores/config.types'
import { hostname } from 'os'
import { version, name } from '../../../../package.json'
import { config$ } from '../stores/config'
import log from 'electron-log'
import {
  Authentication_AuthenticationResult,
  BaseItemDto,
  EmbyClient,
  Session_SessionInfo,
  SystemInfo
} from '../emby-client'
import { Activity, ActivityBase } from '../activity/types'
import { PollingResult, PollingResultPlaying, ValidSession } from './types'
import { buildActivityBase } from './activity-builder/base'
import { buildFullActivity$ } from './activity-builder/full'

const logger = log.scope('media-server')

export type ConnectionDetails = Pick<MediaServerConfig, 'protocol' | 'address' | 'port'>

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

export function isValidSession(session: Session_SessionInfo): session is ValidSession {
  return !!session.NowPlayingItem && !!session.PlayState
}

export function isPollingResultPlaying(result: PollingResult): result is PollingResultPlaying {
  return !!result.nowPlayingSession
}

const polling$: Observable<Array<PollingResult>> = config$.pipe(
  // Map to active media-servers.
  map((config) => config.mediaServers.filter((server) => server.isActive)),
  tap(() => logger.debug('Start polling.')),
  switchMap((servers) =>
    timer(0, 5 * 1000).pipe(
      tap(() => logger.debug(`Polling ${servers.length} servers.`)),
      mergeMap(() => forkJoin(servers.map((server) => poll$(server))))
    )
  )
)

// TODO Use to display base activity of each server in config.
export const mediaServerActivities$: Observable<
  Array<{ server: MediaServerConfig; activity: ActivityBase | null }>
> = polling$.pipe(
  map((results) => {
    return results.map((result) => {
      return {
        server: result.server,
        activity: result.nowPlayingSession ? buildActivityBase(result.nowPlayingSession) : null
      }
    })
  })
)

export const mainActivity$: Observable<Activity | null> = polling$.pipe(
  map((results) => pickPollingResultBetweenServers(results)),
  // Build base activity first.
  map((result) => {
    if (!result) return null

    return { pollingResult: result, activityBase: buildActivityBase(result.nowPlayingSession) }
  }),
  // Check if there are relevant changes before a full activity object is built.
  distinctUntilChanged(
    (previous, current) =>
      JSON.stringify(previous?.activityBase) === JSON.stringify(current?.activityBase)
  ),
  switchMap((data) => {
    if (!data) return of(null)
    return buildFullActivity$(
      data.activityBase,
      data.pollingResult.server,
      data.pollingResult.nowPlayingSession
    )
  })
)

// Returns the first now playing session of a media-server.
function poll$(server: MediaServerConfig): Observable<PollingResult> {
  return getAuthenticatedClient$(server).pipe(
    switchMap((client) => client.sessionsService.getSessions(server.userId)),
    // Get all sessions with now playing items.
    map((sessions) => {
      return { server, nowPlayingSession: pickSession(sessions) }
    })
  )
}

// Pick one session from an array of sessions.
// It is possible that one user has multiple active play sessions.
// Also admin users can see the play sessions of all users.
function pickSession(sessions: Array<Session_SessionInfo>): ValidSession | null {
  if (!sessions.length) return null

  const validSessions = sessions.filter(isValidSession)

  // Remove paused sessions if there are also playing sessions.
  const isPausedCount = validSessions.filter((session) => session.PlayState.IsPaused).length
  if (isPausedCount > 0 && isPausedCount < validSessions.length)
    return validSessions.filter((session) => !session.PlayState.IsPaused)[0]

  // If multiple sessions are currently playing, the first one is returned.
  return validSessions[0]
}

// Pick one now playing sessions from an array of servers and their session.
function pickPollingResultBetweenServers(
  results: Array<PollingResult>
): PollingResultPlaying | null {
  const playing = results.filter(isPollingResultPlaying)
  // TODO Filter muted, if multiple
  return playing.length ? playing[0] : null
}

function getAuthenticatedClient$(server: MediaServerConfig): Observable<EmbyClient> {
  return of(
    new EmbyClient({
      BASE: getBaseUrl(server),
      HEADERS: { 'X-Emby-Token': server.accessToken }
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

export function getItemImageUrl(server: ConnectionDetails, item: BaseItemDto): string {
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
