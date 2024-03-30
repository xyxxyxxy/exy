<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'
  import { ActivityItemType } from '../../../main/core/activity/types'
  import { getItemTypeText } from './utils'
  import { beforeUpdate } from 'svelte'

  export let config: ConfigStore

  let itemTypes

  const columnItemCount = 4

  beforeUpdate(() => {
    // Make sure component is re-rendered on config change (reset).
    render()
  })

  function render(): void {
    // Renderer is triggered by variable assignment.
    itemTypes = Object.keys(ActivityItemType)
  }

  function isChecked(value: ActivityItemType): boolean {
    return !config.ignoredTypes.includes(value)
  }

  function toggleIgnored(value: ActivityItemType): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleIgnoredMediaType, value)
  }
</script>

<article>
  <header>Ignore media types by disabling them.</header>
  <div class="grid">
    <!-- TypeScript in template us currently not supported.
            Implementing some workarounds, since disabling the rules did not work here.
          See: https://github.com/sveltejs/svelte/issues/4701 -->
    {#each itemTypes.map((_, index) => index) as i}
      <!-- Create column. -->
      {#if !(i % columnItemCount)}
        <div>
          <!-- Render the items in a column. -->
          {#each itemTypes.slice(i, i + columnItemCount) as value}
            <label>
              <input
                type="checkbox"
                role="switch"
                checked={isChecked(value)}
                on:click={() => toggleIgnored(value)}
              />
              {getItemTypeText(value)}
            </label>
          {/each}
        </div>
      {/if}
    {/each}
  </div>
</article>
