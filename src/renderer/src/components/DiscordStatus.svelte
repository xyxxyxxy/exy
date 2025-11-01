<script lang="ts">
  import { ConnectionStatus } from '../../../main/core/discord/types'
  import { IpcChannel } from '../../../main/ipc.types'

  let isReady: boolean = $state()
  let statusText: string = $state()

  let isTesting: boolean = $state()

  const errorStyle = 'color: var(--pico-del-color);'
  const successStyle = 'color: var(--pico-ins-color);'
  let statusStyle: string = $state()

  window.electron.ipcRenderer.send(IpcChannel.DiscordStatus) // Get initial value.
  window.electron.ipcRenderer.on(IpcChannel.DiscordStatus, (_, newStatus: ConnectionStatus) => {
    isReady = newStatus === ConnectionStatus.Ready
    statusStyle = isReady ? successStyle : errorStyle

    if (newStatus === ConnectionStatus.Disconnected) statusText = `Discord disconnected...`
    else if (newStatus === ConnectionStatus.Connected) statusText = `Discord connected...`
    else if (newStatus === ConnectionStatus.Ready) statusText = `Discord connected and ready`
    else statusText = `Discord status unknown. See logs for details`
  })

  let testTextOptions = ['test', 'test activity', 'data', 'something', 'some data']
  let testContent: string | null = $state(null)
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
    ipcRenderer.send(IpcChannel.TestDiscordActivity, testContent)
    isTesting = false
    // Reset test state after some time.
    testResetTimer = setTimeout(() => (testContent = null), 10 * 1000)
  }
</script>

<article>
  <header>
    {#if isReady}🟢{/if} <span aria-busy={!isReady} style={statusStyle}>{statusText}</span>
  </header>
  <button onclick={testClick} disabled={!isReady || isTesting} aria-busy={isTesting}>
    {isTesting
      ? `Sending ${testContent}`
      : testContent
        ? `Sent ${testContent} successfully`
        : 'Send test activity'}
  </button>
</article>

<style>
  button {
    width: 100%;
    margin-bottom: var(--pico-spacing);
  }
</style>
