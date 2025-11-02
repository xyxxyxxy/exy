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
      <ol>
        <li>Buttons are selected from top to bottom.</li>
        <li>The media type of the button must apply to the now playing item.</li>
        <li>The target must be available.</li>
      </ol>
      <footer>
        The custom URL target is always available. For <a href="#help-predefined-targets"
          >predefined targets</a
        >
        it depends on the provider data set in the media source.
        <a href="#help-public-content">here</a>.
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
        The availability depends on the media source. Check the playing item inside Emby/Jellyfin to
        see if the target link is defined.
      </footer>
    </article>
  </details>

  <details>
    <!-- svelte-ignore a11y_no_redundant_roles -->
    <summary role="button" class="secondary outline" id="help-public-content"
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
