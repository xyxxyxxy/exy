import { Client, Presence } from 'discord-rpc'
import log from 'electron-log'
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  filter,
  from,
  fromEvent,
  map,
  of,
  pairwise,
  retry,
  startWith,
  switchMap,
  tap,
  throttleTime,
  withLatestFrom
} from 'rxjs'

const logDiscord = log.scope('discord')

// Discord application ID.
const discordApplicationId = '1203674508733714492'
const retryDelayInSeconds = 10

enum ConnectionStatus {
  Disconnected = 'disconnected',
  Connected = 'connected',
  Ready = 'ready'
}

// Connection status.
const connectionStatus: BehaviorSubject<ConnectionStatus> = new BehaviorSubject<ConnectionStatus>(
  ConnectionStatus.Disconnected
)

export const discordConnectedAndReady$: Observable<void> = connectionStatus.pipe(
  filter((status) => status === 'ready'),
  tap(() => logDiscord.info('Connected and ready.')),
  map(() => void 0)
)

export const discordDisconnected$: Observable<void> = connectionStatus.pipe(
  filter((status) => status === 'disconnected'),
  tap(() => logDiscord.warn('Disconnected.')),
  map(() => void 0)
)

const discordClient$: BehaviorSubject<Client> = new BehaviorSubject<Client>(
  new Client({ transport: 'ipc' })
)

discordClient$
  .pipe(
    startWith(null),
    pairwise(),
    // Remove old client properly.
    switchMap(([previous, current]) => {
      previous?.removeAllListeners()

      if (previous) return from(previous.destroy()).pipe(map(() => current))
      return of(current)
    }),
    filter((client): client is Client => !!client),
    // Register new listeners.
    tap((newClient) => {
      ;[ConnectionStatus.Disconnected, ConnectionStatus.Ready].forEach((status) =>
        fromEvent(newClient, status).subscribe(() => connectionStatus.next(status))
      )
    }),
    // Attempt to connect.
    switchMap((client) => from(client.login({ clientId: discordApplicationId }))),
    catchError((error) => {
      logDiscord.debug(`Login failed. Retrying in ${retryDelayInSeconds} seconds.`)
      logDiscord.debug(error)
      // TODO sometimes getting error RPC_CONNECTION_TIMEOUT form Discord. A Discord restart resolves this.
      // Probably too many connections opened during development.
      // See: https://github.com/leonardssh/vscord/issues/194#issuecomment-1496267241
      throw error
    }),
    retry({ delay: retryDelayInSeconds * 1000 })
  )
  .subscribe(() => logDiscord.info('Monitoring connection.'))

export function setActivity(activity: Presence): void {
  logDiscord.debug(`Schaduling next activity "${activity.details}".`)
  activitySource.next(activity)
}

export function clearActivity(): void {
  logDiscord.debug('Scheduling activity clearing.')
  activitySource.next(null)
}

const activitySource: Subject<Presence | null> = new Subject<Presence | null>()

// Rate limit communication to Discord client.
// See: https://discord.com/developers/docs/game-sdk/activities#updateactivity
const rateLimitThrottleTimeInSeconds = 20 / 5 // 5 Updates per 20 seconds allowed.

// Send activity updates to Discord client.
activitySource.subscribe((activity) => logDiscord.info(activity))
activitySource
  .pipe(
    throttleTime(rateLimitThrottleTimeInSeconds * 1000, undefined, {
      leading: true,
      trailing: true
    })
    // tap((x) => logDiscord.info('x')),
    // withLatestFrom(discordClient$),
    // tap(([x, y]) => logDiscord.info('x'))
  )
  .subscribe((activity) => {
    if (activity) {
      // TODO Fix
      discordClient$.getValue().setActivity(activity)
      // discordClient.setActivity(activity)
      logDiscord.debug(`Activity set to "${activity.details}".`)
    } else {
      // discordClient.clearActivity()
      discordClient$.getValue().clearActivity()
      logDiscord.debug(`Activity cleared.`)
    }
  })
