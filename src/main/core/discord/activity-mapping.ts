import { Presence } from 'discord-rpc'
import log from 'electron-log'
import { ConfigStore, ExternalLinkConfig } from '../stores/config.types'
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
import { Button } from './types'

const logger = log.scope('discord-mapper')

export function toDiscordPresence(activity: Activity, config: ConfigStore): Presence {
  logger.debug(`Converting activity into Discord format.`)
  const presence: Presence = {
    smallImageKey: getSmallImageKey(
      activity,
      config.isPlayStateShown,
      config.isThemeUsed,
      config.isLogoUsed
    ),
    smallImageText: getStateText(activity, config.isPlayStateShown, config.isThemeUsed),
    details: getPrimaryText(activity),
    state: getSecondaryText(activity),
    largeImageKey: activity.imageUrl || 'neutral',
    largeImageText: getImageText(activity),
    endTimestamp: getEndTime(activity, config.isPlayStateShown),
    buttons: getButtons(activity, config.externalLinks)
  }

  return sanitizeForDiscord(presence)
}

// Highly related to Discord assets, so not located in utils.
function getSmallImageKey(
  activity: Activity,
  isPlayStateShown: boolean,
  isThemeColorUsed: boolean,
  isLogoShown: boolean
): string {
  if (activity.mediaType === ActivityMediaType.Book) return ''

  let theme = isThemeColorUsed ? activity.sourceType : 'neutral'
  theme += '-'
  if (isPlayStateShown && activity.isPaused) return theme + `pause`

  let playIcon = isLogoShown ? 'small' : 'play'

  // Special case for music with genre information.
  // Since the genres are added as state text on this image,
  // the information is indicated via the different image.
  if (isMusic(activity) && hasGenres(activity)) {
    playIcon = 'vinyl'
  }

  return theme + playIcon
}

function getButtons(activity: Activity, externalLinks: Array<ExternalLinkConfig>): Array<Button> {
  return externalLinks
    .filter((link) => link.isActive)
    .filter((link) => link.forItemType === 'All' || link.forItemType === activity.itemType)
    .map((link) => {
      const url =
        link.target === 'CustomUrl'
          ? link.customUrl
          : activity.externalData.find((data) => data.type === link.target)?.url
      return {
        label: link.label,
        url
      }
    })
    .filter((button): button is Button => !!button.url)
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
