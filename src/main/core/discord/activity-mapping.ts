import { Presence } from 'discord-rpc'
import { BaseItemDto } from '../emby-client'
import log from 'electron-log'
import { ConfigStore } from '../stores/config.types'
import {
  Observable,
  catchError,
  forkJoin,
  from,
  map,
  of,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs'
import { Activity } from '../activity/types'
import {
  getImageText,
  getPrimaryText,
  getSecondaryText,
  getStateImage,
  getStateText
} from '../activity/utils'
import { Button } from './types'

const logActivityBuilder = log.scope('activity-builder')

export function toDiscord(activity: Activity, config: ConfigStore): Presence {
  const presence: Presence = {
    smallImageKey: getStateImage(activity, config.isMediaServerTypeShown),
    smallImageText: getStateText(activity, config.isMediaServerTypeShown),
    endTimestamp: activity.endTime, // TODO is end time shown if paused?
    details: getPrimaryText(activity),
    state: getSecondaryText(activity),
    largeImageKey: activity.imageUrl,
    largeImageText: getImageText(activity),
    buttons: activity.externalLinks
  }

  return sanitizeForDiscord(presence)
}

// TODO only keep one previous result?
// Local cache to avoid repeating the same API calls.
const publicContentCache: {
  [watchLink: string]: {
    largeImageKey?: string
    buttons: Array<Button>
  }
} = {}

function getPublicContent$(
  item: BaseItemDto,
  siteName: string,
  idMatcher: RegExp,
  watchLinkConstructor: (videoId: string) => string,
  imageUrlConstructor?: (videoId: string) => string
): Observable<Presence> {
  // Relying on file path for public content detection.
  const match = item.Path?.match(idMatcher)
  if (!match || !match[1]) return of({})
  const id = match[1]
  logActivityBuilder.debug(`Found a ${siteName} match with ID:`, id)
  const watchLink = watchLinkConstructor(id)

  // TODO Cache not needed if changed into observable pipe
  // Check cache.
  if (publicContentCache[watchLink]) {
    logActivityBuilder.debug(`Returning public content from cache.`)
    return of(publicContentCache[watchLink])
  }

  return from(fetch(watchLink)).pipe(
    tap((response) => {
      if (!response.ok) {
        throw new Error(`Public watch link '${watchLink}' failed confirmation request.`)
      }
    }),
    map(() => {
      return {
        largeImageKey: imageUrlConstructor ? imageUrlConstructor(id) : undefined,
        buttons: [{ label: `Watch on ${siteName}`, url: watchLink }]
      }
    }),
    // Set cache.
    tap((result) => (publicContentCache[watchLink] = result)),
    catchError((error) => {
      logActivityBuilder.warn(`Failed to ${siteName} content.`, error)
      return of({})
    })
  )
}

const getYouTubeContent$ = (item: BaseItemDto): Observable<Presence> => {
  // Item path must contain 'youtube', followed by a YouTube video ID inside brackets '[]'.
  return getPublicContent$(
    item,
    'YouTube',
    /youtube.*\[([^"&?/\s]{11})\]/i,
    (id) => `https://youtube.com/watch?v=${id}`,
    (id) => `https://img.youtube.com/vi/${id}/0.jpg`
  )
}

function getBitChuteContent$(item: BaseItemDto): Observable<Presence> {
  // Item path must contain 'bitchute', followed by a BitChute video ID inside brackets '[]'.
  return getPublicContent$(
    item,
    'BitChute',
    /bitchute.*\[([^"&?/\s]*)\]/i,
    (id) => `https://www.bitchute.com/video/${id}/`
  )
}

// // Looks for public images and links for the item.
// // Returns an activity with the available values set.
// const addPubliContent$ = (
//   activity: DiscordActivity,
//   item: BaseItemDto
// ): Observable<DiscordActivity> => {
//   return forkJoin([getBitChuteContent$(item), getYouTubeContent$(item)]).pipe(
//     map((results) => {
//       // Merge all results into the provided activity object.
//       results.forEach((addition) => {
//         if (addition.buttons?.length) {
//           activity.buttons.push(...addition.buttons)
//           delete addition.buttons
//         }
//         return { ...activity, ...addition }
//       })

//       return activity
//     }),
//     tap(() => logActivityBuilder.debug(`Merged public content into activity.`, activity))
//   )
// }

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
