<script lang="ts">
  import { onMount } from 'svelte'
  import type { MediaServerConfig } from '../../../main/core/stores/config.types'
  import { IpcChannel, type ConnectMediaServerError } from '../../../main/ipc.types'
  import MediaServerError from './MediaServerError.svelte'
  import MediaServerIcon from './MediaServerIcon.svelte'

  export let config: MediaServerConfig

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

  // Run inita
  onMount(test)

  function getRandomSuccessText(): string {
    return textSuccessTextOptions[Math.floor(Math.random() * textSuccessTextOptions.length)]
  }

  function toggleActive(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleMediaServerActive, config.id)
  }

  function disconnect(): void {
    isBusyDisconnecting = true
    window.electron.ipcRenderer.send(IpcChannel.DisconnectMediaServer, config)
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
    window.electron.ipcRenderer.send(IpcChannel.TestMediaServer, config)
  }
  window.electron.ipcRenderer.on(
    IpcChannel.TestMediaServer + config.id,
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
</script>

<details>
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <summary role="button" class="secondary">
    <input
      id={'isActive' + config.id}
      type="checkbox"
      role="switch"
      checked={config.isActive}
      on:click|preventDefault={toggleActive}
      disabled={isBusyDisconnecting || isBusyTesting}
    />
    {config.address}
    {#if !!testError}❗{/if}
  </summary>
  <article>
    <legend>Type</legend>
    <label>
      <input type="radio" disabled checked />
      <MediaServerIcon type={config.type} />
      {config.type === 'emby' ? 'Emby' : 'Jellyfin'}
    </label>
    <div class="grid">
      <label
        >Protocol
        <select bind:value={config.protocol} disabled>
          <option value="http" selected>🔓 HTTP</option>
          <option value="https">🔒 HTTPS</option>
        </select>
      </label>
      <label>Address<input type="text" bind:value={config.address} required disabled /> </label>
      <label>Port<input type="number" min="1" bind:value={config.port} required disabled /> </label>
    </div>
    <div class="grid">
      <label>Username<input type="text" bind:value={config.username} required disabled /> </label>

      <label
        >Password<input type="password" placeholder="Password" value="12345678" disabled />
      </label>
    </div>
    <div class="grid">
      <button
        type="button"
        id="test"
        on:click={testClick}
        disabled={isBusyDisconnecting || isBusyTesting}
      >
        Test Connection
      </button>
    </div>
    <div class="grid" style="text-align: center;">
      {#if !!testError}
        <span style="color: var(--pico-del-color);"><MediaServerError error={testError} /></span>
      {:else if isTested}
        <span style="color: var(--pico-ins-color);" aria-busy={isBusyDisconnecting}
          >{testSuccessText}</span
        >
      {:else}
        <span aria-busy={isBusyTesting}>Testing...</span>
      {/if}
    </div>
    <hr />
    <div class="grid">
      <button
        type="button"
        class="outline secondary"
        on:click={disconnect}
        disabled={isBusyTesting}
        aria-busy={isBusyDisconnecting}>Disconnect</button
      >
      <div></div>
    </div>
    <!-- <footer>TODO list libraries. TODO allow ignored words</footer> -->
  </article>
</details>
