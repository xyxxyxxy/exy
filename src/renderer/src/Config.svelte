<script lang="ts">
  import ImgurInfo from './components/ImgurInfo.svelte'
  import ImgurClientId from './components/ImgurClientId.svelte'
  import type { ConfigStore } from '../../main/core/stores/config.types'
  import { IpcChannel } from '../../main/ipc.types'
  import MediaServer from './components/MediaServer.svelte'
  import MediaServerNew from './components/MediaServerNew.svelte'
  import DiscordStatus from './components/DiscordStatus.svelte'
  import { version } from '../../../package.json'

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

  function toggleMediaServerTypeShown(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleIsMediaServerTypeShown)
  }

  function toggleDebugLogging(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleDebugLogging)
  }

  function openLogFile(): void {
    window.electron.ipcRenderer.send(IpcChannel.OpenLogFile)
  }
</script>

{#if config}
  <div class="container">
    <section>
      <h4>⚙️ General</h4>
      <div class="grid">
        <div>
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
          <label>
            <input
              name="isMediaServerTypeShown"
              type="checkbox"
              role="switch"
              checked={config.isMediaServerTypeShown}
              on:click|preventDefault={toggleMediaServerTypeShown}
            />
            Show media-server type
          </label>
        </div>
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
        exy v{version}
      </section>
      <section>
        <h4>🩻 Debug</h4>
        <section>
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
        <section>
          <button type="button" class="outline secondary" on:click={openLogFile}
            >Open log file</button
          >
        </section>
      </section>
    </div>
  </div>
{/if}
