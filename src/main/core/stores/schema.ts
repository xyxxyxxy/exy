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
  ignoredItemTypes: {
    type: 'array',
    default: []
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
  activity: {
    type: 'object',
    properties: {
      isLogoShown: {
        type: 'boolean',
        default: true
      },
      isThemeColorUsed: {
        type: 'boolean',
        default: true
      },
      isHomepageLinked: {
        type: 'boolean',
        default: false
      }
    }
  },
  isDebugLoggingEnabled: {
    type: 'boolean',
    default: false
  }
}
