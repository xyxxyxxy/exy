<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import ActivityButton from './ActivityButton.svelte'
  import { IpcChannel } from '../../../main/ipc.types'

  export let config: ConfigStore

  function reset(): void {
    window.electron.ipcRenderer.send(IpcChannel.ResetExternalLinks)
  }
</script>

<section>
  <p>
    Up to two buttons can be shown on the activity. Which buttons to show depends on the buttons
    media type and the availability of the target data for the playing item.
  </p>
  <p>You can use this to link to your personal listening or watch history.</p>
  {#each config.externalLinks as externalLink (externalLink.id)}
    <ActivityButton {externalLink} />
  {/each}
  <ActivityButton />
  <button type="button" class="secondary" on:click={reset}>Reset buttons to default</button>
</section>
