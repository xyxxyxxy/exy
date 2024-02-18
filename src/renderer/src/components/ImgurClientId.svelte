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

  function errorReset(): void {
    isInvalid = null
    helperText = ''
  }

  function onInput(): void {
    errorReset()
  }

  function save(): void {
    isBusy = true
    errorReset()
    window.electron.ipcRenderer.send(IpcChannel.SaveImgurClientId, clientId)
  }
  window.electron.ipcRenderer.on(IpcChannel.SaveImgurClientId, (_, error?: Error) => {
    isBusy = false
    isInvalid = !!error
    helperText = error?.message || 'Saved!'
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
      on:input={onInput}
    />
    <small id="helper">{helperText}</small></label
  >
  <button type="submit" on:click={save} aria-busy={isBusy} disabled={isBusy}>Save</button>
</form>
