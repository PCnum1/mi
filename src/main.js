import Vue from 'vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import env from './env'
const mock = false
if(mock){
  require('./mock/api')
}
axios.defaults.baseURL = '/api'; 
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000
axios.interceptors.response.use(function(response){
  let res = response.data
  let path = location.hash
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    if(path !== '#/index'){
      window.location.href = '/#/login'
    }
    return new Promise.reject(res);
  }else{
    return new Promise.reject(res);
  }
})

Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
// Vue.use(Message)
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
