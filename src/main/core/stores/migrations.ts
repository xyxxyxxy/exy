import { Options } from 'electron-store'
import { ConfigStore, ConfigSelector } from './config.types'
import log from 'electron-log'

const logger = log.scope('config-migration')

export const configMigrationOptions: Options<ConfigStore> = {
  beforeEachMigration: (store, context): void => {
    logger.info(`Migrate from ${context.fromVersion} → ${context.toVersion}`)
    logger.debug(store)
  },
  migrations: {
    '0.2.0': (store): void => {
      // Move media server type shown into new activity section of config.
      const isThemeColorUsed = store.get('isMediaServerTypeShown' as keyof ConfigStore)
      store.delete('isMediaServerTypeShown' as keyof ConfigStore)
      store.set(ConfigSelector.Activity, {
        isLogoShown: isThemeColorUsed,
        isThemeColorUsed: isThemeColorUsed,
        isHomepageLinked: false
      })
    },
    '0.3.0': (store): void => {
      // Remove unused field 'ignoredLibraryIds' of all media-servers.
      const servers = store.get('mediaServers')
      servers.forEach(
        (server) => delete (server as { ignoredLibraryIds?: Array<string> }).ignoredLibraryIds
      )
      store.set('mediaServers', servers)
    }
  }
}
