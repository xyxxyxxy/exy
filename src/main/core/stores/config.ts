import Store from 'electron-store'
import {
  ConfigSelector,
  ConfigStore,
  ExternalLinkConfig,
  MediaServerConfig,
  MediaServerConnectionIdentifiers
} from './config.types'
import { BehaviorSubject } from 'rxjs'
import log from 'electron-log'
import { configSchema } from './schema'
import { ActivityItemType } from '../activity/types'

const logger = log.scope('config')

const configStore = new Store<ConfigStore>({
  name: 'config',
  watch: true,
  beforeEachMigration: (store, context): void => {
    logger.info(`Migrate from ${context.fromVersion} → ${context.toVersion}`)
    logger.debug(store)
  },
  migrations: {
    '1.1.0': (store): void => {
      // TODO remove imgur
    },
    '0.4.0': (store): void => {
      const activity = store.get('activity')

      if (activity) store.delete('activity' as keyof ConfigStore)

      store.set('isThemeUsed', activity ? !!activity['isThemeColorUsed'] : true)
      store.set('isLogoUsed', activity ? !!activity['isLogoShown'] : true)

      // New value.
      store.set('isPlayStateShown', true)

      // Reset activity to introduce default buttons.
      store.reset('externalLinks')
    },
    '0.3.0': (store): void => {
      // Remove unused field 'ignoredLibraryIds' of all media-servers.
      const servers = store.get('mediaServers')
      servers.forEach(
        (server) => delete (server as { ignoredLibraryIds?: Array<string> }).ignoredLibraryIds
      )
      store.set('mediaServers', servers)
      store.set(ConfigSelector.IgnoredTypes, [])
    },
    '0.2.0': (store): void => {
      // Move media server type shown into new activity section of config.
      const isThemeColorUsed = store.get('isMediaServerTypeShown')
      if (isThemeColorUsed) store.delete('isMediaServerTypeShown' as keyof ConfigStore)
      store.set('activity', {
        isLogoShown: isThemeColorUsed,
        isThemeColorUsed: isThemeColorUsed,
        isHomepageLinked: false
      })
    }
  },
  schema: configSchema
})

const configSource: BehaviorSubject<Readonly<ConfigStore>> = new BehaviorSubject<
  Readonly<ConfigStore>
>(configStore.store)

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

export function addMediaServer(newServer: MediaServerConfig): void {
  configStore.set(ConfigSelector.MediaServers, [
    ...configStore.get(ConfigSelector.MediaServers),
    newServer
  ])
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

export function deleteMediaServer(id: string): void {
  configStore.set(
    ConfigSelector.MediaServers,
    configStore.get(ConfigSelector.MediaServers).filter((element) => element.id !== id)
  )
}

export function toggleIgnoredMediaType(type: ActivityItemType): void {
  let list = configStore.get(ConfigSelector.IgnoredTypes)
  const isIncluded = list.includes(type)

  if (isIncluded) list = list.filter((element) => element !== type)
  else list.push(type)

  configStore.set(ConfigSelector.IgnoredTypes, list)
}

export function toggleConfigFlag(selector: ConfigSelector): void {
  configStore.set(selector, !configStore.get(selector.toString()))
}

export function setImgurClientId(clientId: string | null): void {
  configStore.set(ConfigSelector.ImgurClientId, clientId)
}

export function saveExternalLink(newOrUpdated: ExternalLinkConfig): void {
  const externalLinks = configStore.get(ConfigSelector.ExternalLinks)

  // Remove custom URL if target is different.
  if (newOrUpdated.target !== 'CustomUrl') delete newOrUpdated.customUrl

  const index = externalLinks.findIndex((element) => element.id === newOrUpdated.id)
  if (index !== -1) {
    // Update.
    externalLinks[index] = newOrUpdated
  } else {
    // Add new.
    externalLinks.push(newOrUpdated)
  }

  configStore.set(ConfigSelector.ExternalLinks, externalLinks)
}

export function toggleExternalLinkActive(id: string): void {
  const externalLinks = configStore.get(ConfigSelector.ExternalLinks)
  externalLinks.forEach((element) => {
    if (element.id === id) element.isActive = !element.isActive
  })

  configStore.set(ConfigSelector.ExternalLinks, externalLinks)
}

export function moveExternalLinkUp(id: string): void {
  const externalLinks = configStore.get(ConfigSelector.ExternalLinks)
  const index = externalLinks.findIndex((element) => element.id === id)
  moveInArray(externalLinks, index, index - 1)
  configStore.set(ConfigSelector.ExternalLinks, externalLinks)
}

export function moveExternalLinkDown(id: string): void {
  const externalLinks = configStore.get(ConfigSelector.ExternalLinks)
  const index = externalLinks.findIndex((element) => element.id === id)
  moveInArray(externalLinks, index, index + 1)
  configStore.set(ConfigSelector.ExternalLinks, externalLinks)
}

function moveInArray<T>(data: Array<T>, from: number, to: number): void {
  // Remove 'from' element and store it.
  const element = data.splice(from, 1)[0]
  // Insert stored element into position 'to'.
  data.splice(to, 0, element)
}

export function deleteExternalLink(id: string): void {
  configStore.set(
    ConfigSelector.ExternalLinks,
    configStore.get(ConfigSelector.ExternalLinks).filter((element) => element.id !== id)
  )
}

export function resetExternalLinks(): void {
  configStore.reset(ConfigSelector.ExternalLinks)
}

export function clearConfig(): void {
  configStore.clear()
}
