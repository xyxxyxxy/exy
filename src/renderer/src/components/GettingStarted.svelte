<script lang="ts">
  interface Props {
    isConnected: boolean;
    isImgurSet: boolean;
  }

  let { isConnected, isImgurSet }: Props = $props();

  const connectText = `Connect to Emby/Jellyfin`
  const imgurText = `Set Imgur client ID`
</script>

{#if !isConnected || !isImgurSet}
  <article>
    <header>
      <h2>Getting Started 🎏</h2>
    </header>
    <ol>
      <li>
        {#if isConnected}
          <s>{connectText}</s> ✔️
        {:else}<a href="#connections">{connectText}</a>
        {/if}
      </li>
      <li>
        {#if isImgurSet}
          <s>{imgurText}</s> ✔️
        {:else}<a href="#imgur">{imgurText}</a>
        {/if}
      </li>
    </ol>
  </article>
{/if}
