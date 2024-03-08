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
      checked={config.isThemeColorUsed}
      on:click|preventDefault={toggleThemeColorUsed}
      disabled={config.isLogoShown}
    />
    TODO Show time remaining
  </label>

  <label>
    <input
      name="isMediaServerTypeShown"
      type="checkbox"
      role="switch"
      checked={config.isThemeColorUsed}
      on:click|preventDefault={toggleThemeColorUsed}
      disabled={config.isLogoShown}
    />
    TODO Show pause state
  </label>

  <label>
    <input
      name="isMediaServerTypeShown"
      type="checkbox"
      role="switch"
      checked={config.isLogoShown}
      on:click|preventDefault={toggleLogoShown}
    />
    Use media-server logo as play icon
  </label>

  <label>
    <input
      name="isMediaServerTypeShown"
      type="checkbox"
      role="switch"
      checked={config.isThemeColorUsed}
      on:click|preventDefault={toggleThemeColorUsed}
      disabled={config.isLogoShown}
    />
    Use media-server accent color icons
  </label>
</article>
