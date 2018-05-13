// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false

// 添加muse-ui
Vue.use(MuseUI)
// 添加axios
Vue.prototype.$http = axios.create({
  baseURL: 'http://www.kellyj.top:8080/travalManager/',
  withCredentials: true,
  headers: {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Credentials': 'true'}
});

Vue.prototype.$axios = axios.create({
  baseURL: 'http://www.knockyouth.com:8080/cxm_new/',
  withCredentials: true,
  headers: {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Credentials': 'true'}
});
Vue.prototype.$qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
