import Store from 'electron-store'
import { ConfigStore, MediaServerConfig, MediaServerConnectionIdentifiers } from './config.types'
import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs'
import log from 'electron-log'
import { randomUUID } from 'crypto'

const logConfig = log.scope('config')

const configStore = new Store<ConfigStore>({
  name: 'config',
  watch: true,
  schema: {
    deviceId: {
      // Device ID of this client.
      type: 'string',
      default: randomUUID()
    },
    isStartupEnabled: {
      type: 'boolean',
      default: true
    },
    mediaServers: {
      type: 'array',
      default: [],
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            default: randomUUID()
          },
          isActive: { type: 'boolean' },
          serverId: { type: 'string' },
          userId: { type: 'string' },
          accessToken: { type: 'string' },
          type: { enum: ['emby', 'jellyfin'] },
          protocol: { enum: ['http', 'https'] },
          address: { type: 'string' },
          port: { type: 'number' },
          username: { type: 'string' },
          ignoredLibraryIds: {
            type: 'array',
            items: { type: 'number' }
          }
        }
      }
    },
    imgurClientId: {
      type: ['string', 'null'],
      default: null
    },
    isDebugLoggingEnabled: {
      type: 'boolean',
      default: false
    }
  }
})

export enum Selector {
  deviceId = 'deviceId',
  IsStartupEnabled = 'isStartupEnabled',
  MediaServers = 'mediaServers',
  ImgurClientId = 'imgurClientId',
  IsDebugLoggingEnabled = 'isDebugLoggingEnabled'
}

const configSource: BehaviorSubject<Readonly<ConfigStore>> = new BehaviorSubject<
  Readonly<ConfigStore>
>({
  deviceId: configStore.get(Selector.deviceId),
  isStartupEnabled: configStore.get(Selector.IsStartupEnabled),
  mediaServers: configStore.get(Selector.MediaServers),
  imgurClientId: configStore.get(Selector.ImgurClientId),
  isDebugLoggingEnabled: configStore.get(Selector.IsDebugLoggingEnabled)
})

configStore.onDidAnyChange((config) => {
  if (config) {
    logConfig.debug('Updated.')
    configSource.next(config)
  }
})

export const config$ = configSource.asObservable()

export const activeMediaServers$: Observable<Array<MediaServerConfig>> = config$.pipe(
  map((config) => config.mediaServers.filter((server) => server.isActive)),
  distinctUntilChanged((previous, current) => JSON.stringify(previous) === JSON.stringify(current))
)
// Checks if a connection with matching protocol, address and port is already configured.
// Username is ignored, since a new connection from the same client with a different username will invalidate the previous session.
export function isConnectionConfigured(connection: MediaServerConnectionIdentifiers): boolean {
  return configStore
    .get(Selector.MediaServers)
    .some((server) => server.address === connection.address && server.port === connection.port)
}

export function addMediaServerConfig(newServer: MediaServerConfig): void {
  const mediaServers = [...configStore.get(Selector.MediaServers), newServer]
  configStore.set({ mediaServers })
}

export function deavtivateMediaServer(id: string): void {
  const mediaServers = configStore.get(Selector.MediaServers)
  mediaServers.forEach((server) => {
    if (server.id === id) server.isActive = false
  })

  configStore.set(Selector.MediaServers, mediaServers)
}

export function toggleMediaServerActive(id: string): void {
  const mediaServers = configStore.get(Selector.MediaServers)
  mediaServers.forEach((server) => {
    if (server.id === id) server.isActive = !server.isActive
  })

  configStore.set(Selector.MediaServers, mediaServers)
}

export function deleteMediaServerConfig(id: string): void {
  const mediaServers = configStore.get(Selector.MediaServers).filter((server) => server.id !== id)
  configStore.set(Selector.MediaServers, mediaServers)
}

export function toggleStartup(): void {
  configStore.set(Selector.IsStartupEnabled, !configStore.get(Selector.IsStartupEnabled))
}

export function toggleDebugLogging(): void {
  configStore.set(Selector.IsDebugLoggingEnabled, !configStore.get(Selector.IsDebugLoggingEnabled))
}

export function setImgurClientId(clientId: string | null): void {
  configStore.set(Selector.ImgurClientId, clientId)
}
