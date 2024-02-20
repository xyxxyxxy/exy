<script lang="ts">
  import type { ConnectMediaServerError } from '../../../main/ipc.types'
  import { beforeUpdate } from 'svelte'

  export let error: ConnectMediaServerError | undefined
  let helperText: string

  beforeUpdate(() => {
    console.log('the component is about to update')

    if (!error) {
      helperText = ''
      return
    }

    helperText = error.message

    // Provide some friendlier error messages.
    if (error.code === 'ENOTFOUND') helperText = 'Unable to connect. Address not found.'
    if (error.code === 'ECONNREFUSED') helperText = 'Unable to connect. Connection refused.'
    if (error.code === 'ETIMEDOUT') helperText = 'Unable to connect. Timeout.'
  })
</script>

<!-- Helper input to display the helper text independent. -->
<input style="display: none;" aria-invalid={!!error} aria-describedby="helper" />
<small id="helper">{helperText}</small>
