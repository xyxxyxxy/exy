<script lang="ts" context="module">
  import type { ConfigStore } from '../../../main/core/stores/config.types'

  let config: ConfigStore
  let clientId: string

  export function configUpdate(newConfig: ConfigStore): void {
    config = newConfig
    if (!clientId && config.imgurClientId) {
      clientId = config.imgurClientId
    }
  }
</script>

<script lang="ts">
  import { IpcChannel } from '../../../main/ipc.types'

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
    if (error) {
      console.error(error)
      isInvalid = true
      helperText = error.message
    }
  })
</script>

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
