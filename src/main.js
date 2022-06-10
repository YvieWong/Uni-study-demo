import Vue from 'vue'
import App from './App'
import { $http } from '@escook/request-miniprogram'

Vue.config.productionTip = false

App.mpType = 'app'
// wx.$http = $http
uni.$http = $http
// 请求的根路径
$http.baseUrl = 'https://www.uinav.com'

//请求拦截器
$http.beforeRequest = function (options) {
  uni.showLoading({
    title: '数据加载中...',
  })
}

//响应拦截器
$http.afterRequest = function () {
  uni.hideLoading()
}

//封装消息提示方法
uni.$showMsg = function (title = '数据加载失败!', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none'
  })
}

const app = new Vue({
  ...App
})
app.$mount()
