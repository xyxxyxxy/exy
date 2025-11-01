<script lang="ts">
  import type { NewMediaServerConfig } from '../../../main/ipc.types'
  import type { MediaServerConfig } from '../../../main/core/stores/config.types'

  import embyLogo from '../assets/emby.svg'
  import jellyfinLogo from '../assets/jellyfin.svg'

  interface Props {
    config: NewMediaServerConfig | MediaServerConfig;
    disabled: boolean;
  }

  let { config = $bindable(), disabled }: Props = $props();
</script>

<div class="flex">
  <img alt="{config.type}-logo" src={config.type === 'emby' ? embyLogo : jellyfinLogo} />
  <select bind:value={config.type} {disabled}>
    {#each ['emby', 'jellyfin'] as type}
      <option value={type}>
        {type === 'emby' ? 'Emby' : 'Jellyfin'}
      </option>
    {/each}
  </select>
</div>

<style>
  .flex {
    display: flex;
    gap: var(--pico-grid-row-gap);
  }

  img {
    height: 3rem;
  }
</style>
