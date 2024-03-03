<script lang="ts">
  import { IpcChannel } from '../../../main/ipc.types'

  export let clientId: string

  let isBusy = false
  let isInvalid: boolean | null = null
  let helperText: string = ''

  function resetValidation(): void {
    isInvalid = null
    helperText = ''
  }

  function save(): void {
    isBusy = true
    resetValidation()
    window.electron.ipcRenderer.send(IpcChannel.SaveImgurClientId, clientId)
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
        placeholder="none"
        bind:value={clientId}
        disabled={isBusy}
        aria-invalid={isInvalid}
        aria-describedby="helper"
        on:input={resetValidation}
      />
      <small id="helper">{helperText}</small></label
    >
    <button type="submit" on:click={save} aria-busy={isBusy} disabled={isBusy}>Save</button>
  </form>
</article>
