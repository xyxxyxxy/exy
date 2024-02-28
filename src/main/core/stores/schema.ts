import { randomUUID } from 'crypto'
import { ConfigStore } from './config.types'
import { Schema } from 'electron-store'

export const configSchema: Schema<ConfigStore> = {
  deviceId: {
    // Device ID of this client.
    type: 'string',
    default: randomUUID()
  },
  isStartupEnabled: {
    type: 'boolean',
    default: true
  },
  activity: {
    type: 'object',
    properties: {
      isLogoShown: {
        type: 'boolean',
        default: false
      },
      isThemeColorUsed: {
        type: 'boolean',
        default: false
      },
      isHomepageLinked: {
        type: 'boolean',
        default: false
      }
    }
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
