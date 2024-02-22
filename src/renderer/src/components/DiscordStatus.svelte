<script lang="ts">
  import { IpcChannel } from '../../../main/ipc.types'
  import { ConnectionStatus } from '../../../main/core/discord-client.types'

  let status: string
  let isBusy: boolean
  let style: string

  window.electron.ipcRenderer.send(IpcChannel.DiscordStatus) // Get initial value.
  window.electron.ipcRenderer.on(IpcChannel.DiscordStatus, (_, newStatus: ConnectionStatus) => {
    isBusy = newStatus !== 'ready'
    style = isBusy ? 'color: var(--pico-del-color);' : 'color: var(--pico-ins-color);'

    if (newStatus === ConnectionStatus.Disconnected) status = `Discord disconnected.`
    else if (newStatus === ConnectionStatus.Connected) status = `Discord connected.`
    else if (newStatus === ConnectionStatus.Ready) status = `✅ Discord connected and ready.`
    else status = `Unknown Discord status. See logs for details.`
  })
</script>

<span aria-busy={isBusy} {style}>{status}</span>
