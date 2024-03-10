<script lang="ts">
  import { version, homepage } from '../../../../package.json'
  import exyLogo from '../assets/exy.svg'
  import type { Update } from '../../../main/core/updater/types'
  import { IpcChannel } from '../../../main/ipc.types'

  let update: Update

  window.electron.ipcRenderer.send(IpcChannel.UpdateAvailable) // Get initial value.
  window.electron.ipcRenderer.on(IpcChannel.UpdateAvailable, (_, newUpdate: Update) => {
    update = newUpdate
  })
</script>

<section>
  <img alt="exy-logo" class="icon" src={exyLogo} style="height: 6rem;" />
  <ul>
    <li>exy <sup>{version}</sup></li>
    <li><a href={homepage} target="_blank">homepage</a></li>
    <li>
      <sub>
        {#if update}
          <strong><a href={update.link} target="_blank">v{update.version} now available!</a></strong
          >
        {:else}Thank you!
        {/if}
      </sub>
    </li>
  </ul>
</section>

<style>
  section {
    display: flex;
    margin: 2.5rem 2rem;
  }

  li {
    list-style: none;
  }
</style>
