<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'
  import DiscordStatus from './DiscordStatus.svelte'
  import { ActivityItemType } from '../../../main/core/activity/types'

  export let config: ConfigStore

  const columnItemCount = 4

  function toggleStartup(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleStartup)
  }

  function toggleIgnored(type: string): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleIgnoredMediaType, type)
  }
</script>

<div class="grid">
  <div>
    <label>
      <input
        name="isStartupEnabled"
        type="checkbox"
        role="switch"
        checked={config.isStartupEnabled}
        on:click={toggleStartup}
      />
      Run at startup
    </label>

    <details>
      <!-- svelte-ignore a11y-no-redundant-roles -->
      <summary role="button" class="secondary">Choose active media types</summary>
      <article>
        <header>You can ignore media types by disabling them.</header>
        <div class="grid">
          <!-- TypeScript in template us currently not supported.
          See: https://github.com/sveltejs/svelte/issues/4701
          See: https://github.com/ccnmtl/3demos/pull/23/commits/54d5f5d5241d31d45aa0cd3b4f546b35b6787666 -->
          <!-- eslint-disable @typescript-eslint/no-unused-vars @typescript-eslint/explicit-function-return-type -->
          {#each Object.keys(ActivityItemType) as row, i}
            <!-- Create column. -->
            {#if !(i % columnItemCount)}
              <div>
                <!-- Render the items in a column. -->
                {#each Object.keys(ActivityItemType).slice(i, i + columnItemCount) as key}
                  <label>
                    <input
                      type="checkbox"
                      role="switch"
                      checked={!config.ignoredTypes.includes(key)}
                      on:click={() => toggleIgnored(key)}
                    />
                    {ActivityItemType[key]}
                  </label>
                {/each}
              </div>
            {/if}
          {/each}
          <!-- eslint-enable -->
        </div>
      </article>
    </details>
  </div>
  <div>
    <DiscordStatus />
  </div>
</div>
