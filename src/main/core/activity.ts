import { Presence } from 'discord-rpc'
import { BaseItemDto, PlayerStateInfo, Session_SessionInfo } from './emby-client'
import log from 'electron-log'
import { MediaServerConfig } from './stores/config.types'
import { Observable, catchError, forkJoin, from, map, of, switchMap, tap } from 'rxjs'
import { getImgurLink$ } from './imgur'
import { getAlbumImageUrl, getPrimaryImageUrl } from './media-server'

const logActivity = log.scope('activity')

enum ItemMediaType {
  Audio = 'Audio',
  Video = 'Video'
}

enum ItemType {
  // Music has no type, only media type.
  Episode = 'Episode'
  // Home video
  // TODO movies, shows, live TV, musiVideos
}

// Enhanced type with some defaults for easier handling.
type Activity = Presence & { buttons: Array<Button> }
type Button = { label: string; url: string }

// Merges additional properties into activity.
function mergeActivity(activity: Activity, addition: Presence): Activity {
  if (addition.buttons?.length) {
    activity.buttons.push(...addition.buttons)
    delete addition.buttons
  }
  return { ...activity, ...addition }
}

const getYouTubeContent$ = (item: BaseItemDto): Observable<Presence> => {
  // RegExp detecting if the path includes 'youtube' with a YouTube video ID inside brackets [].
  // A capture group is used to get the video ID.
  // bDOjYsu_-j0
  const youtubeMatch = item.Path?.match(/youtube.*\[([^"&?/\s]{11})\]/i)

  if (!youtubeMatch || !youtubeMatch[1]) return of({})

  const youtubeId = youtubeMatch[1]

  const youtubeLink = `https://youtube.com/watch?v=${youtubeId}`
  const youtubeThumbnailLink = `https://img.youtube.com/vi/${youtubeId}/0.jpg`
  logActivity.debug(`Got a YouTube match:`, youtubeLink)
  // Downloading the thumbnail image to confirm the video is still available.
  return from(fetch(youtubeThumbnailLink)).pipe(
    tap((response) => {
      if (!response.ok)
        throw new Error(
          `Failed to download image "${youtubeThumbnailLink}". Status: ${response.status} ${response.statusText}`
        )
    }),
    map(() => {
      return {
        largeImageKey: youtubeThumbnailLink,
        buttons: [{ label: 'Watch on YouTube', url: youtubeLink }]
      }
    }),
    catchError(() => of({}))
  )
}

function getBitChuteContent$(item: BaseItemDto): Observable<Presence> {
  return of({}) // TODO
}

function getOdyseeContent$(item: BaseItemDto): Observable<Presence> {
  return of({}) // TODO
}

function getTheTVDBContent$(item: BaseItemDto): Observable<Presence> {
  const url: string | undefined =
    item.ExternalUrls && item.ExternalUrls.find((url) => url.Name === 'TheTVDB')?.Url

  if (!url) return of({})

  // TODO Get preview image and secondary show image.
  // TODO Prefer Imgur uploads, since TVDB images are sometimes different?

  return of({ buttons: [{ label: 'Checkout this Episode', url }] })
}

// Looks for public images and links for the item.
// Returns an activity with the available values set.
const addPubliContent$ = (activity: Activity, item: BaseItemDto): Observable<Activity> => {
  return forkJoin([
    getBitChuteContent$(item),
    getOdyseeContent$(item),
    getYouTubeContent$(item),
    getTheTVDBContent$(item)
  ]).pipe(
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

function addSmallImage$(
  activity: Activity,
  server: MediaServerConfig,
  item: BaseItemDto
): Observable<Activity> {
  if (activity.smallImageKey) return of(activity)

  return getSecondaryImageLink$(server, item).pipe(
    map((link) => {
      if (link) activity.smallImageKey = link
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
      logActivity.warn(`Failed to get primary image link. Trying album image next.`)
      logActivity.debug(error)

      // Emby responds with 500 error for primary images of some songs.
      // Fallback to album image.
      return getImgurLink$(getAlbumImageUrl(server, item)).pipe(
        catchError((error) => {
          logActivity.warn(`Failed to get album image link. Continueing without primary image.`)
          logActivity.debug(error)
          return of(undefined)
        })
      )
    })
  )
}

// TODO For shows.
function getSecondaryImageLink$(
  server: MediaServerConfig,
  item: BaseItemDto
): Observable<string | undefined> {
  return of(undefined)
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
    switchMap((activity) => addSmallImage$(activity, server, item)),
    map((activity) => {
      // If large image was set before the server type image is added.
      // Else the server image is the large image.
      if (activity.largeImageKey) {
        activity.smallImageKey = `${server.type}-small`
        activity.smallImageText =
          'Playing on ' + server.type[0].toUpperCase() + server.type.slice(1) // Capitalize.
      } else activity.largeImageKey = server.type

      const isPaused = !!session.PlayState.IsPaused

      // Set pause image or end time.
      if (isPaused) {
        activity.smallImageKey = `${server.type}-pause`
        activity.smallImageText = 'Paused'
      } else activity.endTimestamp = getEndTimestamp(session)

      logActivity.debug(`Media of type '${item.MediaType}'.`)

      let detailsVerb: string = 'Playing'
      let detailsName: string = item.Name || ''

      const date: Date | null = getDate(item)

      // General information based on media type.
      switch (item.MediaType) {
        case ItemMediaType.Audio: {
          // Music has no type, only media type 'Audio'.

          detailsVerb = 'Listening to'

          // Set state.
          const artists: Array<string> = item.Artists || []
          if (artists.length) activity.state = `by ${artists.join(', ')}`

          const album: string = item.Album || ''
          const musicBrainzAlbumId: string = item.ProviderIds?.MusicBrainzAlbum || ''

          // Preparing.
          // TODO Use to change small image for selected genres.
          // if (genres.length)
          //   detailsFields.push(`[${genres.slice(0, 3).join("|")}]`);

          // TODO Special for music.
          if (album) activity.largeImageText = album

          // TODO THere is also ProductionYear
          if (date) activity.largeImageText += ' (' + new Date(date).getFullYear().toString() + ')'

          // TODO Move to public part with image download
          if (musicBrainzAlbumId)
            activity.buttons.push({
              label: 'Checkout this Album',
              url: `https://musicbrainz.org/release/${musicBrainzAlbumId}`
            })

          // TODO Not sure if this should be supported at all.
          //   activity.startTimestamp = Math.round(
          //     nowInSeconds - Math.round(playPositionTicks / 10000 / 1000)
          //   );
          break
        }
        // Episodes, Home video // TODO
        case ItemMediaType.Video: {
          detailsVerb = 'Watching'

          break
        }
        default: {
          logActivity.debug('No item media type set.', item)
        }
      }

      //Episode
      switch (
        item.Type // TODO Implement other types
      ) {
        case ItemType.Episode: {
          const series = item.SeriesName
          const season = item.SeasonName
          const episode = item.EpisodeTitle

          if (series) detailsName = series
          if (season) activity.details = season
          if (episode) activity.details += ` - ${episode}`

          // TODO Wrong on shows.
          // Add creation date.
          // if (item.DateCreated) {
          //   const creationDate = new Date(item.DateCreated)
          //   activity.largeImageText = `Created ${creationDate.toDateString()}`
          // }
          if (item.PremiereDate) {
            const premiereDate = new Date(item.PremiereDate)
            activity.largeImageText = `Created ${premiereDate.toDateString()}`
          }

          break
        }
        default: {
          logActivity.warn('No item type set.', item)
        }
      }

      activity.details = detailsName ? `${detailsVerb} ${detailsName}` : `${detailsVerb}...`

      const sanitizedActivity: Presence = sanitize(activity)

      logActivity.debug(`Generated activity:`, sanitizedActivity)

      return sanitizedActivity
    })
  )
}

function getDate(item: BaseItemDto): Date | null {
  let date: Date | null = null
  if (item.DateCreated) date = new Date(item.DateCreated)
  if (item.PremiereDate) date = new Date(item.PremiereDate)
  return date
}

function getEndTimestamp(
  session: Session_SessionInfo & {
    NowPlayingItem: BaseItemDto
    PlayState: PlayerStateInfo
  }
): number {
  if (!session.NowPlayingItem.RunTimeTicks)
    logActivity.warn(`Now playing item has no 'RunTimeTicks'.`)
  if (!session.PlayState.PositionTicks) logActivity.warn(`Play state has no 'PositionTicks'.`)

  const runtimeTicks: number = session.NowPlayingItem.RunTimeTicks || 0
  const playPositionTicks: number = session.PlayState.PositionTicks || 0

  const nowInSeconds = Math.round(Date.now() / 1000)
  return Math.round(nowInSeconds + Math.round((runtimeTicks - playPositionTicks) / 10000 / 1000))
}

// Ensure compatibility with discord-rpc/Discord.
function sanitize(activity: Activity): Presence {
  // Shallow copy. Keeping original activity untouched.
  const result: Presence = { ...activity }

  // Empty array leads to error.
  if (!result.buttons?.length) delete result.buttons
  // Maximum two buttons allowed.
  else result.buttons = result.buttons.slice(0, 2)

  if (result.buttons)
    result.buttons.forEach((button) => (button.label = limitLength(button.label, 32)))
  // String length must be limited.
  if (result.details) result.details = limitLength(result.details)
  if (result.state) result.state = limitLength(result.state)

  return result
}

function limitLength(value: string, maxLength = 128): string {
  if (value.length <= maxLength) return value
  return value.substring(0, maxLength - 1) + '…'
}

//       switch (NPItem.Type) {
//         case "Episode": {
//           const seasonNum = NPItem.ParentIndexNumber;
//           const episodeNum = NPItem.IndexNumber;
//           (properties.details = `Watching ${NPItem.SeriesName} ${
//             NPItem.ProductionYear ? `(${NPItem.ProductionYear})` : ""
//           }`),
//             (properties.state = `${
//               seasonNum ? `S${seasonNum.toString().padStart(2, "0")}` : ""
//             }${
//               episodeNum ? `E${episodeNum.toString().padStart(2, "0")}: ` : ""
//             }${limitString(Name)}`);
//           break;
//         }
//         case "Movie": {
//           properties.details = "Watching a Movie";
//           properties.state = `${limitString(Name)} ${
//             NPItem.ProductionYear ? `(${NPItem.ProductionYear})` : ""
//           }`;
//           break;
//         }
//         case "MusicVideo": {
//           const artists = NPItem.Artists.splice(0, 3); // Limit to 3
//           properties.details = `Watching ${limitString(Name)} ${
//             NPItem.ProductionYear ? `(${NPItem.ProductionYear})` : ""
//           }`;
//           properties.state = `By ${
//             artists.length ? artists.join(", ") : "Unknown Artist"
//           }`;
//           break;
