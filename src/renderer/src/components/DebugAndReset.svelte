<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'

  interface Props {
    config: ConfigStore
  }

  let { config }: Props = $props()

  function toggleDebugLogging(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleDebugLogging)
  }

  function openLogFile(): void {
    window.electron.ipcRenderer.send(IpcChannel.OpenLogFile)
  }

  function resetExternalLinks(): void {
    window.electron.ipcRenderer.send(IpcChannel.ResetExternalLinks)
  }

  function clearCache(): void {
    window.electron.ipcRenderer.send(IpcChannel.ClearCache)
  }

  function clearConfig(): void {
    window.electron.ipcRenderer.send(IpcChannel.ClearConfig)
  }
</script>

<div class="grid">
  <div>
    <article>
      <label>
        <input
          name="isDebugLoggingEnabled"
          type="checkbox"
          role="switch"
          checked={config.isDebugLoggingEnabled}
          onclick={(event) => {
            event.preventDefault()
            toggleDebugLogging()
          }}
        />
        Debug logging
      </label>
      <button type="button" class="secondary" onclick={openLogFile}>Open log file</button>
    </article>
  </div>

  <details class="danger">
    <!-- svelte-ignore a11y_no_redundant_roles -->
    <summary role="button" class="outline secondary">⚡Danger Zone</summary>
    <article>
      <button type="button" class="outline secondary" onclick={resetExternalLinks}
        >Reset buttons</button
      >
      <button type="button" class="outline secondary" onclick={clearCache}>Clear cache</button>
      <button type="button" class="outline secondary" onclick={clearConfig}
        >Clear configuration</button
      >
    </article>
  </details>
</div>

<style>
  article > label {
    margin-bottom: var(--pico-spacing);
  }

  button {
    width: 100%;
  }

  .danger button {
    color: var(--pico-del-color);
  }
</style>
