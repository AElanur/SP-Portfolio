import './assets/main.css'
import './style.css'

import { createApp }                from 'vue'
import { library }                  from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon }          from '@fortawesome/vue-fontawesome'
import { far }                      from '@fortawesome/free-regular-svg-icons'
import { fas }                      from '@fortawesome/free-solid-svg-icons'
import { fab }                      from '@fortawesome/free-brands-svg-icons'



library.add(fas, far, fab)

import App from './App.vue'

createApp(App).component('fIcon', FontAwesomeIcon)
.mount('#app')

