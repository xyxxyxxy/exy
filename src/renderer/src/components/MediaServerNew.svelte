<script lang="ts">
  import type { NewMediaServerConfig } from '../../../main/ipc.types'
  import MediaServerIcon from './MediaServerIcon.svelte'

  let isBusy = false

  let isInvalidConnection: boolean | null = null
  let isInvalidAuthentication: boolean | null = null

  let connectionHelperText = ''
  let authenticationHelperText = ''

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
    connectionHelperText = ''
    authenticationHelperText = ''
  }

  function submit(): void {
    isBusy = true
    resetValidation()
    console.log(config)
    // TODO Remove invalid state on input.
    // TODO submit
  }

  // TODO
  // Compare identifying properties of a media-server.
  // function isSameConnection(
  //   a: MediaServerConnectionIdentifiers,
  //   b: MediaServerConnectionIdentifiers
  // ): boolean {
  //   return a.address === b.address && a.port === b.port && a.username === b.username
  // }

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

<details>
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

      <!-- Helper input to display the helper text independent of the inputs above. -->
      <input
        style="display: none;"
        aria-invalid={isInvalidConnection}
        aria-describedby="connection-helper"
      />
      <small id="connection-helper">{connectionHelperText}</small>

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
        aria-invalid={isInvalidAuthentication}
        aria-describedby="authentication-helper"
      />
      <small id="authentication-helper">{authenticationHelperText}</small>

      <button id="connect-media-server" type="submit">Connect</button>
    </form>
  </article>
</details>
