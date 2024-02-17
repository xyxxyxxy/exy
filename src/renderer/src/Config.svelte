<script lang="ts">
  import Versions from './components/Versions.svelte'
  import type { ConfigStore } from '../../main/core/stores/config.types'
  import { IpcChannel } from '../../main/ipc-channels'

  let config: ConfigStore

  window.electron.ipcRenderer.send(IpcChannel.Config) // Get initial value.
  window.electron.ipcRenderer.on(IpcChannel.Config, (_, newConfig) => (config = newConfig))

  function toggleStartup(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleStartup)
  }

  function toggleDebugLogging(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleDebugLogging)
  }
</script>

{#if config}
  <div class="container">
    <section></section>
    <section>
      <h1>⚙️ Configuration</h1>

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
      <h4>📡 Media-Server Connections</h4>

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
