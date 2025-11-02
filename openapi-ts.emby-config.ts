import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: `https://raw.githubusercontent.com/MediaBrowser/Emby.SDK/refs/heads/master/Resources/OpenApi/openapi_v3.json`,
  output: './src/main/core/openapi/emby',
  plugins: ['@hey-api/client-axios', '@hey-api/sdk']
})
