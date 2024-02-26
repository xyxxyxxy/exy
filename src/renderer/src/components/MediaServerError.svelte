<script lang="ts">
  import type { ConnectMediaServerError } from '../../../main/ipc.types'
  import { beforeUpdate } from 'svelte'

  export let error: ConnectMediaServerError | undefined
  let text: string

  beforeUpdate(() => {
    if (!error) {
      text = ''
      return
    }

    text = error.message

    // Provide some friendlier error messages.
    if (error.code === 'ERR_INVALID_URL') text = 'Unable to connect. Address is invalid.'
    if (error.code === 'ENOTFOUND') text = 'Unable to connect. Address not found.'
    if (error.code === 'ECONNREFUSED') text = 'Unable to connect. Connection refused.'
    if (error.code === 'ETIMEDOUT') text = 'Unable to connect. Timeout.'
  })
</script>

{text}
