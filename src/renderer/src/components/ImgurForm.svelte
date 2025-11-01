<script lang="ts">
  import { IpcChannel } from '../../../main/ipc.types'

  interface Props {
    clientId: string
  }

  let { clientId = $bindable() }: Props = $props()
  let isBusy = $state(false)
  let isInvalid: boolean | null = $state(null)
  let helperText: string = $state('')

  function resetValidation(): void {
    isInvalid = null
    helperText = ''
  }

  function save(): void {
    isBusy = true
    resetValidation()
    window.electron.ipcRenderer.send(IpcChannel.SaveImgurClientId, clientId?.trim())
  }
  window.electron.ipcRenderer.on(IpcChannel.SaveImgurClientId, (_, error?: Error) => {
    isBusy = false
    isInvalid = !!error
    if (error) {
      console.error(error)
      helperText = error.message
    }
  })
</script>

<article>
  <form>
    <label for="clientId">
      Client ID
      <input
        type="text"
        id="clientId"
        placeholder="ID"
        bind:value={clientId}
        disabled={isBusy}
        aria-invalid={isInvalid}
        aria-describedby="helper"
        oninput={resetValidation}
      />
      <small id="helper">{helperText}</small></label
    >
    <button type="submit" onclick={save} aria-busy={isBusy} disabled={isBusy}>Save</button>
  </form>
</article>
