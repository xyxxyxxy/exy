<script lang="ts">
  import { ConnectionStatus } from '../../../main/core/discord/types'
  import { IpcChannel } from '../../../main/ipc.types'
  import discordLogo from '../assets/discord.svg'

  let isReady: boolean
  let statusText: string

  let isTesting: boolean

  const errorStyle = 'color: var(--pico-del-color);'
  const successStyle = 'color: var(--pico-ins-color);'
  let statusStyle: string

  window.electron.ipcRenderer.send(IpcChannel.DiscordStatus) // Get initial value.
  window.electron.ipcRenderer.on(IpcChannel.DiscordStatus, (_, newStatus: ConnectionStatus) => {
    isReady = newStatus === 'ready'
    statusStyle = isReady ? successStyle : errorStyle

    if (newStatus === ConnectionStatus.Disconnected) statusText = `Disconnected...`
    else if (newStatus === ConnectionStatus.Connected) statusText = `Connected...`
    else if (newStatus === ConnectionStatus.Ready) statusText = `Connected and ready.`
    else statusText = `Unknown status. See logs for details.`
  })

  let testTextOptions = ['test', 'test activity', 'data', 'something', 'some data']
  let testContent: string | null = null
  let testResetTimer

  function getRandomTestText(): string {
    return testTextOptions[Math.floor(Math.random() * testTextOptions.length)]
  }

  function testClick(): void {
    isTesting = true
    testContent = getRandomTestText()
    // Small delay for better experience and to prevent spam.
    setTimeout(test, 500)
  }

  function test(): void {
    if (testResetTimer) clearTimeout(testResetTimer)
    window.electron.ipcRenderer.send(IpcChannel.TestDiscordActivity, testContent)
    isTesting = false
    // Reset test state after some time.
    testResetTimer = setTimeout(() => (testContent = null), 10 * 1000)
  }
</script>

<article>
  <header>
    <img alt="discord-logo" src={discordLogo} style="height: 3rem;" class:greyscale={!isReady} />
  </header>

  <p>
    <span aria-busy={!isReady} style={statusStyle}>{statusText}</span>
  </p>
  <button on:click={testClick} disabled={!isReady || isTesting}> Send test activity </button>
  {#if isTesting || testContent}
    <!-- TODO Move into button -->
    <p>
      <span aria-busy={isTesting}>
        {isTesting ? `Sending ${testContent}` : `Sent ${testContent} successfully`}.
      </span>
    </p>
  {/if}
</article>

<style>
  img {
    transition: all 0.2s linear;
    display: block;
    margin: auto;
  }

  p {
    text-align: center;
  }

  button {
    width: 100%;
    margin-bottom: var(--pico-spacing);
  }

  .greyscale {
    filter: grayscale(1);
  }
</style>
