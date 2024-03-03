<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'
  import { name, homepage } from '../../../../package.json'

  export let config: ConfigStore

  function toggleLogoShown(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleActivityLogoShown)
  }

  function toggleThemeColorUsed(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleActivityThemeColorUsed)
  }

  function toggleHomepageLinked(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleActivityHomepageLinked)
  }
</script>

<section>
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
      name="isHomepageLinked"
      type="checkbox"
      role="switch"
      checked={config.activity.isHomepageLinked}
      on:click|preventDefault={toggleHomepageLinked}
    />
    Add link to
    <span data-tooltip={homepage}>{name} homepage</span>
  </label>
</section>
