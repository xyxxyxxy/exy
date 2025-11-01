import Store, { Schema } from 'electron-store'

type CacheStore = {
  [key: string]: string
}

const schema: Schema<CacheStore> = {
  additionalProperties: {
    type: 'string'
  }
}

const cacheStore = new Store<CacheStore>({
  name: 'cache',
  schema,
  clearInvalidConfig: true,
  migrations: {
    '1.1.0': (store) => {
      store.clear()
    }
  }
})

export function getCached(key: string): string {
  return cacheStore.get(key)
}

export function setCache(key: string, value: string): void {
  cacheStore.set(key, value)
}

export function clearCache(): void {
  cacheStore.clear()
}
