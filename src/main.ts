import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { Button, Select } from 'element-ui'

Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
