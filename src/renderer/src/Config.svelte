<script lang="ts">
  import Versions from './components/Versions.svelte'
  import ImgurInfo from './components/ImgurInfo.svelte'
  import ImgurClientId from './components/ImgurClientId.svelte'
  import type { ConfigStore } from '../../main/core/stores/config.types'
  import { IpcChannel } from '../../main/ipc.types'
  import MediaServer from './components/MediaServer.svelte'
  import MediaServerNew from './components/MediaServerNew.svelte'
  import DiscordStatus from './components/DiscordStatus.svelte'

  let config: ConfigStore
  let hasMediaServers: boolean

  window.electron.ipcRenderer.send(IpcChannel.Config) // Get initial value.
  window.electron.ipcRenderer.on(IpcChannel.Config, (_, newConfig) => {
    config = newConfig
    hasMediaServers = !!newConfig.mediaServers.length
  })

  function toggleStartup(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleStartup)
  }

  function toggleDebugLogging(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleDebugLogging)
  }
</script>

{#if config}
  <div class="container">
    <section>
      <h4>⚙️ General</h4>
      <div class="grid">
        <label>
          <input
            name="isStartupEnabled"
            type="checkbox"
            role="switch"
            checked={config.isStartupEnabled}
            on:click|preventDefault={toggleStartup}
          />

          Run at startup
        </label>
        <DiscordStatus />
      </div>
    </section>
    <section>
      <h4>🪄 Media-Server Connections</h4>

      {#each config.mediaServers as serverConfig (serverConfig.id)}
        <MediaServer config={serverConfig} />
      {/each}
      <MediaServerNew {hasMediaServers} />
    </section>
    <section>
      <h4>🖼️ Imgur</h4>
      <div class="grid">
        <div>
          <ImgurInfo />
        </div>
        <ImgurClientId clientId={config.imgurClientId} />
      </div>
    </section>
    <div class="grid">
      <section>
        <h4>ℹ️ About</h4>
        <Versions />
      </section>
      <section>
        <h4>🩻 Debug</h4>

        <label>
          <input
            name="isDebugLoggingEnabled"
            type="checkbox"
            role="switch"
            checked={config.isDebugLoggingEnabled}
            on:click|preventDefault={toggleDebugLogging}
          />
          Debug logging
        </label>
      </section>
    </div>
  </div>
{/if}
