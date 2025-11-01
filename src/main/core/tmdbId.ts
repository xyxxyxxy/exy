import { catchError, iif, map, Observable, of, shareReplay, switchMap, tap } from 'rxjs'
import { createClient } from './openapi/tmdb/client'
import { tmdbApiReadAccessToken } from '../../environment.json'
import { configurationDetails, movieDetails, tvSeriesDetails } from './openapi/tmdb'
import { toResponseData } from './utils'
import { getCached, setCache } from './stores/cache'

// This file implements TMDB API calls according to: https://www.themoviedb.org/api-terms-of-use

const client$ = of(
  createClient({
    baseURL: 'https://api.themoviedb.org',
    headers: { Authorization: `Bearer ${tmdbApiReadAccessToken}` }
  })
).pipe(shareReplay(1))

let tmdbSecureBaseUrl: string = getCached('tmdbSecureBaseUrl')
let tmdbPosterSize: string = getCached('tmdbPosterSize')
const configurationDetails$: Observable<{ tmdbSecureBaseUrl: string; tmdbPosterSize: string }> =
  iif(
    () => !!(tmdbSecureBaseUrl && tmdbPosterSize),
    of({ tmdbSecureBaseUrl, tmdbPosterSize }),
    client$.pipe(
      switchMap((client) => configurationDetails({ client })),
      map(toResponseData),
      map((data) => {
        const error = new Error(`Failed to get TMDB configuration.`)
        const secureBaseUrl = data.images?.secure_base_url
        if (!data.images?.poster_sizes) {
          throw error
        }
        console.log(data.images.poster_sizes)
        const posterSize = data.images.poster_sizes[1] // Second smallest.
        if (!secureBaseUrl || !posterSize) {
          throw error
        }
        // Apply values.
        tmdbSecureBaseUrl = secureBaseUrl
        tmdbPosterSize = posterSize
        // Cache for future.
        setCache('tmdbSecureBaseUrl', secureBaseUrl)
        setCache('tmdbPosterSize', posterSize)
        return { tmdbSecureBaseUrl, tmdbPosterSize }
      })
    )
  )

function getImageUrl$(tmdbId: number, isMovie: boolean): Observable<string> {
  const cacheKey = `tmdb-${tmdbId}`
  const cached = getCached(cacheKey)
  if (cached) return of(cached)

  return client$.pipe(
    switchMap((client) =>
      iif(
        () => isMovie,
        movieDetails({ client, path: { movie_id: tmdbId } }),
        tvSeriesDetails({ client, path: { series_id: tmdbId } })
      )
    ),
    map(toResponseData),
    map((data) => tmdbSecureBaseUrl + tmdbPosterSize + data.poster_path),
    tap((imageUrl) => setCache(cacheKey, imageUrl))
  )
}

export function getTmdbImageUrl$(tmdbId: number, isMovie: boolean): Observable<string> {
  return configurationDetails$.pipe(switchMap(() => getImageUrl$(tmdbId, isMovie)))
}
