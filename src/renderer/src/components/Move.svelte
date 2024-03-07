<script lang="ts">
  export let isFirst = false
  export let isLast = false

  export let moveUp: () => void
  export let moveDown: () => void
</script>

<div>
  {#if !isFirst}<button class="up" class:merge={!isLast} on:click|preventDefault={moveUp}>↑</button
    >{/if}
  {#if !isLast}<button
      class="down"
      class:merge={!isFirst}
      class:isFirstAlone={isFirst}
      on:click|preventDefault={moveDown}>↓</button
    >{/if}
</div>

<style>
  button {
    display: block;
    padding: 0;
    width: 3rem;
    height: 1.54rem;
  }

  .up.merge {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .down.merge {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .isFirstAlone {
    margin-top: 1.54rem;
  }
</style>
