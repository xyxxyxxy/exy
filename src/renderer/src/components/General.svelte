<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'
  import About from './About.svelte'
  import DiscordStatus from './DiscordStatus.svelte'

  export let config: ConfigStore

  function toggleStartup(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleStartup)
  }
</script>

<div class="grid">
  <div>
    <About />
    <article>
      <label>
        <input
          name="isStartupEnabled"
          type="checkbox"
          role="switch"
          checked={config.isStartupEnabled}
          on:click={toggleStartup}
        />
        Run at startup
      </label>
    </article>
  </div>
  <div>
    <DiscordStatus />
  </div>
</div>
