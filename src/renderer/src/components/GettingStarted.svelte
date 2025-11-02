<script lang="ts">
  interface Props {
    isConnected: boolean
  }

  let { isConnected }: Props = $props()

  const connectText = `Connect to Emby/Jellyfin`
</script>

{#if !isConnected}
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
    </ol>
  </article>
{/if}
