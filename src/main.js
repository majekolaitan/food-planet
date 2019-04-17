import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store.js'
import Accounting from 'accounting-js'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.filter('currency', function(val){
  return Accounting.formatMoney(val)
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
