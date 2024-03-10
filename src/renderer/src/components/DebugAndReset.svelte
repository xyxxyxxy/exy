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
          on:click|preventDefault={toggleDebugLogging}
        />
        Debug logging
      </label>
      <button type="button" class="secondary" on:click={openLogFile}>Open log file</button>
    </article>
  </div>

  <details class="danger">
    <!-- svelte-ignore a11y-no-redundant-roles -->
    <summary role="button" class="outline secondary">⚡Danger Zone</summary>
    <article>
      <button type="button" class="outline secondary" on:click={resetExternalLinks}
        >Reset buttons</button
      >
      <button type="button" class="outline secondary" on:click={clearCache}>Clear cache</button>
      <button type="button" class="outline secondary" on:click={clearConfig}
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
