import {
  Observable,
  catchError,
  combineLatest,
  defaultIfEmpty,
  distinctUntilChanged,
  forkJoin,
  map,
  mergeMap,
  of,
  shareReplay,
  switchMap,
  take,
  tap,
  timer,
  withLatestFrom
} from 'rxjs'
import type { MediaServerConfig } from '../stores/config.types'
import { hostname } from 'os'
import { version, name } from '../../../../package.json'
import { config$ } from '../stores/config'
import log from 'electron-log'
import {
  Authentication_AuthenticationResult,
  EmbyClient,
  Session_SessionInfo,
  SystemInfo
} from '../emby-client'
import { Activity, ActivityBase } from '../activity/types'
import { PollingResult, MediaServerActivityMapping, ValidSession } from './types'
import { buildActivityBase } from './activity-builder/base'
import { buildFullActivity$ } from './activity-builder/full'
import { isIgnoredType, pickActivity } from '../activity/utils'

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
      }).userService.postUsersAuthenticatebyname({
        xEmbyAuthorization,
        requestBody: {
          Username: connectionDetails.username,
          Pw: connectionDetails.password
        }
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

export function logout$(server: MediaServerConfig): Observable<unknown> {
  return getAuthenticatedClient$(server).pipe(
    switchMap((client) => client.sessionsService.postSessionsLogout())
  )
}

export function isValidSession(session: Session_SessionInfo): session is ValidSession {
  return !!session.NowPlayingItem && !!session.PlayState
}

const polling$: Observable<Array<PollingResult>> = config$.pipe(
  // Map to active media-servers.
  map((config) => config.mediaServers.filter((server) => server.isActive)),
  tap(() => logger.debug('Start polling.')),
  switchMap((servers) =>
    timer(0, 5 * 1000).pipe(
      tap(() => logger.debug(`Polling servers.`)),
      mergeMap(() =>
        forkJoin(servers.map((server) => poll$(server)))
          // Default to empty, so the activity is properly reset in case
          // the last server is deactivated/disconnected while playing.
          .pipe(defaultIfEmpty([]))
      ),
      // Remove 'null' results.
      map((results) => {
        const notNull: Array<PollingResult> = []
        results.forEach((result) => {
          if (result) notNull.push(result)
        })
        return notNull
      })
    )
  ),
  shareReplay(1)
)

// Includes ignored activity types.
export const mediaServerAllActivities$: Observable<MediaServerActivityMapping> = polling$.pipe(
  // Map data, generate activity.
  map((results) => {
    const result: MediaServerActivityMapping = {}
    results.forEach((playing) => {
      result[playing.server.id] = playing.activity
    })
    return result
  })
)

// Main activity for all media servers.
// Respects the configured ignored activity types.
export const mediaServerMainActivity$: Observable<Activity | null> = combineLatest([
  polling$,
  config$.pipe(tap(() => logger.debug(`Re-building main activity due to config change.`)))
]).pipe(
  switchMap(([results]) => pickBetweenPollingResults$(results)),
  withLatestFrom(config$),
  // Check if there are relevant changes before a full activity object is built.
  distinctUntilChanged(
    ([previousPolling, previousConfig], [currentPolling, currentConfig]) =>
      JSON.stringify(previousConfig) === JSON.stringify(currentConfig) &&
      JSON.stringify(previousPolling?.activity) === JSON.stringify(currentPolling?.activity)
  ),
  switchMap(([result, config]) => {
    // Enforce the ignored activity types here.
    // Before it was only used to prioritize the picking between multiple activities.
    if (!result || !result.activity || isIgnoredType(result.activity, config.ignoredTypes))
      return of(null)

    return buildFullActivity$(result.server, result.session, result.activity)
  })
)

// Returns the first now playing session of a media-server.
function poll$(server: MediaServerConfig): Observable<PollingResult | null> {
  return getAuthenticatedClient$(server).pipe(
    // Get all sessions with now playing items.
    switchMap((client) =>
      client.sessionsService.getSessions({ controllableByUserId: server.userId })
    ),
    map((sessions) => sessions.filter(isValidSession)),
    // Build base activity.
    map((sessions) =>
      sessions.map((session) => {
        const result: PollingResult = {
          server,
          session,
          activity: buildActivityBase(session)
        }
        return result
      })
    ),
    // Pick one activity.
    switchMap((results) => pickBetweenPollingResults$(results)),
    catchError((error) => {
      logger.warn(`Encountered error while polling server ${server.address}.`, error)
      return of(null)
    })
  )
}

// It is possible that one user has multiple active play sessions.
// Also admin users can see the play sessions of all users.
//
// Pick one now playing sessions from an array of servers and their session.
function pickBetweenPollingResults$(
  results: Array<PollingResult>
): Observable<PollingResult | null> {
  if (!results.length) return of(null)

  return config$.pipe(
    take(1),
    map((config) => {
      const activities = results
        .map((result) => result.activity)
        .filter((activity): activity is ActivityBase => !!activity)

      const pick = pickActivity(activities, config.ignoredTypes)
      const result = results.find((obj) => obj.activity === pick)
      if (!result) throw new Error(`Failed to pick polling result.`)
      return result
    })
  )
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

export function getImageUrl(server: ConnectionDetails, id: string): string {
  const dimensionLimit = 512
  return `${getBaseUrl(server)}/Items/${id}/Images/Primary?maxHeight=${dimensionLimit}&maxWidth=${dimensionLimit}`
}

function getBaseUrl(server: ConnectionDetails): string {
  return `${server.protocol}://${server.address}:${server.port}`
}
