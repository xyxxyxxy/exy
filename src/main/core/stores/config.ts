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
    isMediaServerTypeShown: {
      type: 'boolean',
      default: false
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
  IsMediaServerTypeShown = 'isMediaServerTypeShown',
  MediaServers = 'mediaServers',
  ImgurClientId = 'imgurClientId',
  IsDebugLoggingEnabled = 'isDebugLoggingEnabled'
}

const configSource: BehaviorSubject<Readonly<ConfigStore>> = new BehaviorSubject<
  Readonly<ConfigStore>
>({
  deviceId: configStore.get(Selector.deviceId),
  isMediaServerTypeShown: configStore.get(Selector.IsMediaServerTypeShown),
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

export function deactivateMediaServer(id: string): void {
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

export function toggleMediaServerTypeShown(): void {
  configStore.set(
    Selector.IsMediaServerTypeShown,
    !configStore.get(Selector.IsMediaServerTypeShown)
  )
}

export function toggleDebugLogging(): void {
  configStore.set(Selector.IsDebugLoggingEnabled, !configStore.get(Selector.IsDebugLoggingEnabled))
}

export function setImgurClientId(clientId: string | null): void {
  configStore.set(Selector.ImgurClientId, clientId)
}
