import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'
// import env from './env'
const mock = true
if(mock){
  require('./mock/api')
}
axios.defaults.baseURL = '/api' 
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000
axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.status === 0){
    return res.data
  }else if(res.status === 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
