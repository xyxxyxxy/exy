<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'

  export let config: ConfigStore

  function toggleDebugLogging(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleDebugLogging)
  }

  function openLogFile(): void {
    window.electron.ipcRenderer.send(IpcChannel.OpenLogFile)
  }
</script>

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
  <button type="button" class="outline secondary" on:click={openLogFile}>Open log file</button>
</section>
