<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'

  export let config: ConfigStore

  function toggleLogoShown(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleActivityLogoShown)
  }

  function toggleThemeColorUsed(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleActivityThemeColorUsed)
  }
</script>

<article>
  <header>Style</header>
  <label>
    <input
      name="isMediaServerTypeShown"
      type="checkbox"
      role="switch"
      checked={config.activity.isLogoShown}
      on:click|preventDefault={toggleLogoShown}
    />
    Show logo
    <span data-tooltip="Music will always show a vinyl icon if genres are available">ℹ️</span>
  </label>

  <label>
    <input
      name="isMediaServerTypeShown"
      type="checkbox"
      role="switch"
      checked={config.activity.isThemeColorUsed}
      on:click|preventDefault={toggleThemeColorUsed}
      disabled={config.activity.isLogoShown}
    />
    Use server themed colors
  </label>

  <label>
    <input
      name="isMediaServerTypeShown"
      type="checkbox"
      role="switch"
      checked={config.activity.isThemeColorUsed}
      on:click|preventDefault={toggleThemeColorUsed}
      disabled={config.activity.isLogoShown}
    />
    <!-- TODO Move avtivity config one level up? -->
    TODO Show remaining time
  </label>
</article>
