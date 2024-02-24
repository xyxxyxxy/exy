<script lang="ts">
  import type { NewMediaServerConfig, ConnectMediaServerError } from '../../../main/ipc.types'
  import { IpcChannel } from '../../../main/ipc.types'
  import MediaServerError from './MediaServerError.svelte'
  import MediaServerTypeSelect from './MediaServerTypeSelect.svelte'

  export let hasMediaServers: boolean
  let open: boolean
  let isBusy = false

  let isInvalidConnection: boolean | null = null
  let isInvalidAuthentication: boolean | null = null

  let config: NewMediaServerConfig
  let connectionError: ConnectMediaServerError

  reset()

  function reset(): void {
    config = getDefault()
  }

  function getDefault(): NewMediaServerConfig {
    return {
      type: 'emby',
      protocol: 'http',
      address: 'localhost',
      port: 8096,
      username: '',
      password: ''
    }
  }

  function resetValidation(): void {
    isInvalidConnection = null
    isInvalidAuthentication = null
  }

  function submit(): void {
    isBusy = true
    resetValidation()
    window.electron.ipcRenderer.send(IpcChannel.ConnectMediaServer, config)
  }
  window.electron.ipcRenderer.on(
    IpcChannel.ConnectMediaServer,
    (_, error?: ConnectMediaServerError) => {
      isBusy = false
      connectionError = error

      // On error.
      if (error) {
        // Default feedback.
        isInvalidConnection = true
        isInvalidAuthentication = true

        // Specify feedback.
        if (['ECONNREFUSED', 'ENOTFOUND', 'ETIMEDOUT'].includes(error.code)) {
          isInvalidAuthentication = null
        }
        if (error.status === 401) {
          isInvalidConnection = null
        }
      } else {
        // Close and reset form on success.
        open = null
        reset()
      }
    }
  )

  function onProtocolChange(): void {
    const defaultPort = config.protocol === 'https' ? 443 : 8096
    const previousDefault = config.protocol === 'https' ? 8096 : 443
    const previousValue = config.port
    // Only update if the port value is empty or was the previous default, so user changes are not reset.
    if (!previousValue || previousValue === previousDefault) {
      config.port = defaultPort
    }
  }
</script>

<details {open}>
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <summary role="button" class="outline">
    ✨ {hasMediaServers ? 'Add connection' : 'Get started by connecting to your media-server'}
  </summary>
  <article>
    <form on:submit|preventDefault={submit}>
      <MediaServerTypeSelect {config} disabled={isBusy}></MediaServerTypeSelect>

      <div class="grid">
        <label
          >Protocol
          <select
            bind:value={config.protocol}
            on:change={onProtocolChange}
            disabled={isBusy}
            on:input={resetValidation}
            aria-invalid={isInvalidConnection}
          >
            <option value="http" selected>🔓 HTTP</option>
            <option value="https">🔒 HTTPS</option>
          </select>
        </label>
        <label
          >Address<input
            type="text"
            placeholder="Address"
            bind:value={config.address}
            required
            disabled={isBusy}
            on:input={resetValidation}
            aria-invalid={isInvalidConnection}
          />
        </label>
        <label
          >Port<input
            type="number"
            placeholder="Port"
            min="1"
            bind:value={config.port}
            required
            disabled={isBusy}
            on:input={resetValidation}
            aria-invalid={isInvalidConnection}
          />
        </label>
      </div>

      <div class="grid">
        <label
          >Username<input
            type="text"
            placeholder="Username"
            bind:value={config.username}
            required
            disabled={isBusy}
            on:input={resetValidation}
            aria-invalid={isInvalidAuthentication}
          />
        </label>
        <label
          >Password<input
            type="password"
            placeholder="Password"
            bind:value={config.password}
            disabled={isBusy}
            on:input={resetValidation}
            aria-invalid={isInvalidAuthentication}
          />
        </label>
      </div>
      <!-- Helper input to display the helper text independent. -->
      <input style="display: none;" aria-invalid={!!connectionError} aria-describedby="helper" />
      <small id="helper"><MediaServerError error={connectionError} /></small>

      <button id="connect-media-server" type="submit" aria-busy={isBusy}>Connect</button>
    </form>
  </article>
</details>
