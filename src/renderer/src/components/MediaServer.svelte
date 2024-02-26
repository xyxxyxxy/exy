<script lang="ts">
  import type { MediaServerConfig } from '../../../main/core/stores/config.types'
  import { IpcChannel, type ConnectMediaServerError } from '../../../main/ipc.types'
  import MediaServerError from './MediaServerError.svelte'
  import MediaServerTypeSelect from './MediaServerTypeSelect.svelte'
  import type { ActivityBase } from '../../../main/core/activity/types'

  export let server: MediaServerConfig
  export let activity: ActivityBase | null | undefined

  let isBusyDisconnecting = false

  let isBusyTesting = false
  let isTested = false
  let testError: ConnectMediaServerError
  let textSuccessTextOptions = [
    'Success!',
    'Working!',
    'Works!',
    'Functioning!',
    'Looking good!',
    'Everything fine!',
    'Connected and ready!',
    'Test passed!',
    'Test successful!',
    'All systems operational!'
  ]
  let testSuccessText: string

  function getRandomSuccessText(): string {
    return textSuccessTextOptions[Math.floor(Math.random() * textSuccessTextOptions.length)]
  }

  function toggleActive(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleMediaServerActive, server.id)
  }

  function testClick(): void {
    resetTest()
    isBusyTesting = true
    // Small delay for better experience and to prevent spam.
    setTimeout(test, 500)
  }

  function test(): void {
    resetTest()
    isBusyTesting = true
    window.electron.ipcRenderer.send(IpcChannel.TestMediaServer, server)
  }
  window.electron.ipcRenderer.on(
    IpcChannel.TestMediaServer + server.id,
    (_, error: ConnectMediaServerError) => {
      isBusyTesting = false
      isTested = true
      testSuccessText = getRandomSuccessText()
      testError = error
    }
  )

  function resetTest(): void {
    isTested = false
    testError = null
  }

  function disconnect(): void {
    isBusyDisconnecting = true
    window.electron.ipcRenderer.send(IpcChannel.DisconnectMediaServer, server)
  }
</script>

<details>
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <summary role="button" class="secondary">
    <input
      id={'isActive' + server.id}
      type="checkbox"
      role="switch"
      checked={server.isActive}
      on:click|preventDefault={toggleActive}
      disabled={isBusyDisconnecting || isBusyTesting}
    />
    {server.address}
    {#if server.isActive && !testError && activity}▶️ ${activity.title}{/if}
    {#if !!testError}❗{/if}
  </summary>
  <article>
    <MediaServerTypeSelect config={server} disabled></MediaServerTypeSelect>
    <div class="grid">
      <label
        >Protocol
        <select bind:value={server.protocol} disabled>
          <option value="http" selected>🔓 HTTP</option>
          <option value="https">🔒 HTTPS</option>
        </select>
      </label>
      <label>Address<input type="text" bind:value={server.address} required disabled /> </label>
      <label>Port<input type="number" min="1" bind:value={server.port} required disabled /> </label>
    </div>
    <div class="grid">
      <label>Username<input type="text" bind:value={server.username} required disabled /> </label>

      <label
        >Password<input type="password" placeholder="Password" value="12345678" disabled />
      </label>
    </div>
    <div class="grid">
      <button
        type="button"
        class="outline secondary"
        on:click={disconnect}
        disabled={isBusyTesting}
        aria-busy={isBusyDisconnecting}>Disconnect</button
      >
      <button
        type="button"
        id="test"
        on:click={testClick}
        disabled={isBusyDisconnecting || isBusyTesting}
      >
        Test Connection
      </button>
    </div>
    <div style="text-align: center;">
      {#if !!testError}
        <span style="color: var(--pico-del-color);"><MediaServerError error={testError} /></span>
      {:else if isTested}
        <span style="color: var(--pico-ins-color);" aria-busy={isBusyDisconnecting}
          >{testSuccessText}</span
        >
      {:else if isBusyTesting}
        <span aria-busy="true">Testing...</span>
      {/if}
      <!-- <footer>TODO list libraries. TODO allow ignored words</footer> -->
    </div>
  </article>
</details>

<style>
  summary {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
