<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'
  import About from './About.svelte'
  import DiscordStatus from './DiscordStatus.svelte'
  import { name } from '../../../../package.json'

  export let config: ConfigStore

  function toggleStartup(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleStartup)
  }
</script>

<div class="grid">
  <div>
    <About />
  </div>
  <div>
    <DiscordStatus />
    <article>
      <label>
        <input
          name="isStartupEnabled"
          type="checkbox"
          role="switch"
          checked={config.isStartupEnabled}
          on:click={toggleStartup}
        />
        Run {name} at startup
      </label>
    </article>
  </div>
</div>
