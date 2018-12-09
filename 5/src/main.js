import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from '@/App.vue'
import router from '@/router.js'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
