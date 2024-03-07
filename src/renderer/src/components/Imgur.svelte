<script lang="ts">
  import { name } from '../../../../package.json'
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import ImgurClientId from './ImgurForm.svelte'

  export let config: ConfigStore
</script>

<div class="grid">
  <div>
    <p>
      Providing an Imgur client ID will enable {name} to display a preview image of the playing media
      item.
    </p>
    <details>
      <!-- svelte-ignore a11y-no-redundant-roles -->
      <summary role="button" class="secondary outline">❔ How do I get a Client ID</summary>
      <article>
        <header>
          An Imgur account is required. You can create one
          <a href="https://imgur.com/register" target="_blank">here</a>.
        </header>

        <ol>
          <li>
            Go to <a href="https://api.imgur.com/oauth2/addclient" target="_blank"
              >Register an Application</a
            >
          </li>
          <li>Enter application name '{name}'</li>
          <li>
            Select authorization type
            <abbr title="OAuth 2 authorization without a callback URL">without callback</abbr>
          </li>
          <li>Enter your email</li>
          <li>Submit</li>
        </ol>
        <footer>Your client ID should now be displayed.</footer>
      </article>
    </details>
  </div>
  <div>
    <ImgurClientId clientId={config.imgurClientId} />
  </div>
</div>
