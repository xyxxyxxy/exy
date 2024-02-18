<script lang="ts">
  import type { NewMediaServerConfig } from '../../../main/ipc.types'
  import MediaServerIcon from './MediaServerIcon.svelte'

  // TODO Set to default
  let config: NewMediaServerConfig = {
    type: 'emby',
    protocol: 'http',
    address: 'localhost',
    port: 8096,
    username: '',
    password: ''
  }

  function submit(): void {
    console.log(config)
    // TODO
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
    <fieldset>
      <legend>Type</legend>
      <label for="emby">
        <input type="radio" id="emby" bind:group={config.type} value="emby" checked />
        <MediaServerIcon type="emby" /> Emby
      </label>
      <label for="jellyfin">
        <input type="radio" id="jellyfin" bind:group={config.type} value="jellyfin" />
        <MediaServerIcon type="jellyfin" /> Jellyfin
      </label>
    </fieldset>

    <div class="grid">
      <label for="protocol"
        >Protocol
        <select id="protocol" bind:value={config.protocol} on:change={onProtocolChange}>
          <option value="http" selected>🔓 HTTP</option>
          <option value="https">🔒 HTTPS</option>
        </select>
      </label>
      <label for="address"
        >Address<input type="text" id="address" bind:value={config.address} required />
      </label>
      <label for="port"
        >Port<input type="number" id="port" min="1" bind:value={config.port} required />
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
        />
      </label>
      <label for="password"
        >Password<input
          type="password"
          id="password"
          placeholder="Password"
          bind:value={config.password}
        />
      </label>
    </div>
    <button id="connect-media-server" type="submit">Connect</button>
  </article>
</details>
