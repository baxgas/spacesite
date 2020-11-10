import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/global.css'

import store from "./store";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
