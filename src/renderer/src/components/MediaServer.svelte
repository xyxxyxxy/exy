<script lang="ts">
  import type { MediaServerConfig } from '../../../main/core/stores/config.types'
  import { IpcChannel, type ConnectMediaServerError } from '../../../main/ipc.types'
  import MediaServerError from './MediaServerError.svelte'
  import MediaServerTypeSelect from './MediaServerTypeSelect.svelte'
  import type { ActivityBase } from '../../../main/core/activity/types'
  import { isIgnoredType } from '../../../main/core/activity/utils'
  import type { IgnoredMediaItemTypes } from '../../../main/core/stores/config.types'

  let {
    server,
    activity,
    ignoredActivityTypes
  }: {
    server: MediaServerConfig
    activity: ActivityBase | null | undefined
    ignoredActivityTypes: IgnoredMediaItemTypes
  } = $props()

  let isBusyDisconnecting = $state(false)

  let isBusyTesting = $state(false)
  let isTested = $state(false)
  let testError: ConnectMediaServerError = $state()
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
  let testSuccessText: string = $state()
  let isIgnored: boolean = $state()

  $effect.pre(() => {
    if (activity) isIgnored = isIgnoredType(activity, ignoredActivityTypes)
  })

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
  <!-- svelte-ignore a11y_no_redundant_roles -->
  <summary role="button" class="secondary">
    <input
      id={'isActive' + server.id}
      type="checkbox"
      role="switch"
      checked={server.isActive}
      onclick={(event) => {
        event.preventDefault()
        toggleActive()
      }}
      disabled={isBusyDisconnecting || isBusyTesting}
    />
    <span class="summary-text">
      <span class="summary-flex">
        {server.address}
        {#if server.isActive && activity}
          {#if isIgnored}
            <span data-tooltip="Media type '{activity.itemType}' is ignored">⤵️</span>
          {:else}
            <span>▶️</span>
          {/if}
          <span class="summary-activity">
            {activity.title}
          </span>
        {/if}
      </span>
    </span>
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
        class="secondary"
        onclick={(event) => {
          event.preventDefault()
          disconnect()
        }}
        disabled={isBusyTesting}
        aria-busy={isBusyDisconnecting}>Disconnect</button
      >
      <button
        type="button"
        id="test"
        onclick={(event) => {
          event.preventDefault()
          testClick()
        }}
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
    </div>
  </article>
</details>

<style>
  summary {
    position: relative;
  }

  .summary-text {
    position: absolute;
    right: 3rem;
    left: 4rem;
  }

  .summary-flex {
    display: flex;
    gap: var(--pico-grid-row-gap);
  }

  .summary-activity {
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
