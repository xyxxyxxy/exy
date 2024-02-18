<script lang="ts">
  import type { MediaServerConfig } from '../../../main/core/stores/config.types'
  import MediaServerIcon from './MediaServerIcon.svelte'

  export let serverConfig: MediaServerConfig

  function toggleActive(): void {
    // TODO
  }
</script>

<details>
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <summary role="button">
    <!-- TODO open automatically if there are no servers configured -->
    <MediaServerIcon type={serverConfig.type} />
    <span class="title">
      {serverConfig.protocol}://{serverConfig.address}:{serverConfig.port} ({serverConfig.username})</span
    >
  </summary>
  <!-- TODO Put into card -->
  <section>
    <label for="isActive">
      <input
        id="isActive"
        type="checkbox"
        role="switch"
        checked={serverConfig.isActive}
        on:click|preventDefault={toggleActive}
      />
      Active
    </label>
    <div class="grid">
      <button class="outline secondary">Disconnect</button>
      <button class="secondary">Test Connection</button>
    </div>
  </section>

  TODO list libraries. TODO allow ignored words
</details>

<style>
  .title {
    margin-left: 7px;
  }
</style>
