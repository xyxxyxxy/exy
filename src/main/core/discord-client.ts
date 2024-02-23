import { Client, Presence } from 'discord-rpc'
import log from 'electron-log'
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  catchError,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  retry,
  switchMap,
  tap,
  throttleTime
} from 'rxjs'
import { config$ } from './stores/config'
import { ConnectionStatus } from './discord-client.types'

const logDiscord = log.scope('discord')

// Discord application ID.
const discordApplicationId = '1203674508733714492'
const retryDelayInSeconds = 30

// Connection status.
const connectionStatus: BehaviorSubject<ConnectionStatus> = new BehaviorSubject<ConnectionStatus>(
  ConnectionStatus.Disconnected
)

export const connectionStatus$: Observable<ConnectionStatus> = connectionStatus.asObservable()

let eventSubscriptions: Array<Subscription> = []

connectionStatus.subscribe((status) => logDiscord.info(`Client ${status}.`))

export const discordReady$: Observable<void> = connectionStatus.pipe(
  filter((status) => status === ConnectionStatus.Ready),
  map(() => void 0)
)

export const discordDisconnected$: Observable<void> = connectionStatus.pipe(
  filter((status) => status === ConnectionStatus.Disconnected),
  map(() => void 0)
)

let discordClient: Client | null = null

// Auto (re)connect.
discordDisconnected$
  .pipe(
    // Remove old.
    tap(() => {
      if (discordClient) {
        logDiscord.debug(`Removing old client.`)
        discordClient.removeAllListeners()
        discordClient.destroy()
      }
    }),
    // Create new clinet. Necessary to reconnect.
    map(() => {
      logDiscord.debug(`Creating new client.`)
      const newClient = new Client({ transport: 'ipc' })

      // Add event listeners.
      eventSubscriptions.forEach((subscription) => subscription.unsubscribe())
      eventSubscriptions = []
      ;[ConnectionStatus.Ready].forEach((status) =>
        eventSubscriptions.push(
          fromEvent(newClient, status).subscribe(() => connectionStatus.next(status))
        )
      )

      return newClient
    }),
    // Login.
    switchMap((newClient) => {
      logDiscord.debug(`Logging into new client.`)
      return newClient.login({ clientId: discordApplicationId })
    }),
    catchError((error) => {
      logDiscord.info(
        `Failed to connect to new client. Retrying in ${retryDelayInSeconds} seconds.`
      )
      logDiscord.debug(error)

      // if (error.message === 'RPC_CONNECTION_TIMEOUT') // TODO Add additional delay?
      throw error
    }),
    retry({ delay: retryDelayInSeconds * 1000 })
  )
  .subscribe((newClient) => {
    logDiscord.debug(`Set new client.`)

    // Start listening for disconnect.
    ;[ConnectionStatus.Disconnected].forEach((status) =>
      eventSubscriptions.push(
        fromEvent(newClient, status).subscribe(() => connectionStatus.next(status))
      )
    )
    discordClient = newClient
  })

const activitySource: Subject<Presence | null> = new Subject<Presence | null>()

export function setActivity(activity: Presence): void {
  logDiscord.debug(`Scheduling next activity "${activity.details}".`)
  activitySource.next(activity)
}

export function clearActivity(): void {
  logDiscord.debug('Scheduling activity clearing.')
  activitySource.next(null)
}

// Clear activity if last media-server is removed.
config$
  .pipe(
    map((config) => config.mediaServers.length),
    distinctUntilChanged(),
    filter((count) => count === 0)
  )
  .subscribe(() => {
    logDiscord.debug(`No more media-servers configured. Clearing activity.`)
    clearActivity()
  })

// Rate limit communication to Discord client.
// See: https://discord.com/developers/docs/game-sdk/activities#updateactivity
const rateLimitThrottleTimeInSeconds = 20 / 5 // 5 Updates per 20 seconds allowed.

// Send activity updates to Discord client.
activitySource
  .pipe(
    throttleTime(rateLimitThrottleTimeInSeconds * 1000, undefined, {
      leading: true,
      trailing: true
    })
  )
  .subscribe({
    next: (activity) => {
      if (discordClient)
        if (activity) {
          logDiscord.debug(`Set activity.`, activity)
          discordClient.setActivity(activity)
          // TODO Test error handling
          // throw new Error('TEST')
        } else {
          logDiscord.debug(`Clear activity.`)
          discordClient.clearActivity()
        }
    },
    error: (error) => {
      logDiscord.error(`Failed to set activity.`, error)
    }
  })
