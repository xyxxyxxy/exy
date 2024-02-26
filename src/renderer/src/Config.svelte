<script lang="ts">
  import ImgurInfo from './components/ImgurInfo.svelte'
  import ImgurClientId from './components/ImgurClientId.svelte'
  import type { ConfigStore } from '../../main/core/stores/config.types'
  import type { MediaServerActivityMapping } from '../../main/core/media-server/types'
  import { IpcChannel } from '../../main/ipc.types'
  import MediaServer from './components/MediaServer.svelte'
  import MediaServerNew from './components/MediaServerNew.svelte'
  import DiscordStatus from './components/DiscordStatus.svelte'
  import About from './components/About.svelte'
  import { name } from '../../../package.json'

  let config: ConfigStore
  let hasMediaServers: boolean
  let activities: MediaServerActivityMapping = {}

  window.electron.ipcRenderer.send(IpcChannel.Config) // Get initial value.
  window.electron.ipcRenderer.on(IpcChannel.Config, (_, newConfig) => {
    config = newConfig
    hasMediaServers = !!newConfig.mediaServers.length
  })

  window.electron.ipcRenderer.send(IpcChannel.MediaServerActivities) // Get initial value.
  window.electron.ipcRenderer.on(IpcChannel.MediaServerActivities, (_, newActivities) => {
    console.log(newActivities)
    activities = newActivities
  })

  function toggleStartup(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleStartup)
  }

  function toggleMediaServerTypeShown(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleIsMediaServerTypeShown)
  }

  function toggleHomepageLinked(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleIsHomepageLinked)
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
    <section></section>
    <section>
      <hgroup>
        <h1>General 🔮</h1>
        <p>Settings to modify the behavior of {name}.</p>
      </hgroup>
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
          <hgroup>
            <h4>Activity</h4>
            <p>Play something and watch the Discord activity change.</p>
          </hgroup>
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
          <label>
            <input
              name="isHomepageLinked"
              type="checkbox"
              role="switch"
              checked={config.isHomepageLinked}
              on:click|preventDefault={toggleHomepageLinked}
            />
            Add link to {name} homepage
          </label>
        </div>
        <DiscordStatus />
      </div>
    </section>
    <section>
      <hgroup>
        <h1>Connections 🪄</h1>
        <p>Connect to one or multiple media-servers of your choice.</p>
      </hgroup>

      {#each config.mediaServers as server (server.id)}
        <MediaServer {server} activity={activities[server.id]} />
      {/each}
      <MediaServerNew {hasMediaServers} />
    </section>
    <section>
      <hgroup>
        <h1>Imgur 🌠</h1>
        <p>Making images publicly available while keeping server addresses private.</p>
      </hgroup>
      <div class="grid">
        <div>
          <ImgurInfo />
        </div>
        <ImgurClientId clientId={config.imgurClientId} />
      </div>
    </section>
    <div class="grid">
      <section>
        <About />
      </section>
      <section>
        <hgroup>
          <h3>Debug 🩻</h3>
          <p>Options for advanced troubleshooting.</p>
        </hgroup>
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
