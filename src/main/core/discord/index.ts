import { Client } from 'discord-rpc'
import log from 'electron-log'
import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  combineLatest,
  delay,
  filter,
  fromEvent,
  map,
  retry,
  switchMap,
  tap,
  throttleTime,
  withLatestFrom
} from 'rxjs'
import { ConnectionStatus } from './types'
import { activity$ } from '../activity'
import { toDiscordPresence } from './activity-mapping'
import { config$ } from '../stores/config'
import { discordApplicationId } from '../../../environment.json'

const logger = log.scope('discord')

const retryDelayInSeconds = 10

// Connection status.
const connectionStatus: BehaviorSubject<ConnectionStatus> = new BehaviorSubject<ConnectionStatus>(
  ConnectionStatus.Disconnected
)

export const connectionStatus$: Observable<ConnectionStatus> = connectionStatus.asObservable()

let eventSubscriptions: Array<Subscription> = []

connectionStatus.subscribe((status) => logger.info(`Client ${status}.`))

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
        logger.debug(`Removing old client.`)
        discordClient.removeAllListeners()
        discordClient.destroy()
      }
    }),
    // Create new client. Necessary to reconnect.
    map(() => {
      logger.debug(`Creating new client.`)
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
      logger.debug(`Logging into new client.`)
      return newClient.login({ clientId: discordApplicationId })
    }),
    catchError((error) => {
      logger.info(`Failed to connect to new client. Retrying in ${retryDelayInSeconds} seconds.`)
      logger.debug(error)
      throw error
    }),
    retry({ delay: retryDelayInSeconds * 1000 })
  )
  .subscribe((newClient) => {
    logger.debug(`Set new client.`)

    // Start listening for disconnect.
    ;[ConnectionStatus.Disconnected].forEach((status) =>
      eventSubscriptions.push(
        fromEvent(newClient, status).subscribe(() => connectionStatus.next(status))
      )
    )
    discordClient = newClient
  })

export function setTestActivity(content: string = 'Test'): void {
  if (discordClient) discordClient.setActivity({ details: content, largeImageKey: 'neutral' })
}

// Rate limit communication to Discord client.
// See: https://discord.com/developers/docs/game-sdk/activities#updateactivity
const rateLimitThrottleTimeInSeconds = 20 / 5 // 5 Updates per 20 seconds allowed.

// Send activity updates to Discord client.
//
// Including discord ready event for reconnects.
// Adding a small delay to the Discord ready event,
// since setting the activity right away did not work.
combineLatest([activity$, discordReady$.pipe(delay(1000))])
  .pipe(
    map(([activity]) => activity),
    throttleTime(rateLimitThrottleTimeInSeconds * 1000, undefined, {
      leading: true,
      trailing: true
    }),
    withLatestFrom(config$, connectionStatus$),
    // Make sure Discord is still connected.
    filter(([, , connectionStatus]) => connectionStatus === ConnectionStatus.Ready)
  )
  .subscribe(([activity, config]) => {
    if (!discordClient) return logger.warn(`Failed to set presence. No client available.`)
    try {
      if (activity) {
        const presence = toDiscordPresence(activity, config)
        logger.debug(`Setting Discord presence:`, presence)
        discordClient.setActivity(presence)
      } else {
        logger.debug(`Clearing Discord presence.`)
        discordClient.clearActivity()
      }
    } catch (error) {
      // Catch error to make sure any error of the Discord client
      // cannot cause this subscription to end.
      logger.error(`Failed to set presence.`, error)
    }
  })
