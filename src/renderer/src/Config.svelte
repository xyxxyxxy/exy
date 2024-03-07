<script lang="ts">
  import ImgurInfo from './components/Imgur.svelte'
  import type { ConfigStore } from '../../main/core/stores/config.types'
  import type { MediaServerActivityMapping } from '../../main/core/media-server/types'
  import { IpcChannel } from '../../main/ipc.types'
  import MediaServer from './components/MediaServer.svelte'
  import MediaServerNew from './components/MediaServerNew.svelte'
  import About from './components/About.svelte'
  import { name } from '../../../package.json'
  import Activity from './components/Activity.svelte'
  import General from './components/General.svelte'
  import DebugAndReset from './components/DebugAndReset.svelte'
  import ActivityButtons from './components/ActivityButtons.svelte'

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
        ignoredActivityTypes={config.ignoredTypes}
      />
    {/each}
    <MediaServerNew {hasMediaServers} />

    <div class="grid">
      <div>
        <hgroup>
          <h1>Imgur 🌠</h1>
          <p>Making images publicly available while keeping server addresses private.</p>
        </hgroup>
        <ImgurInfo {config} />
      </div>
      <div>
        <hgroup>
          <h1>Activity 🎇</h1>
          <p>Customize how the activity is generated.</p>
        </hgroup>
        <Activity {config} />
      </div>
    </div>
    <hgroup>
      <h2>Activity Buttons 🎆</h2>
      <p>Customize the buttons on the activity.</p>
    </hgroup>
    <ActivityButtons {config} />
    <div class="grid">
      <About />
      <div>
        <hgroup>
          <h3>Debug & Reset 🩻</h3>
          <p>Advanced troubleshooting and reset options.</p>
        </hgroup>
        <DebugAndReset {config} />
      </div>
    </div>
  </div>
{/if}
