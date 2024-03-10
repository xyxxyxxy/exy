<script lang="ts">
  import ImgurInfo from './components/Imgur.svelte'
  import type { ConfigStore } from '../../main/core/stores/config.types'
  import type { MediaServerActivityMapping } from '../../main/core/media-server/types'
  import { IpcChannel } from '../../main/ipc.types'
  import MediaServer from './components/MediaServer.svelte'
  import MediaServerNew from './components/MediaServerNew.svelte'
  import Activity from './components/Activity.svelte'
  import General from './components/General.svelte'
  import DebugAndReset from './components/DebugAndReset.svelte'
  import ActivityButtons from './components/ActivityButtons.svelte'
  import MediaTypes from './components/MediaTypes.svelte'

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
    <General {config} />
    <hgroup>
      <h2>Connections 🔮</h2>
      <p>Connect to your media-servers.</p>
    </hgroup>

    {#each config.mediaServers as server (server.id)}
      <MediaServer
        {server}
        activity={activities[server.id]}
        ignoredActivityTypes={config.ignoredTypes}
      />
    {/each}
    <MediaServerNew {hasMediaServers} />

    <hgroup>
      <h2>Activity 🪄</h2>
      <p>Customize how the activity is generated.</p>
    </hgroup>
    <div class="grid">
      <div>
        <MediaTypes {config} />
      </div>
      <div>
        <Activity {config} />
      </div>
    </div>

    <hgroup>
      <h3>Buttons 🎇</h3>
      <p>Customize the buttons on the activity.</p>
    </hgroup>
    <ActivityButtons {config} />

    <hgroup>
      <h3>Imgur 🌠</h3>
      <p>Making images publicly available while keeping media-servers private.</p>
    </hgroup>
    <ImgurInfo {config} />

    <hgroup>
      <h2>Debug & Reset 🩻</h2>
      <p>Advanced troubleshooting and reset options.</p>
    </hgroup>
    <DebugAndReset {config} />
  </div>
{/if}
