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
    'Functioning!',
    'Looking good!',
    'Connected and ready!'
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
      console.log(error)
      testError = error
      // TODO
    }
  )

  function resetTest(): void {
    isTested = false
    testError = null
  }
</script>

<details>
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <summary role="button" class:secondary={!config.isActive}>
    <MediaServerIcon type={config.type} />
    <span class="title">
      {config.protocol}://{config.address}:{config.port} ({config.username})</span
    >
    {#if !!testError}❗{/if}
  </summary>
  <article>
    <section>
      <label for={'isActive' + config.id}>
        <input
          id={'isActive' + config.id}
          type="checkbox"
          role="switch"
          checked={config.isActive}
          on:click|preventDefault={toggleActive}
          disabled={isBusyDisconnecting || isBusyTesting}
        />
        Active
      </label>
    </section>
    <div class="grid">
      <button
        type="button"
        class="secondary"
        on:click={testClick}
        disabled={isBusyDisconnecting || isBusyTesting}>Test Connection</button
      >

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

<style>
  .title {
    margin-left: 7px;
  }
</style>
