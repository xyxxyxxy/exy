import { Presence } from 'discord-rpc'
import log from 'electron-log'
import { ActivityConfig } from '../stores/config.types'
import { Activity, ActivityPlayState } from '../activity/types'
import {
  getImageText,
  getPrimaryText,
  getSecondaryText,
  getStateImage,
  getStateText
} from '../activity/utils'
import { name, homepage } from '../../../../package.json'

const logger = log.scope('discord-mapper')

export function toDiscordPresence(activity: Activity, config: ActivityConfig): Presence {
  logger.debug(`Converting activity into Discord format.`)
  const presence: Presence = {
    smallImageKey: getStateImage(activity, config),
    smallImageText: getStateText(activity, config),
    details: getPrimaryText(activity),
    state: getSecondaryText(activity),
    largeImageKey: activity.imageUrl || 'neutral',
    largeImageText: getImageText(activity),
    // Make sure we create a new array, so the original activity is not modified.
    // TODO Freeze original activity on creation.
    buttons: [...activity.externalLinks]
  }

  if (activity.playState !== ActivityPlayState.Paused) presence.endTimestamp = activity.endTime

  // Don't know why this line is needed. TypeScript does not recognize the value set above.
  if (!presence.buttons) presence.buttons = []
  // Inject info.
  if (config.isHomepageLinked) presence.buttons.push({ label: `${name}?`, url: homepage })

  return sanitizeForDiscord(presence)
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
