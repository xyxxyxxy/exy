import Store from 'electron-store'
import { ConfigStore, MediaServerConfig, MediaServerConnectionIdentifiers } from './config.types'
import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs'
import log from 'electron-log/node'
import { randomUUID } from 'crypto'

const logConfig = log.scope('discord')

const configStore = new Store<ConfigStore>({
  name: 'config',
  watch: true,
  schema: {
    deviceId: {
      // Device ID of this client.
      type: 'string',
      default: randomUUID()
    },
    isDebugLoggingEnabled: {
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
    }
  }
})

export enum Selector {
  deviceId = 'deviceId',
  IsDebugLoggingEnabled = 'isDebugLoggingEnabled',
  MediaServers = 'mediaServers',
  ImgurClientId = 'imgurClientId'
}
const configSource: BehaviorSubject<Readonly<ConfigStore>> = new BehaviorSubject<
  Readonly<ConfigStore>
>({
  deviceId: configStore.get(Selector.deviceId),
  isDebugLoggingEnabled: configStore.get(Selector.IsDebugLoggingEnabled),
  mediaServers: configStore.get(Selector.MediaServers),
  imgurClientId: configStore.get(Selector.ImgurClientId)
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

// TODO Move into add form renderer.
// Compare identifying properties of a media-server.
function isSameConnection(
  a: MediaServerConnectionIdentifiers,
  b: MediaServerConnectionIdentifiers
): boolean {
  return a.address === b.address && a.port === b.port && a.username === b.username
}

export function addMediaServerConfig(newServer: MediaServerConfig): void {
  const mediaServers = [...configStore.get(Selector.MediaServers), newServer]
  configStore.set({ mediaServers })
}

export function deleteMediaServerConfig(id: string): void {
  const mediaServers = configStore
    .get(Selector.MediaServers)
    .filter((server) => server.serverId !== id)
  configStore.set({ mediaServers })
}

export function toggleDebugLogging(): void {
  configStore.set(Selector.IsDebugLoggingEnabled, !configStore.get(Selector.IsDebugLoggingEnabled))
}
