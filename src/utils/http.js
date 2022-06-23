import Request from 'luch-request'//npm下载引入luch-request

// import qs from 'qs'
const http = new Request({
  /* #ifdef H5 */
  baseURL: "/api2", //设置请求的base url
  /* #endif */
  /* #ifdef APP-PLUS */
  baseURL: "http://www.uinav.com", //设置请求的base url
  /* #endif */
  timeout: 300000, //超时时长5分钟,
  header: {
    'Content-Type': 'multipart/form-data;application/json;charset=UTF-8;'
  }
})

//请求拦截器
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
  // const token = uni.getStorageSync('token');
  // if (token) {
  //   config.headers.common["Authorization"] = 'Bearer ' + token;
  // }
  // console.log(config);
  if (config.method === 'POST') {
    config.data = JSON.stringify(config.data);
  }
  return config
}, error => {
  return Promise.resolve(error)
})

// 响应拦截器
http.interceptors.response.use((response) => {
  // console.log(response)
  return response
}, (error) => {
  //未登录时清空缓存跳转
  if (error.statusCode == 401) {
    uni.clearStorageSync();
    uni.switchTab({
      url: "pages/my/index"
    })
  }
  return Promise.resolve(error)
})
export default http;

