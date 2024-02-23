import { Presence } from 'discord-rpc'
import { BaseItemDto, PlayerStateInfo, Session_SessionInfo } from './emby-client'
import log from 'electron-log'
import { MediaServerConfig } from './stores/config.types'
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
import { getImgurLink$ } from './imgur'
import { getParentImageUrl, getPrimaryImageUrl } from './media-server'
import { config$ } from './stores/config'

const logActivity = log.scope('activity')

enum ItemMediaType {
  Audio = 'Audio',
  Video = 'Video'
}

enum ItemType {
  // Music has no type, only media type.
  Episode = 'Episode',
  Movie = 'Movie',
  TvChannel = 'TvChannel',
  MusicVideo = 'MusicVideo'
}

// Enhanced type with some defaults for easier handling.
type Activity = Presence & {
  buttons: Array<Button>
}
type Button = { label: string; url: string }

// Merges additional properties into activity.
function mergeActivity(activity: Activity, addition: Presence): Activity {
  if (addition.buttons?.length) {
    activity.buttons.push(...addition.buttons)
    delete addition.buttons
  }
  return { ...activity, ...addition }
}

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
  logActivity.debug(`Found a ${siteName} match with ID:`, id)
  const watchLink = watchLinkConstructor(id)

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
    catchError((error) => {
      logActivity.warn(`Failed to ${siteName} content.`, error)
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

// Looks for public images and links for the item.
// Returns an activity with the available values set.
const addPubliContent$ = (activity: Activity, item: BaseItemDto): Observable<Activity> => {
  return forkJoin([getBitChuteContent$(item), getYouTubeContent$(item)]).pipe(
    map((results) => {
      // Merge all results into the provided activity object.
      results.forEach((result) => mergeActivity(activity, result))

      return activity
    }),
    tap(() => logActivity.debug(`Merged public content into activity.`, activity))
  )
}

function addLargeImage$(
  activity: Activity,
  server: MediaServerConfig,
  item: BaseItemDto
): Observable<Activity> {
  if (activity.largeImageKey) return of(activity)

  return getPrimaryImageLink$(server, item).pipe(
    map((link) => {
      if (link) activity.largeImageKey = link
      return activity
    })
  )
}

function getPrimaryImageLink$(
  server: MediaServerConfig,
  item: BaseItemDto
): Observable<string | undefined> {
  return getImgurLink$(getPrimaryImageUrl(server, item)).pipe(
    catchError((error) => {
      logActivity.warn(`Failed to get primary image link. Trying parent image next.`)
      logActivity.debug(error)

      if (!item.ParentId) return of(undefined)

      // Emby responds with 500 error for primary images of some songs.
      // Also some episodes don't have images, like specials/extras not present in TVDB.
      // In such cases we fallback to the parent image (Album cover for songs and show poster for episodes).
      return getImgurLink$(getParentImageUrl(server, item)).pipe(
        catchError((error) => {
          logActivity.warn(`Failed to get album image link. Continueing without primary image.`)
          logActivity.debug(error)
          return of(undefined)
        })
      )
    })
  )
}

export function getActivity$(
  server: MediaServerConfig,
  session: Session_SessionInfo & {
    NowPlayingItem: BaseItemDto
    PlayState: PlayerStateInfo
  }
): Observable<Presence> {
  const item = session.NowPlayingItem

  return of<Activity>({
    // Start with some sensible default values.
    buttons: []
  }).pipe(
    switchMap((activity) => addPubliContent$(activity, item)),
    switchMap((activity) => addLargeImage$(activity, server, item)),
    withLatestFrom(config$),
    map(([activity, config]) => {
      const type = config.isMediaServerTypeShown ? server.type : 'neutral'
      setDefaultImageAndPauseState(activity, type, session)

      let detailsVerb: string = 'Playing'
      let detailsName: string = item.Name || '' // TODO Prefer original title? Relevant for movies

      // Start with empty string, so += does not cause 'undefined'.
      activity.state = ''
      activity.largeImageText = ''

      const date: Date | null = getDate(item)

      const setArtists = (): void => {
        const artists: Array<string> = item.Artists || []
        if (artists.length) activity.state += `by ${artists.join(', ')}`
      }

      // General information based on media type.
      switch (item.MediaType) {
        case ItemMediaType.Audio: {
          // Music has no 'Type', only 'MediaType' set to 'Audio'.

          detailsVerb = 'Listening to'

          setArtists()

          // Audio books are identified by having the 'Audiobook' genre.
          // const isAudioBook: boolean = !!item.Genres?.includes('Audiobook')
          // Preparing.
          // TODO Use to change small image for selected genres.
          // if (genres.length)
          //   detailsFields.push(`[${genres.slice(0, 3).join("|")}]`);

          // TODO Special for music, what happens on podcast?
          if (item.Album) activity.largeImageText += item.Album
          if (item.Album && date) activity.largeImageText += ` (${date.getFullYear()})`

          const url =
            item.ExternalUrls &&
            item.ExternalUrls.find((externalUrl) => externalUrl.Url?.includes(`/release/`))?.Url
          if (url) activity.buttons.push({ label: 'Checkout this Release', url: url })

          break
        }
        case ItemMediaType.Video: {
          detailsVerb = 'Watching'

          break
        }
        default: {
          logActivity.debug('No item media type set.', item)
        }
      }

      //Episode
      switch (item.Type) {
        case ItemType.Episode: {
          // Live TV recordings are also considered episodes.

          // Episodes without 'IndexNumber' are considered live TV recordings.
          // TODO Not sure if this is accurate.
          const isLiveTvRecording: boolean = !item.IndexNumber

          const series = item.SeriesName
          const season = item.SeasonName
          // const seasonNumber = item.ParentIndexNumber
          const episode = item.Name
          const episodeNumber = item.IndexNumber

          if (series) detailsName = series

          // For live TV recordings the season/episode info is often random,
          // so those fields are avoided.
          if (isLiveTvRecording) {
            activity.state = item.Overview
          } else {
            if (season) activity.state = season
            // Add year after season, if the season itself does not include four digits.
            // Assuming that is already a year.
            if (date && !season?.match(/\d{4}/)) activity.state += ` (${date.getFullYear()})`

            if (episodeNumber) activity.largeImageText += `Episode ${episodeNumber} `
            if (episode) activity.largeImageText += episode
          }

          // Linking to TVDB, since episodes do not link to IMDb.
          const url =
            item.ExternalUrls && item.ExternalUrls.find((url) => url.Name === 'TheTVDB')?.Url
          if (url) activity.buttons.push({ label: 'Checkout this Episode', url })

          break
        }
        case ItemType.Movie: {
          if (date) detailsName += ` (${date.getFullYear()})`
          if (item?.Genres?.length) activity.largeImageText = item.Genres?.slice(0, 3).join('/')

          const url = item.ExternalUrls && item.ExternalUrls.find((url) => url.Name === 'IMDb')?.Url
          if (url) activity.buttons.push({ label: 'Checkout this Movie', url })

          break
        }
        case ItemType.MusicVideo: {
          setArtists()
          break
        }
        case ItemType.TvChannel: {
          if (item.CurrentProgram?.Overview) activity.state = item.CurrentProgram?.Overview
          if (item.CurrentProgram?.StartDate)
            activity.startTimestamp = new Date(item.CurrentProgram?.StartDate)

          break
        }
        default: {
          logActivity.debug('No item type set.', item)
        }
      }

      activity.details = detailsName ? `${detailsVerb} ${detailsName}` : `${detailsVerb}...`

      const sanitizedActivity: Presence = sanitize(activity)

      logActivity.debug(`Generated activity:`, sanitizedActivity)

      return sanitizedActivity
    })
  )
}

function setDefaultImageAndPauseState(
  activity: Activity,
  type: 'neutral' | MediaServerConfig['type'],
  session: Session_SessionInfo & {
    NowPlayingItem: BaseItemDto
    PlayState: PlayerStateInfo
  }
): void {
  // TODO server type and name

  // If large image was set before the server type image is added.
  // Else the server image is the large image.
  if (activity.largeImageKey) {
    activity.smallImageKey = `${type}-small`
    activity.smallImageText = 'Playing'
    if (type !== 'neutral') activity.smallImageText += 'on' + type[0].toUpperCase() + type.slice(1) // Capitalize.
  } else activity.largeImageKey = type

  // Set muted image. Overwritten by paused state.
  if (session.PlayState.IsMuted) {
    activity.smallImageKey = `${type}-mute`
    activity.smallImageText = 'Muted'
  }

  // Set pause image or end time.
  if (session.PlayState.IsPaused) {
    activity.smallImageKey = `${type}-pause`
    activity.smallImageText = 'Paused'
  } else activity.endTimestamp = getEndTime(session)
}

function getDate(item: BaseItemDto): Date | null {
  let date: Date | null = null
  if (item.DateCreated) date = new Date(item.DateCreated)
  if (item.PremiereDate) date = new Date(item.PremiereDate)
  return date
}

function getEndTime(
  session: Session_SessionInfo & {
    NowPlayingItem: BaseItemDto
    PlayState: PlayerStateInfo
  }
): Date | undefined {
  if (!session.NowPlayingItem.RunTimeTicks || !session.PlayState.PositionTicks) return undefined

  const runtimeMs: number = session.NowPlayingItem.RunTimeTicks / 10000
  const playPositionMs: number = session.PlayState.PositionTicks / 10000
  // Now, plus runtime, minus play position.
  return new Date(Date.now().valueOf() + runtimeMs - playPositionMs)

  // const nowInSeconds = Math.round(Date.now() / 1000)
  // return Math.round(nowInSeconds + Math.round((runtimeTicks - playPositionTicks) / 10000 / 1000))
}

// Ensure compatibility with discord-rpc/Discord.
function sanitize(activity: Activity): Presence {
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
