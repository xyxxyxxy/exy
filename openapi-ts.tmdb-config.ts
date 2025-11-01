import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: `https://developer.themoviedb.org/openapi/tmdb-api.json`,
  output: './src/main/core/openapi/tmdb',
  plugins: [
    '@hey-api/client-axios',
    {
      name: '@hey-api/sdk'
    }
  ]
})
