<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'
  import DiscordStatus from './DiscordStatus.svelte'

  export let config: ConfigStore

  function toggleStartup(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleStartup)
  }
</script>

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
  </div>
  <div>
    <DiscordStatus />
  </div>
</div>
