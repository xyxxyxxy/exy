import './assets/main.css'
import '../../../node_modules/@picocss/pico/css/pico.min.css'

import Config from './Config.svelte'
import { mount } from 'svelte'

const config = mount(Config as any, {
  target: document.getElementById('main')
})

export default config
