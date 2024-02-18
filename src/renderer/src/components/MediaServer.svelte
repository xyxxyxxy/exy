<script lang="ts">
  import type { MediaServerConfig } from '../../../main/core/stores/config.types'
  import MediaServerIcon from './MediaServerIcon.svelte'

  export let config: MediaServerConfig

  function toggleActive(): void {
    // TODO
  }
</script>

<details>
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <summary role="button" class:secondary={!config.isActive} class:outline={!config.isActive}>
    <MediaServerIcon type={config.type} />
    <span class="title">
      {config.protocol}://{config.address}:{config.port} ({config.username})</span
    >
  </summary>
  <article>
    <section>
      <label for="isActive">
        <input
          id="isActive"
          type="checkbox"
          role="switch"
          checked={config.isActive}
          on:click|preventDefault={toggleActive}
        />
        Active
      </label>
    </section>
    <div class="grid">
      <button class="outline secondary">Disconnect</button>
      <button class="secondary">Test Connection</button>
    </div>
  </article>

  TODO list libraries. TODO allow ignored words
</details>

<style>
  .title {
    margin-left: 7px;
  }
</style>
