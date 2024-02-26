<script lang="ts">
  import { version, homepage } from '../../../../package.json'
  import exyLogo from '../assets/exy.svg'
</script>

<section>
  <img alt="exy-logo" class="icon" src={exyLogo} style="height: 6rem;" />
  <ul>
    <li>exy <sup>{version}</sup></li>
    <li><a href={homepage} target="_blank">homepage</a></li>
    <li><sub>Thank you</sub></li>
  </ul>
</section>

<style>
  section {
    display: flex;
  }

  li {
    list-style: none;
  }
</style>
