<script lang="ts">
  import type { MediaServerConfig } from '../../../main/core/stores/config.types'
  import { IpcChannel, type ConnectMediaServerError } from '../../../main/ipc.types'
  import MediaServerIcon from './MediaServerIcon.svelte'

  export let config: MediaServerConfig
  let isBusy = false

  function toggleActive(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleMediaServerActive, config.id)
  }

  function disconnect(): void {
    isBusy = true
    window.electron.ipcRenderer.send(IpcChannel.DisconnectMediaServer, config)
  }

  function test(): void {
    // TODO Automatically test all on config open?
    isBusy = true
    window.electron.ipcRenderer.send(IpcChannel.TestMediaServer, config)
  }
  window.electron.ipcRenderer.on(
    IpcChannel.TestMediaServer,
    (_, error: ConnectMediaServerError) => {
      console.log(error)
      // TODO
    }
  )
</script>

<details>
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <summary role="button" class:secondary={!config.isActive} class:outline={!config.isActive}>
    <MediaServerIcon type={config.type} />
    <span class="title">
      {config.protocol}://{config.address}:{config.port} ({config.username})</span
    >
  </summary>
  <article>
    <section>
      <label for="isActive">
        <input
          id="isActive"
          type="checkbox"
          role="switch"
          checked={config.isActive}
          on:click|preventDefault={toggleActive}
          disabled={isBusy}
        />
        Active
      </label>
    </section>
    <div class="grid">
      <button class="outline secondary" on:click={disconnect} aria-busy={isBusy}>Disconnect</button>
      <button class="secondary" on:click={test} aria-busy={isBusy}>Test Connection</button>
    </div>
  </article>

  TODO list libraries. TODO allow ignored words
</details>

<style>
  .title {
    margin-left: 7px;
  }
</style>
