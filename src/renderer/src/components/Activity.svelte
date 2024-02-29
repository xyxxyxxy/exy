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

  function toggleHomepageLinked(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleActivityHomepageLinked)
  }
</script>

<label>
  <input
    name="isMediaServerTypeShown"
    type="checkbox"
    role="switch"
    checked={config.activity.isLogoShown}
    on:click|preventDefault={toggleLogoShown}
  />
  Show logo
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
  Add link to {name} homepage
</label>
