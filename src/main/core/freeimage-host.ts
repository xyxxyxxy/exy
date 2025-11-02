// Using https://freeimage.host/api to upload images.

import axios from 'axios'
import { createHash } from 'crypto'
import { from, map, Observable, of } from 'rxjs'
import { getCached, setCache } from './stores/cache'

type ImageUploadResponse = {
  image: {
    url: string
  }
}

function getHash(image: Buffer): string {
  return createHash('md5').update(image).digest('hex')
}

function getCacheKey(image: Buffer): string {
  const hash = getHash(image)
  return `freeimage-host-${hash}`
}

function getCachedImageUrl(image: Buffer): string | undefined {
  return getCached(getCacheKey(image))
}

function setCacheImageUrl(image: Buffer, url: string): void {
  setCache(getCacheKey(image), url)
}

export function uploadImage$(image: Buffer): Observable<string | undefined> {
  const cached = getCachedImageUrl(image)
  if (cached) return of(cached)

  const base64Image = image.toString('base64')

  const formData = new FormData()
  // Key is publicly available at https://freeimage.host/api
  formData.append('key', `6d207e02198a847aa98d0a2a901485a5`)
  formData.append('action', 'upload')
  formData.append('source', base64Image)
  formData.append('format', 'json')

  return from(
    axios.post<ImageUploadResponse>(`https://freeimage.host/api/1/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  ).pipe(
    map((response) => {
      if (response.status !== 200) throw new Error(`Failed to upload image.`)

      const url = response.data.image.url
      setCacheImageUrl(image, url)
      return url
    })
  )
}
