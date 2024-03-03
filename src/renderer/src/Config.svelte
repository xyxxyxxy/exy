<script lang="ts">
  import ImgurInfo from './components/ImgurInfo.svelte'
  import ImgurClientId from './components/ImgurClientId.svelte'
  import type { ConfigStore } from '../../main/core/stores/config.types'
  import type { MediaServerActivityMapping } from '../../main/core/media-server/types'
  import { IpcChannel } from '../../main/ipc.types'
  import MediaServer from './components/MediaServer.svelte'
  import MediaServerNew from './components/MediaServerNew.svelte'
  import About from './components/About.svelte'
  import { name } from '../../../package.json'
  import Activity from './components/Activity.svelte'
  import General from './components/General.svelte'
  import Debug from './components/Debug.svelte'

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
    activities = newActivities
  })
</script>

{#if config}
  <div class="container">
    <hgroup>
      <h1>General 🔮</h1>
      <p>Settings to modify the behavior of {name}.</p>
    </hgroup>
    <General {config} />
    <hgroup>
      <h1>Connections 🪄</h1>
      <p>Connect to one or multiple media-servers of your choice.</p>
    </hgroup>

    {#each config.mediaServers as server (server.id)}
      <MediaServer
        {server}
        activity={activities[server.id]}
        ignoredActivityTypes={config.ignoredItemTypes}
      />
    {/each}
    <MediaServerNew {hasMediaServers} />

    <div class="grid">
      <div>
        <hgroup>
          <h1>Imgur 🌠</h1>
          <p>Making images publicly available while keeping server addresses private.</p>
        </hgroup>
        <ImgurInfo />
        <ImgurClientId clientId={config.imgurClientId} />
      </div>
      <div>
        <hgroup>
          <h1>Activity 🎇</h1>
          <p>Customize how the activity is generated.</p>
        </hgroup>
        <Activity {config} />
      </div>
    </div>
    <div class="grid">
      <About />
      <div>
        <hgroup>
          <h3>Debug 🩻</h3>
          <p>Options for advanced troubleshooting.</p>
        </hgroup>
        <Debug {config} />
      </div>
    </div>
  </div>
{/if}
