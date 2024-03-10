<script lang="ts">
  import type { ConfigStore } from '../../../main/core/stores/config.types'
  import { name } from '../../../../package.json'
  import ActivityButton from './ActivityButton.svelte'

  export let config: ConfigStore
</script>

<section>
  <p>
    Discord can show up to two buttons on an activity. A button can be limited to a specific type of
    media and some media types come with predefined targets, provided by the media-server. In case a
    predefined target is unavailable, the button will be ignored by {name}.
  </p>
  {#each config.externalLinks as externalLink, index}
    <ActivityButton
      {externalLink}
      isFirst={index === 0}
      isLast={index === config.externalLinks.length - 1}
    />
  {/each}
  <ActivityButton />
</section>
