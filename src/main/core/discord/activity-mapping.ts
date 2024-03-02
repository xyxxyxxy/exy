import { Presence } from 'discord-rpc'
import log from 'electron-log'
import { ActivityConfig } from '../stores/config.types'
import { Activity, ActivityMediaType } from '../activity/types'
import {
  getEndTime,
  getImageText,
  getPrimaryText,
  getSecondaryText,
  getStateText,
  hasGenres,
  isMusic
} from '../activity/utils'

const logger = log.scope('discord-mapper')

export function toDiscordPresence(activity: Activity, config: ActivityConfig): Presence {
  logger.debug(`Converting activity into Discord format.`)
  const presence: Presence = {
    smallImageKey: getSmallImageKey(activity, config),
    smallImageText: getStateText(activity, config),
    details: getPrimaryText(activity),
    state: getSecondaryText(activity),
    largeImageKey: activity.imageUrl || 'neutral',
    largeImageText: getImageText(activity),
    endTimestamp: getEndTime(activity),
    buttons: activity.externalLinks
  }

  return sanitizeForDiscord(presence)
}

// Highly related to Discord assets, so not located in utils.
function getSmallImageKey(activity: Activity, config: ActivityConfig): string {
  if (activity.mediaType === ActivityMediaType.Book) return ''

  let theme = config.isThemeColorUsed ? activity.sourceType : 'neutral'
  theme += '-'
  if (activity.isPaused) return theme + `pause`

  let playIcon = config.isLogoShown ? 'small' : 'play'

  // Special case for music with genre information.
  // Since the genres are added as state text on this image,
  // the information is indicated via the different image.
  if (isMusic(activity) && hasGenres(activity)) {
    playIcon = 'vinyl'
  }

  return theme + playIcon
}

// Ensure compatibility with discord-rpc/Discord.
export function sanitizeForDiscord(activity: Presence): Presence {
  if (!activity) return activity

  // Shallow copy. Keeping original activity untouched.
  const result: Presence = activity

  // Delete empty fields and apply limitations.
  if (result.state) result.state = limitLength(result.state)
  else delete result.state

  if (result.details) result.details = limitLength(result.details)
  else delete result.details

  if (result.largeImageText) limitLength(result.largeImageText)
  else delete result.largeImageText

  if (!result.smallImageKey) delete result.smallImageKey

  if (result.smallImageText) limitLength(result.smallImageText)
  else delete result.smallImageText

  if (result.buttons?.length) result.buttons = result.buttons.slice(0, 2)
  else delete result.buttons

  if (result.buttons)
    result.buttons.forEach((button) => (button.label = limitLength(button.label, 32)))

  return result
}

function limitLength(value: string, maxLength = 128): string {
  if (value.length <= maxLength) return value
  return value.substring(0, maxLength - 1) + '…'
}
