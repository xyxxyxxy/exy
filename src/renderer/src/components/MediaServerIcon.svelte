<script lang="ts">
  import embyLogo from '../assets/emby.svg'
  import jellyfinLogo from '../assets/jellyfin.svg'

  export let type: string
</script>

<div class="icon">
  <img alt="{type}-logo" class="icon" src={type === 'emby' ? embyLogo : jellyfinLogo} />
</div>

<style>
  .icon {
    display: inline-flex;
    align-self: center;
  }

  .icon img {
    height: 1em;
    width: 1em;
    fill: currentColor;
    top: 0.125em;
    position: relative;
  }
</style>
