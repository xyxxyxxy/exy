import { Presence } from 'discord-rpc'
import { BaseItemDto, PlayerStateInfo, Session_SessionInfo } from './emby-client'
import log from 'electron-log'
import { MediaServerConfig } from './stores/config.types'
import { Observable, catchError, from, map, of, switchMap, tap, withLatestFrom } from 'rxjs'
import { getImgurLink$ } from './imgur'
import { getAlbumImageUrl, getPrimaryImageUrl } from './media-server'

const logActivity = log.scope('activity')

enum MediaType {
  Audio = 'Audio',
  Video = 'Video' // Home video
  // TODO movies, shows, live TV, pictures, musiVideos
}

// Enhanced type with some defaults for easier handling.
type Activity = Presence & { buttons: Array<Button>; largeImageKey: string }
type Button = { label: string; url: string }

// Merges additional properties into activity.
function mergeActivity(activity: Activity, addition: Presence): Activity {
  if (addition.buttons?.length) {
    activity.buttons.push(...addition.buttons)
    delete addition.buttons
  }
  return { ...activity, ...addition }
}

// Looks for public images and links for the item.
// Returns an activity with the available values set.
const getPubliContent$ = (item: BaseItemDto): Observable<Presence> => {
  // RegExp detecting if the path includes 'youtube' with a YouTube video ID inside brackets [].
  // A capture group is used to get the video ID.
  const youtubeMatch = item.Path?.match(/youtube.*\[([^"&?/\s]{11})\]/i)
  // TODO Bitchute
  // TODO Odysee

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
        buttons: [
          {
            label: 'Watch on YouTube',
            url: youtubeLink
          }
        ]
      }
    }),
    catchError(() => of({}))
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
    buttons: [],
    largeImageKey: server.type
  }).pipe(
    switchMap((activity) => {
      return getPubliContent$(item).pipe(
        map((publicContent): Activity => mergeActivity(activity, publicContent))
      )
    }),
    switchMap((activity) => {
      if (activity.largeImageKey !== server.type) return of(activity)
      else
        return getPrimaryImageLink$(server, item).pipe(
          withLatestFrom(getSecondaryImageLink$(server, item)),
          map(([primaryImageLink, secondaryImageLink]) => {
            return { largeImageKey: primaryImageLink, smallImageKey: secondaryImageLink }
          }),
          map((publicContent) => mergeActivity(activity, publicContent))
        )
    }),
    map((activity) => {
      // If the large image changed to something else than the server type,
      // the server type is added as small image.
      if (activity.largeImageKey !== server.type) {
        activity.smallImageKey = `${server.type}-small`
        activity.smallImageText =
          'Playing on ' + server.type[0].toUpperCase() + server.type.slice(1) // Capitalize.
      }

      const isPaused = !!session.PlayState.IsPaused

      // Defaults.
      // activity.details = item.Name
      // activity.state = 'test'

      // Set pause state or end time.
      if (isPaused) {
        activity.smallImageKey = `${server.type}-pause`
        activity.smallImageText = 'Paused'
      } else activity.endTimestamp = getEndTimestamp(session)

      logActivity.debug(`Media of type '${item.MediaType}'.`)

      switch (item.MediaType) {
        case MediaType.Audio: {
          // Collecting.

          const song: string = item.Name || ''
          // const genres: Array<string> = item.Genres || []

          const artists: Array<string> = item.Artists || []
          const premiereDateString: string = item.PremiereDate || ''
          const album: string = item.Album || ''

          const musicBrainzAlbumId: string = item.ProviderIds?.MusicBrainzAlbum || ''

          // Preparing.
          const detailsFields: Array<string> = []
          if (song) detailsFields.push(`Listening to ${song}`)
          // TODO Use to change small image for selected genres.
          // if (genres.length)
          //   detailsFields.push(`[${genres.slice(0, 3).join("|")}]`);

          const stateFields: Array<string> = []
          if (artists.length) stateFields.push(`by ${artists.join(', ')}`)
          if (album) activity.largeImageText = album
          if (premiereDateString)
            activity.largeImageText +=
              ' (' + new Date(premiereDateString).getFullYear().toString() + ')'

          if (musicBrainzAlbumId)
            activity.buttons.push({
              label: 'Checkout this Album',
              url: `https://musicbrainz.org/release/${musicBrainzAlbumId}`
            })

          // Applying.
          // TODO Set Album and year in large image text.
          activity.details = detailsFields.join(' ')
          activity.state = stateFields.join(' - ')
          // TODO Not sure if this should be supported at all.
          //   activity.startTimestamp = Math.round(
          //     nowInSeconds - Math.round(playPositionTicks / 10000 / 1000)
          //   );
          break
        }
        case MediaType.Video: {
          activity.state = `Watching ${item.Name}`

          // Add creation date.
          if (item.DateCreated) {
            const creationDate = new Date(item.DateCreated)
            // TODO Wrong on shows.
            activity.largeImageText = `Created ${creationDate.toDateString()}`
          }
          break
        }
        default: {
          logActivity.warn('Could not determine activity type.')
        }
      }

      const sanitizedActivity: Presence = sanitize(activity)

      logActivity.debug(`Generated activity:`, sanitizedActivity)

      return sanitizedActivity
    })
  )
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
