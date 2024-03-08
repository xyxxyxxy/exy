import { randomUUID } from 'crypto'
import { ConfigStore } from './config.types'
import { Schema } from 'electron-store'
import { name, homepage } from '../../../../package.json'

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
  isPlayStateShown: {
    type: 'boolean',
    default: true
  },
  isLogoUsed: {
    type: 'boolean',
    default: true
  },
  isThemeUsed: {
    type: 'boolean',
    default: true
  },
  ignoredTypes: {
    type: 'array',
    default: []
  },
  mediaServers: {
    type: 'array',
    default: [],
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        isActive: { type: 'boolean' },
        serverId: { type: 'string' },
        userId: { type: 'string' },
        accessToken: { type: 'string' },
        type: { enum: ['emby', 'jellyfin'] },
        protocol: { enum: ['http', 'https'] },
        address: { type: 'string' },
        port: { type: 'number' },
        username: { type: 'string' }
      }
    }
  },
  imgurClientId: {
    type: ['string', 'null'],
    default: null
  },
  externalLinks: {
    type: 'array',
    default: [
      {
        id: randomUUID(),
        isActive: true,
        label: 'Checkout this Release',
        forItemType: 'Songs',
        target: 'MusicBrainz Release Group'
      },
      {
        id: randomUUID(),
        isActive: true,
        label: 'Checkout this Episode',
        forItemType: 'Episodes',
        target: 'TheTVDB'
      },
      {
        id: randomUUID(),
        isActive: true,
        label: 'Checkout this Movie',
        forItemType: 'Movies',
        target: 'IMDb'
      },
      {
        id: randomUUID(),
        isActive: true,
        label: 'Watch on YouTube',
        forItemType: 'OtherVideos',
        target: 'YouTube'
      },
      {
        id: randomUUID(),
        isActive: true,
        label: 'Watch on BitChute',
        forItemType: 'OtherVideos',
        target: 'BitChute'
      },
      {
        id: randomUUID(),
        isActive: false,
        label: `${name}?`,
        forItemType: 'All',
        target: 'CustomUrl',
        customUrl: homepage
      }
    ],
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        isActive: { type: 'boolean' },
        label: { type: 'string' },
        limitedToItemType: { type: 'string' },
        target: { type: 'string' },
        customUrl: { type: 'string' }
      }
    }
  },
  isDebugLoggingEnabled: {
    type: 'boolean',
    default: false
  }
}
