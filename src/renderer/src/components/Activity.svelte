<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'
  import { name } from '../../../../package.json'

  interface Props {
    config: ConfigStore
  }

  let { config }: Props = $props()

  function toggleIsPlayStateShown(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleIsPlayStateShown)
  }

  function toggleIsLogoUsed(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleIsLogoUsed)
  }

  function toggleIsThemeUsed(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleIsThemeUsed)
  }
</script>

<article>
  <header>Customize look & feel.</header>

  <label>
    <input
      type="checkbox"
      role="switch"
      checked={config.isPlayStateShown}
      onclick={toggleIsPlayStateShown}
    />
    Show <em data-tooltip="Time remaining and pause state">play state</em>
  </label>

  <label>
    <input type="checkbox" role="switch" checked={config.isThemeUsed} onclick={toggleIsThemeUsed} />
    Use <em data-tooltip="Emby or Jellyfin accent colors depending on media source">theme color</em>
    for icons
  </label>

  <label>
    <input type="checkbox" role="switch" checked={config.isLogoUsed} onclick={toggleIsLogoUsed} />
    Use
    <em data-tooltip="Emby, Jellyfin or {name} logo depending on theme color setting">logo</em> instead
    of play icon
  </label>
</article>
