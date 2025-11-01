<script lang="ts">
  import type { ExternalLinkConfig } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'
  import { ActivityItemType, ExternalDataType } from '../../../main/core/activity/types'
  import { getItemTypeText } from './utils'
  import Move from './Move.svelte'

  // ID is optional, because it's unset for new buttons.

  interface Props {
    externalLink?: null | (Omit<ExternalLinkConfig, 'id'> & { id?: string })
    isFirst?: boolean
    isLast?: boolean
  }

  let { externalLink = $bindable(null), isFirst = false, isLast = false }: Props = $props()

  let isOpen = $state(false)
  let hasChanges = $state(false)

  if (!externalLink) reset()

  function toggleActive(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleExternalLinkActive, externalLink.id)
  }

  function moveUp(): void {
    window.electron.ipcRenderer.send(IpcChannel.MoveExternalLinkUp, externalLink.id)
  }

  function moveDown(): void {
    window.electron.ipcRenderer.send(IpcChannel.MoveExternalLinkDown, externalLink.id)
  }

  function deleteExternalLink(): void {
    window.electron.ipcRenderer.send(IpcChannel.DeleteExternalLink, externalLink.id)
  }

  function changed(): void {
    hasChanges = true
  }

  function save(): void {
    window.electron.ipcRenderer.send(IpcChannel.SaveExternalLink, externalLink)
    reset()
  }

  function reset(): void {
    hasChanges = false
    isOpen = false
    externalLink = {
      isActive: true,
      label: 'New Button',
      forItemType: 'All',
      target: 'CustomUrl'
    }
  }
</script>

<div class="flex">
  <details bind:open={isOpen}>
    <!-- svelte-ignore a11y_no_redundant_roles -->
    <summary
      role="button"
      class:outline={!externalLink.id}
      class:secondary={externalLink.id && !hasChanges}
    >
      {#if !externalLink.id}
        ✨ Add button
      {:else}
        <!-- {#if !isFirst}<span
        role="button"
        tabindex="0"
        on:click|preventDefault={moveUp}
        on:keydown={moveUp}>⬆</span
      >{/if}
    {#if !isLast}<span
        role="button"
        tabindex="0"
        on:click|preventDefault={moveDown}
        on:keydown={moveDown}>⬇</span
      >{/if} -->
        <input
          type="checkbox"
          role="switch"
          checked={externalLink.isActive}
          onclick={(event) => {
            event.preventDefault()
            toggleActive()
          }}
          disabled={!externalLink.id}
        />
        {`〔 ${externalLink.label} 〕` ||
          'New Button'}{#if externalLink.forItemType !== 'All'}{` for ${getItemTypeText(externalLink.forItemType)}`}{/if}
      {/if}
    </summary>

    <article>
      <form
        action="submit"
        onsubmit={(event) => {
          event.preventDefault()
          save()
        }}
        oninput={changed}
      >
        <div class="grid">
          <label>
            For media type
            <select bind:value={externalLink.forItemType}>
              <option value="All">All</option>
              {#each Object.values(ActivityItemType) as value}
                <option {value}>{getItemTypeText(value)}</option>
              {/each}
            </select>
          </label>

          <label>
            Label
            <input
              name="first_name"
              placeholder="Label"
              required
              maxlength="128"
              bind:value={externalLink.label}
            />
          </label>

          <label>
            Target
            <select bind:value={externalLink.target}>
              <option value="CustomUrl">Custom URL</option>
              {#each Object.values(ExternalDataType) as value}
                <option>{value}</option>
              {/each}
            </select>
          </label>
        </div>

        {#if externalLink.target === 'CustomUrl'}
          <label>
            Custom <span data-tooltip="Must start with https://">URL</span>
            <input
              name="first_name"
              placeholder="https://"
              required
              pattern="https:\/\/.+"
              bind:value={externalLink.customUrl}
            />
          </label>
        {/if}
        <div class="grid">
          {#if externalLink.id}
            <button type="button" class="secondary" onclick={deleteExternalLink}>Delete</button>
          {/if}
          <button type="submit">Save</button>
        </div>
      </form>
    </article>
  </details>
  {#if externalLink.id}
    <Move {isFirst} {isLast} {moveUp} {moveDown} />
  {:else}
    <div style="width: 3rem;"></div>
  {/if}
</div>

<style>
  .flex {
    display: flex;
    gap: var(--pico-grid-row-gap);
  }

  details {
    flex-grow: 1;
  }
</style>
