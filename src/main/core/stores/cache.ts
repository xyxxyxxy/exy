import Store, { Schema } from 'electron-store'

type CacheStore = {
  image: {
    // Mapping the image hash to a public link URL.
    [hash: string]: string
  }
}

const schema: Schema<CacheStore> = {
  image: {
    type: 'object'
  }
}

const cacheStore = new Store<CacheStore>({
  name: 'cache',
  schema,
  clearInvalidConfig: true
})

export function getCachedImageLink(imageHash: string): string | undefined {
  return cacheStore.get(getImageCacheKey(imageHash))
}

export function cacheImageLink(imageHash: string, link: string): void {
  cacheStore.set(getImageCacheKey(imageHash), link)
}

export function clearCache(): void {
  cacheStore.clear()
}

const getImageCacheKey = (imageHash: string): string => `image.${imageHash}`
