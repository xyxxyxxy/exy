<script lang="ts">
  import Versions from './components/Versions.svelte'
  import type { ConfigStore } from '../../main/core/stores/config.types'
  import { IpcChannel } from '../../main/ipc.types'

  let config: ConfigStore

  let imgurClientId: string
  let isInvalidImgurClientId: boolean | null = null
  let isBusyImgurClientId = false

  window.electron.ipcRenderer.send(IpcChannel.Config) // Get initial value.
  window.electron.ipcRenderer.on(IpcChannel.Config, (_, newConfig) => {
    config = newConfig
    if (config.imgurClientId) {
      imgurClientId = config.imgurClientId
    }
  })

  function toggleStartup(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleStartup)
  }

  function toggleDebugLogging(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleDebugLogging)
  }

  function changeImgurClientId(): void {
    isInvalidImgurClientId = null
  }

  function saveImgurClientId(): void {
    isInvalidImgurClientId = null
    isBusyImgurClientId = true
    window.electron.ipcRenderer.send(IpcChannel.SaveImgurClientId, imgurClientId)

    // TODO Listen for reply.
    // TODO Reset on invalid.
  }
</script>

{#if config}
  <div class="container">
    <section></section>
    <section>
      <h1>⚙️ Configuration</h1>

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
      <h4>📡 Media-Server Connections</h4>
      <h4>🖼️ Imgur</h4>
      <p>TODO</p>
      <form role="group">
        <input
          type="text"
          name="imgurClientId"
          placeholder="Imgur Client ID"
          bind:value={imgurClientId}
          disabled={isBusyImgurClientId}
          aria-invalid={isInvalidImgurClientId}
          on:change={changeImgurClientId}
        />
        <button
          type="submit"
          on:click={saveImgurClientId}
          aria-busy={isBusyImgurClientId}
          disabled={isBusyImgurClientId}>Save</button
        >
      </form>

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
    </section>

    <Versions />
  </div>
{/if}
