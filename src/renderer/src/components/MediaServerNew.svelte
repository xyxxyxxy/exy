<script lang="ts">
  import type { NewMediaServerConfig, ConnectionErrorInfo } from '../../../main/ipc.types'
  import MediaServerIcon from './MediaServerIcon.svelte'
  import { IpcChannel } from '../../../main/ipc.types'

  export let open
  let isBusy = false

  let isInvalidConnection: boolean | null = null
  let isInvalidAuthentication: boolean | null = null

  let helperText = ''

  let config: NewMediaServerConfig = {
    type: 'emby',
    protocol: 'http',
    address: 'localhost',
    port: 8096,
    username: '',
    password: ''
  }

  function resetValidation(): void {
    isInvalidConnection = null
    isInvalidAuthentication = null
    helperText = ''
  }

  function submit(): void {
    isBusy = true
    resetValidation()
    window.electron.ipcRenderer.send(IpcChannel.ConnectMediaServer, config)
  }
  window.electron.ipcRenderer.on(IpcChannel.ConnectMediaServer, (_, error: ConnectionErrorInfo) => {
    isBusy = false
    if (error) {
      console.log(error)

      // Default feedback.
      isInvalidConnection = true
      isInvalidAuthentication = true
      helperText = error.message

      // Specify feedback.
      if (['ECONNREFUSED', 'ENOTFOUND', 'ETIMEDOUT'].includes(error.code)) {
        isInvalidAuthentication = null

        // Provide some friendlier error messages.
        if (error.code === 'ENOTFOUND') helperText = 'Unable to connect. Address not found.'
        if (error.code === 'ECONNREFUSED') helperText = 'Unable to connect. Connection refused.'
        if (error.code === 'ETIMEDOUT') helperText = 'Unable to connect. Timeout.'
      }
      if (error.status === 401) {
        isInvalidConnection = null
      }
    } else open = false
    // TODO make sure new added server is opened
  })

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
    <!-- TODO open automatically if there are no servers configured -->
    ✨ New
  </summary>
  <article>
    <form on:submit|preventDefault={submit}>
      <legend>Type</legend>
      <label for="emby">
        <input
          type="radio"
          id="emby"
          bind:group={config.type}
          value="emby"
          disabled={isBusy}
          on:input={resetValidation}
          checked
        />
        <MediaServerIcon type="emby" /> Emby
      </label>
      <label for="jellyfin">
        <input
          type="radio"
          id="jellyfin"
          bind:group={config.type}
          value="jellyfin"
          disabled={isBusy}
          on:input={resetValidation}
        />
        <MediaServerIcon type="jellyfin" /> Jellyfin
      </label>

      <div class="grid">
        <label for="protocol"
          >Protocol
          <select
            id="protocol"
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
        <label for="address"
          >Address<input
            type="text"
            id="address"
            bind:value={config.address}
            required
            disabled={isBusy}
            on:input={resetValidation}
            aria-invalid={isInvalidConnection}
          />
        </label>
        <label for="port"
          >Port<input
            type="number"
            id="port"
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
        <label for="username"
          >Username<input
            type="text"
            id="username"
            placeholder="Username"
            bind:value={config.username}
            required
            disabled={isBusy}
            on:input={resetValidation}
            aria-invalid={isInvalidAuthentication}
          />
        </label>
        <label for="password"
          >Password<input
            type="password"
            id="password"
            placeholder="Password"
            bind:value={config.password}
            disabled={isBusy}
            on:input={resetValidation}
            aria-invalid={isInvalidAuthentication}
          />
        </label>
      </div>

      <!-- Helper input to display the helper text independent of the inputs above. -->
      <input
        style="display: none;"
        aria-invalid={isInvalidConnection || isInvalidAuthentication}
        aria-describedby="helper"
      />
      <small id="helper">{helperText}</small>

      <button id="connect-media-server" type="submit" aria-busy={isBusy}>Connect</button>
    </form>
  </article>
</details>
