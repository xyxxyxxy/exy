<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { name } from '../../../../package.json'
  import ActivityButton from './ActivityButton.svelte'

  interface Props {
    config: ConfigStore
  }

  let { config }: Props = $props()
</script>

<section>
  <p>
    Discord can show up to two buttons on an activity. In {name} a button can be limited to a specific
    media type and some types come with predefined targets, provided by the media source. Check the
    <a href="#button-faq"> button FaQ</a> for more information.
  </p>

  {#each config.externalLinks as externalLink, index}
    <ActivityButton
      {externalLink}
      isFirst={index === 0}
      isLast={index === config.externalLinks.length - 1}
    />
  {/each}
  <ActivityButton />

  <h4 id="button-faq">Button FaQ</h4>

  <details>
    <!-- svelte-ignore a11y_no_redundant_roles -->
    <summary role="button" class="secondary outline" id="help-predefined-targets"
      >❔ Where can I see these buttons</summary
    >
    <article>
      The buttons are only shown for others viewing your profile in Discord. Ask a friend or check
      with a second account if unsure what buttons are added.
    </article>
  </details>

  <details>
    <!-- svelte-ignore a11y_no_redundant_roles -->
    <summary role="button" class="secondary outline">❔ What buttons are added</summary>
    <article>
      Up to two buttons are added via the following logic:
      <ol>
        <li>Buttons are selected from top to bottom.</li>
        <li>Media type of playing item must match the button media type.</li>
        <li>The "target" of the button must be available for the playing item.</li>
      </ol>
      <footer>
        The custom URL target is always available. Other target availability depends on the data
        provided by the media-server.
      </footer>
    </article>
  </details>

  <details>
    <!-- svelte-ignore a11y_no_redundant_roles -->
    <summary role="button" class="secondary outline" id="help-predefined-targets"
      >❔ What predefined target is available for a given media type</summary
    >
    <article>
      <ul>
        <li>MusicBrainz for songs</li>
        <li>TheTVDB for episodes</li>
        <li>IMDb, TheMovieDb, Trakt for movies</li>
      </ul>
      <footer>
        The availability depends on the media-server. Check the playing item inside Emby/Jellyfin to
        see if the target link is defined.
      </footer>
    </article>
  </details>

  <details>
    <!-- svelte-ignore a11y_no_redundant_roles -->
    <summary role="button" class="secondary outline"
      >❔ How does the "Watch link" target work</summary
    >
    <article>
      For the watch link button to work, the provider ID "youtube" must be set to a YouTube video
      ID. The provider ID can only be set by the media-server admin. When downloading videos with
      <a href="https://github.com/kieraneglin/pinchflat" target="_blank">Pinchflat</a>
      the YouTube provider ID can be set automatically.
    </article>
  </details>
</section>
