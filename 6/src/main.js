import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from '@/App.vue'
import router from '@/router.js'
import store from '@/store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'pretty-checkbox/dist/pretty-checkbox.css';

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
