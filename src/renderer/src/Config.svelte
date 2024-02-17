<script lang="ts">
  import Versions from './components/Versions.svelte'
  import type { ConfigStore } from '../../main/core/stores/config.types'
  import { IpcChannel } from '../../main/ipc'

  let config: ConfigStore

  window.electron.ipcRenderer.send(IpcChannel.Config) // Get initial value.
  window.electron.ipcRenderer.on(IpcChannel.Config, (_, newConfig) => (config = newConfig))

  function toggleDebugLogging(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleDebugLogging)
  }
</script>

{#if config}
  <div class="container">
    <section></section>
    <section>
      <h1>Config</h1>
      <h4>📡 <span class="media-server-connections">Media-Server Connections</span></h4>

      <label>
        <input
          name="isDebugLoggingEnabled"
          type="checkbox"
          role="switch"
          checked={config.isDebugLoggingEnabled}
          on:click|preventDefault={toggleDebugLogging}
        />
        Autostart
      </label>

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
{/if}

<Versions />
