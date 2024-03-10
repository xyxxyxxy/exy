<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { name } from '../../../../package.json'
  import ActivityButton from './ActivityButton.svelte'

  export let config: ConfigStore
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
    <!-- svelte-ignore a11y-no-redundant-roles -->
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
        it depends on the data provided by the media source. Youtube and BitChute targets are special,
        see
        <a href="#help-public-content">here</a>.
      </footer>
    </article>
  </details>

  <details>
    <!-- svelte-ignore a11y-no-redundant-roles -->
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
    <!-- svelte-ignore a11y-no-redundant-roles -->
    <summary role="button" class="secondary outline" id="help-public-content"
      >❔ How does the YouTube/BitChute target work</summary
    >
    <article>
      The YouTube/BitChute target provides a link to the original video. The link is generated using
      the file path of the playing media item. For this to work the path must meet two criteria:
      <ul>
        <li>
          Contains site name <mark>YouTube</mark> or <mark>BitChute</mark> (case insensitive)
        </li>
        <li>Followed by a video ID in square brackets <mark>[&lt;ID&gt;]</mark></li>
      </ul>
      If a video ID is detected, {name} will confirm the generated link by checking the video is available
      before adding a button to it.
      <footer>
        File path examples:
        <ul>
          <li>
            <span class="monospace"
              >/media/<mark>YouTube</mark>/Me at the zoo <mark>[jNQXAC9IVRw]</mark>.mp4</span
            >
          </li>
          <li>
            <span class="monospace"
              >/media/<mark>youtube</mark>/<mark>[jNQXAC9IVRw]</mark> Me at the zoo.mp4</span
            >
          </li>
          <li>
            <span class="monospace"
              >/media/<mark>youtube</mark>.com/Me at the zoo <mark>[jNQXAC9IVRw]</mark>.mp4</span
            >
          </li>
          <li>
            <span class="monospace"
              >/media/<mark>YouTube</mark> Me at the zoo <mark>[jNQXAC9IVRw]</mark>.mp4</span
            >
          </li>
          <li>
            <span class="monospace"
              >/media/<mark>BitChute</mark>/Me at the zoo <mark>[0aG6W5lcsJG3]</mark>.mp4</span
            >
          </li>
        </ul>
        The RegExp used to detect the ID can be tested with RegEx101:
        <ul>
          <li><a href="https://regex101.com/r/6J9dr9/1" target="_blank">YouTube</a></li>
          <li><a href="https://regex101.com/r/cpVE7k/1" target="_blank">BitChute</a></li>
        </ul>
      </footer>
    </article>
  </details>
</section>

<style>
  .monospace,
  mark {
    font-family: monospace;
  }
</style>
