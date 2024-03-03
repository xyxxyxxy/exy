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

  function isIgnoredKey(key: string): boolean {
    return config.ignoredTypes.includes(key as ActivityItemType)
  }

  function toggleIgnored(type: string): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleIgnoredMediaType, type)
  }
</script>

<div class="grid">
  <div>
    <article>
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
    </article>

    <details>
      <!-- svelte-ignore a11y-no-redundant-roles -->
      <summary role="button" class="secondary">Choose active media types</summary>
      <article>
        <header>You can ignore media types by disabling them.</header>
        <div class="grid">
          <!-- TypeScript in template us currently not supported.
            Implementing some workarounds, since disabling the rules did not work here.
          See: https://github.com/sveltejs/svelte/issues/4701 -->
          {#each Object.keys(ActivityItemType).map((_, index) => index) as i}
            <!-- Create column. -->
            {#if !(i % columnItemCount)}
              <div>
                <!-- Render the items in a column. -->
                {#each Object.keys(ActivityItemType).slice(i, i + columnItemCount) as key}
                  <label>
                    <input
                      type="checkbox"
                      role="switch"
                      checked={!isIgnoredKey}
                      on:click={() => toggleIgnored(key)}
                    />
                    {ActivityItemType[key]}
                  </label>
                {/each}
              </div>
            {/if}
          {/each}
        </div>
      </article>
    </details>
  </div>
  <div>
    <DiscordStatus />
  </div>
</div>
