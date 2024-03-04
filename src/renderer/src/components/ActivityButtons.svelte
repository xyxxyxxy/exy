<script lang="ts">
  import type { ConfigStore, ExternalLinkConfig } from '../../../main/core/stores/config.types'
  import { IpcChannel } from '../../../main/ipc.types'
  import { ActivityItemType, ExternalDataTypes } from '../../../main/core/activity/types'
  import { getItemTypeText } from './utils'

  export let config: ConfigStore // TODO pass initial value
  let button: ExternalLinkConfig = {
    isActive: true,
    label: 'My Button',
    type: ExternalDataTypes.Custom
  }

  let id = '123'

  function toggleLogoShown(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleActivityLogoShown)
  }

  function submit(data): void {
    console.log(data)
  }
</script>

<p>ℹ️ Discord can display up to two buttons.</p>

<details>
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <summary role="button" class="secondary">
    <input
      id={'isActive' + id}
      type="checkbox"
      role="switch"
      checked={true}
      on:click|preventDefault={toggleLogoShown}
    />
    Button
    <!-- TODO Move buttons up and down -->
  </summary>

  <article>
    <form action="submit" on:submit={submit}>
      <div class="grid">
        <label>
          For
          <select bind:value={button.for}>
            <option selected={!button.for}>All </option>
            {#each Object.values(ActivityItemType) as value}
              <option selected={button.for === value}>{getItemTypeText(value)}</option>
            {/each}
          </select>
        </label>

        <label>
          Label
          <input name="first_name" placeholder="Label" maxlength="128" bind:value={button.label} />
        </label>

        <label>
          URL
          <select bind:value={button.type}>
            {#each Object.values(ExternalDataTypes) as key}
              <option>{key}</option>
            {/each}
          </select>
        </label>
      </div>

      {#if button.type === ExternalDataTypes.Custom}
        <label>
          Custom <span data-tooltip="Must start with https://">URL</span>
          <input name="first_name" placeholder="https://" bind:value={button.customUrl} />
          <!-- TODO Needs to be https -->
        </label>
      {/if}
      <button type="submit">Save</button>
    </form>
  </article>
</details>
