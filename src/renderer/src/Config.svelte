<script lang="ts">
  import Versions from './components/Versions.svelte'
  import ImgurClientId, { configUpdate } from './components/ImgurClientId.svelte'
  import type { ConfigStore } from '../../main/core/stores/config.types'
  import { IpcChannel } from '../../main/ipc.types'

  let config: ConfigStore

  window.electron.ipcRenderer.send(IpcChannel.Config) // Get initial value.
  window.electron.ipcRenderer.on(IpcChannel.Config, (_, newConfig) => {
    config = newConfig
    configUpdate(config)
  })

  function toggleStartup(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleStartup)
  }

  function toggleDebugLogging(): void {
    window.electron.ipcRenderer.send(IpcChannel.ToggleDebugLogging)
  }
</script>

{#if config}
  <div class="container">
    <section></section>
    <h1>⚙️ Configuration</h1>

    <section>
      <h4>🌠 General</h4>

      <label>
        <input
          name="isStartupEnabled"
          type="checkbox"
          role="switch"
          checked={config.isStartupEnabled}
          on:click|preventDefault={toggleStartup}
        />

        Run at startup
      </label>
    </section>
    <section>
      <h4>📡 Media-Server Connections</h4>
    </section>
    <section>
      <h4>🖼️ Imgur</h4>
      <div class="grid">
        <div>
          <p>
            Used to make images publicly available while keeping the media-server address private.
          </p>
          <details>
            <summary>❔ How do I get a Client ID</summary>
            <p>
              An Imgur account is required. You can create one
              <a href="https://imgur.com/register" target="_blank">here</a>.
            </p>
            <ol>
              <li>
                Go to <a href="https://api.imgur.com/oauth2/addclient" target="_blank"
                  >Register an Application</a
                >
              </li>
              <li>Enter any application name</li>
              <li>
                Select authorization type
                <abbr title="OAuth 2 authorization without a callback URL">without callback</abbr>
              </li>
              <li>Enter your email</li>
              <li>Submit</li>
            </ol>
            <p>Your client ID should now be displayed.</p>
          </details>
        </div>
        <div>
          <ImgurClientId></ImgurClientId>
        </div>
      </div>
    </section>
    <section>
      <h4>🪠 Debug</h4>

      <label>
        <input
          name="isDebugLoggingEnabled"
          type="checkbox"
          role="switch"
          checked={config.isDebugLoggingEnabled}
          on:click|preventDefault={toggleDebugLogging}
        />
        Debug logging
      </label>
    </section>

    <Versions />
  </div>
{/if}
