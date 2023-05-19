import './assets/main.css'
import './style.css'

import { createApp }                from 'vue'
import { library }                  from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon }          from '@fortawesome/vue-fontawesome'
import { far }                      from '@fortawesome/free-regular-svg-icons'
import { fas }                      from '@fortawesome/free-solid-svg-icons'
import { fab }                      from '@fortawesome/free-brands-svg-icons'
import mitt                         from 'mitt'
import App                          from './App.vue'

const emitter = mitt()
const app = createApp(App)




library.add(fas, far, fab)



app.component('fIcon', FontAwesomeIcon)
app.config.globalProperties.emitter = emitter
app.mount('#app')




