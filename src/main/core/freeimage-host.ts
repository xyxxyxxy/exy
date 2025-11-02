// Using https://freeimage.host/api to upload images.

import axios from 'axios'
import { from, map, Observable } from 'rxjs'

type ImageUploadResponse = {
  status_code: number
  success: {
    message: string
    code: number
  }
  image: {
    name: string
    extension: string
    size: number
    width: number
    height: number
    date: string
    date_gmt: string
    storage_id: string | null
    description: string | null
    nsfw: string
    md5: string
    storage: string
    original_filename: string
    original_exifdata: string | null
    views: string
    id_encoded: string
    filename: string
    ratio: number
    size_formatted: string
    mime: string
    bits: number
    channels: string | null
    url: string
    url_viewer: string
    thumb: {
      filename: string
      name: string
      width: number
      height: number
      ratio: number
      size: number
      size_formatted: string
      mime: string
      extension: string
      bits: number
      channels: string | null
      url: string
    }
    medium: {
      filename: string
      name: string
      width: number
      height: number
      ratio: number
      size: number
      size_formatted: string
      mime: string
      extension: string
      bits: number
      channels: string | null
      url: string
    }
    views_label: string
    display_url: string
    how_long_ago: string
  }
  status_txt: string
}

export function uploadImage$(image: Buffer): Observable<string | undefined> {
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
      return response.data.image.url
    })
  )
}
