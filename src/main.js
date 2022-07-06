import Vue from 'vue'
import App from './App'
import uView from "uview-ui"
// import { $http } from '@escook/request-miniprogram'
import store from './store'

Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'
// wx.$http = $http
// uni.$http = $http
// 请求的根路径
// $http.baseUrl = 'https://www.uinav.com'
// $http.baseUrl = '/api2'

// 请求拦截器
// $http.beforeRequest = function (options) {
//   uni.showLoading({
//     title: '数据加载中...',
//   })
// }

//响应拦截器
// $http.afterRequest = function () {
//   uni.hideLoading()
// }

//封装消息提示方法
uni.$showMsg = function (title = '数据加载失败!', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none'
  })
}

const app = new Vue({
  store,
  ...App
})
app.$mount()
