import { Presence } from 'discord-rpc'
import { BaseItemDto, PlayerStateInfo, Session_SessionInfo } from './emby-client'
import log from 'electron-log'
import { MediaServerConfig } from './stores/config.types'
import { Observable, catchError, map, of, withLatestFrom } from 'rxjs'
import { getPublicImageLink$ } from './image'
import { getAlbumImageUrl, getPrimaryImageUrl } from './media-server'

const logActivity = log.scope('discord')

function getPrimaryImageLink$(
  server: MediaServerConfig,
  item: BaseItemDto
): Observable<string | null> {
  return getPublicImageLink$(getPrimaryImageUrl(server, item)).pipe(
    catchError((error) => {
      logActivity.warn(`Failed to get primary image link. Trying album image next.`)
      logActivity.debug(error)

      // Emby responds with 500 error for primary images of some songs.
      // Fallback to album image.
      return getPublicImageLink$(getAlbumImageUrl(server, item)).pipe(
        catchError((error) => {
          logActivity.warn(`Failed to get album image link. Continueing without primary image.`)
          logActivity.debug(error)
          return of(null)
        })
      )
    })
  )
}

// TODO For shows.
function getSecondaryImageLink$(
  server: MediaServerConfig,
  item: BaseItemDto
): Observable<string | null> {
  return of(null)
}

export function getActivity$(
  server: MediaServerConfig,
  session: Session_SessionInfo & {
    NowPlayingItem: BaseItemDto
    PlayState: PlayerStateInfo
  }
  // itemImageUrl: string | null
): Observable<Presence> {
  const item = session.NowPlayingItem

  return getPrimaryImageLink$(server, item).pipe(
    withLatestFrom(getSecondaryImageLink$(server, item)),
    map(([primaryImageLink, secondaryImageLink]) => {
      const activity: Presence = {}

      // Set image URLs.
      if (primaryImageLink) {
        // Apply item image and media-server image as small image.
        activity.largeImageKey = primaryImageLink
        activity.smallImageKey = `${server.type}-small`
        activity.smallImageText =
          'Playing on ' + server.type[0].toUpperCase() + server.type.slice(1) // Capitalize.
      } else {
        // Apply media-server image as large image.
        activity.largeImageKey = server.type
      }

      if (secondaryImageLink) {
        // TODO
      }

      const isPaused = !!session.PlayState.IsPaused

      if (isPaused) {
        activity.smallImageKey = `${server.type}-pause`
        activity.smallImageText = 'Paused'
      }

      switch (
        item.MediaType // TODO movies, shows, live TV, pictures, musiVideos, books
      ) {
        case 'Audio': {
          logActivity.debug('Music activity detected.')

          // Collecting.

          const song: string = item.Name || ''
          const genres: Array<string> = item.Genres || []

          const artists: Array<string> = item.Artists || []
          const premiereDateString: string = item.PremiereDate || ''
          const album: string = item.Album || ''

          const nowInSeconds = Math.round(Date.now() / 1000)
          const runtimeTicks: number = item.RunTimeTicks || 0
          const playPositionTicks: number = session.PlayState.PositionTicks || 0

          const musicBrainzAlbumId: string = item.ProviderIds?.MusicBrainzAlbum || ''

          // Preparing.
          const detailsFields: Array<string> = []
          if (song) detailsFields.push(`Listening to ${song}`)
          // TODO Put genre somewhere. Probably on large image.
          // if (genres.length)
          //   detailsFields.push(`[${genres.slice(0, 3).join("|")}]`);

          const stateFields: Array<string> = []
          if (artists.length) stateFields.push(`by ${artists.join(', ')}`)
          // TODO Include release year?
          // if (premiereDateString)
          //   stateFields.push(new Date(premiereDateString).getFullYear().toString());
          // TODO Include album name
          // if (album) stateFields.push(album);
          if (album) activity.largeImageText = album
          if (premiereDateString)
            activity.largeImageText +=
              ' (' + new Date(premiereDateString).getFullYear().toString() + ')'

          const buttons: Array<{ label: string; url: string }> = []
          if (musicBrainzAlbumId)
            buttons.push({
              label: 'Checkout this Album!',
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

          // Set time remaining, if item is not paused.
          if (!isPaused && runtimeTicks && playPositionTicks)
            activity.endTimestamp = Math.round(
              nowInSeconds + Math.round((runtimeTicks - playPositionTicks) / 10000 / 1000)
            )

          activity.buttons = buttons
          break
        }
        default: {
          logActivity.warn('Could not determine activity type.')
        }
      }

      return sanitize(activity)
    })
  )
}

// Ensure compatibility with discord-rpc/Discord.
function sanitize(activity: Presence): Presence {
  // Empty array leads to error.
  if (!activity.buttons?.length) delete activity.buttons
  // String length must be limited.
  if (activity.details) activity.details = limitLength(activity.details)
  if (activity.state) activity.state = limitLength(activity.state)
  return activity
}

function limitLength(value: string, maxLength = 128): string {
  if (value.length <= maxLength) return value
  return value.substring(0, maxLength - 3) + '...'
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
