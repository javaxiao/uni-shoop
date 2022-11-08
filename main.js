
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// 到入网络配置模块
import { $http } from '@escook/request-miniprogram'

Vue.config.productionTip = false

App.mpType = 'app'

// 将数据请求挂载到wx顶级对象上面
uni.$http = $http
// 配置请求根路径
$http.baseUrl = 'https://api-ugo-web.itheima.net'
// 请求拦截器
$http.beforeRequest = function(options) {
  uni.showLoading({
    title: '数据加载中'
  })
}
// 响应拦截器
$http.afterRequest = function() {
  uni.hideLoading()
}
// 封装失败弹框函数,以便全局调用
uni.$showMsg = function(title = '数据请求失败', duration = 1500) {
  // 弹出弹框内容
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
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif