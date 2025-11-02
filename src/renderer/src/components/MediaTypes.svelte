<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'
  import { ActivityItemType, isActivityItemType } from '../../../main/core/activity/types'
  import { getItemTypeText, ipcRenderer } from '../utils'

  let { config }: { config: ConfigStore } = $props()

  let itemTypes: ActivityItemType[] = $state([])

  const columnItemCount = 4

  $effect.pre(() => {
    // Make sure component is re-rendered on config change (reset).
    render()
  })

  function render(): void {
    itemTypes = Object.keys(ActivityItemType).filter(isActivityItemType)
  }

  function isChecked(value: ActivityItemType): boolean {
    return !config.ignoredTypes.includes(value)
  }

  function toggleIgnored(value: ActivityItemType): void {
    ipcRenderer.send(IpcChannel.ToggleIgnoredMediaType, value)
  }
</script>

<article>
  <header>Ignore media types by disabling them.</header>
  <div class="grid">
    <!-- TypeScript in template us currently not supported.
            Implementing some workarounds, since disabling the rules did not work here.
          See: https://github.com/sveltejs/svelte/issues/4701 -->
    {#each itemTypes.map((_, index) => index) as i}
      {#if !(i % columnItemCount)}
        <div>
          {#each itemTypes.slice(i, i + columnItemCount) as value}
            <label>
              <input
                type="checkbox"
                role="switch"
                checked={isChecked(value)}
                onclick={() => toggleIgnored(value)}
              />
              {getItemTypeText(value)}
            </label>
          {/each}
        </div>
      {/if}
    {/each}
  </div>
</article>
