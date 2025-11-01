<script lang="ts">
  interface Props {
    isFirst?: boolean
    isLast?: boolean
    moveUp: () => void
    moveDown: () => void
  }

  let { isFirst = false, isLast = false, moveUp, moveDown }: Props = $props()
</script>

<div>
  <button
    class="up"
    disabled={isFirst}
    onclick={(event) => {
      event.preventDefault()
      moveUp()
    }}>↑</button
  >
  <button
    class="down"
    disabled={isLast}
    onclick={(event) => {
      event.preventDefault()
      moveDown()
    }}>↓</button
  >
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
