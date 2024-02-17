import './assets/main.css'
import '../../../node_modules/@picocss/pico/css/pico.min.css'

import Config from './Config.svelte'

const config = new Config({
  target: document.getElementById('config')
})

export default config
