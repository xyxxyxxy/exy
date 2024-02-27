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

    if (newStatus === ConnectionStatus.Disconnected) statusText = `Discord disconnected...`
    else if (newStatus === ConnectionStatus.Connected) statusText = `Discord connected...`
    else if (newStatus === ConnectionStatus.Ready) statusText = `Discord is connected and ready.`
    else statusText = `Unknown Discord status. See logs for details.`
  })

  let testTextOptions = ['test', 'test activity', 'data', 'something', 'some data']
  let testContent: string | null = null
  let testResetTimer

  function getRandomTestText(): string {
    return testTextOptions[Math.floor(Math.random() * testTextOptions.length)]
  }

  function testClick(): void {
    isTesting = true
    testContent = ''
    // Small delay for better experience and to prevent spam.
    setTimeout(test, 500)
  }

  function test(): void {
    if (testResetTimer) clearTimeout(testResetTimer)
    testContent = getRandomTestText()
    window.electron.ipcRenderer.send(IpcChannel.TestDiscordActivity, testContent)
    isTesting = false
    // Reset test state after some time.
    testResetTimer = setTimeout(() => (testContent = null), 10 * 1000)
  }
</script>

<section>
  <!-- TODO Make test UI pretty -->
  <!-- TODO Make icon reflect connection status (grey while not ready) -->
  <img alt="discord-logo" src={discordLogo} style="height: 3rem;" class:greyscale={!isReady} />

  <p>
    <span aria-busy={!isReady} style={statusStyle}>{statusText}</span>
    <br />
    {#if isReady}
      <a class="outline secondary" on:click|preventDefault={testClick}> Send test activity </a>
      <span aria-busy={isTesting}>
        {#if testContent}
          Sent {testContent}.
        {/if}</span
      >
    {/if}
  </p>
</section>

<style>
  section {
    display: flex;
    gap: var(--pico-grid-row-gap);
  }

  img {
    transition: all 0.2s linear;
  }

  .greyscale {
    filter: grayscale(1);
  }
</style>
