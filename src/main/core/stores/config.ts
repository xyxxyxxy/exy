import Store from 'electron-store'
import {
  ActivityConfig,
  ConfigSelector,
  ConfigStore,
  MediaServerConfig,
  MediaServerConnectionIdentifiers
} from './config.types'
import { BehaviorSubject } from 'rxjs'
import log from 'electron-log'
import { migrationOptions as configMigrationOptions } from './migrations'
import { configSchema } from './schema'

const logger = log.scope('config')

const configStore = new Store<ConfigStore>({
  name: 'config',
  watch: true,
  ...configMigrationOptions,
  schema: configSchema
})

const configSource: BehaviorSubject<Readonly<ConfigStore>> = new BehaviorSubject<
  Readonly<ConfigStore>
>({
  deviceId: configStore.get(ConfigSelector.deviceId),
  isStartupEnabled: configStore.get(ConfigSelector.IsStartupEnabled),
  activity: configStore.get(ConfigSelector.Activity),
  mediaServers: configStore.get(ConfigSelector.MediaServers),
  imgurClientId: configStore.get(ConfigSelector.ImgurClientId),
  isDebugLoggingEnabled: configStore.get(ConfigSelector.IsDebugLoggingEnabled)
})

configStore.onDidAnyChange((config) => {
  if (config) {
    logger.debug('Updated.')
    configSource.next(config)
  }
})

export const config$ = configSource.asObservable()

// Checks if a connection with matching protocol, address and port is already configured.
// Username is ignored, since a new connection from the same client with a different username will invalidate the previous session.
export function isConnectionConfigured(connection: MediaServerConnectionIdentifiers): boolean {
  return configStore
    .get(ConfigSelector.MediaServers)
    .some((server) => server.address === connection.address && server.port === connection.port)
}

export function addMediaServerConfig(newServer: MediaServerConfig): void {
  const mediaServers = [...configStore.get(ConfigSelector.MediaServers), newServer]
  configStore.set({ mediaServers })
}

export function deactivateMediaServer(id: string): void {
  const mediaServers = configStore.get(ConfigSelector.MediaServers)
  mediaServers.forEach((server) => {
    if (server.id === id) server.isActive = false
  })

  configStore.set(ConfigSelector.MediaServers, mediaServers)
}

export function toggleMediaServerActive(id: string): void {
  const mediaServers = configStore.get(ConfigSelector.MediaServers)
  mediaServers.forEach((server) => {
    if (server.id === id) server.isActive = !server.isActive
  })

  configStore.set(ConfigSelector.MediaServers, mediaServers)
}

export function deleteMediaServerConfig(id: string): void {
  const mediaServers = configStore
    .get(ConfigSelector.MediaServers)
    .filter((server) => server.id !== id)
  configStore.set(ConfigSelector.MediaServers, mediaServers)
}

export function toggleStartup(): void {
  configStore.set(
    ConfigSelector.IsStartupEnabled,
    !configStore.get(ConfigSelector.IsStartupEnabled)
  )
}

export function toggleActivityLogoShown(): void {
  updateActivity((config) => {
    config.isLogoShown = !config.isLogoShown
    config.isThemeColorUsed = true
  })
}

export function toggleActivityThemeColorUsed(): void {
  updateActivity((config) => (config.isThemeColorUsed = !config.isThemeColorUsed))
}

export function toggleActivityHomepageLinked(): void {
  updateActivity((config) => (config.isHomepageLinked = !config.isHomepageLinked))
}

function updateActivity(update: (activityConfig: ActivityConfig) => void): void {
  const config = configStore.get(ConfigSelector.Activity)
  update(config)
  configStore.set(ConfigSelector.Activity, config)
}

export function toggleDebugLogging(): void {
  configStore.set(
    ConfigSelector.IsDebugLoggingEnabled,
    !configStore.get(ConfigSelector.IsDebugLoggingEnabled)
  )
}

export function setImgurClientId(clientId: string | null): void {
  configStore.set(ConfigSelector.ImgurClientId, clientId)
}
