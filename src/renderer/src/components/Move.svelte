<script lang="ts">
  export let isFirst = false
  export let isLast = false

  export let moveUp: () => void
  export let moveDown: () => void
</script>

<div>
  <button class="up" disabled={isFirst} on:click|preventDefault={moveUp}>↑</button>
  <button class="down" disabled={isLast} on:click|preventDefault={moveDown}>↓</button>
</div>

<style>
  button {
    display: block;
    padding: 0;
    width: 3rem;
    height: 1.54rem;
  }

  .up {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .down {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
