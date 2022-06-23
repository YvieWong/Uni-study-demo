import request from '../utils/http'

export default {
  // get请求 可以拼接url或者传入数据对象 二选一
  getData (url, data) {
    // 传入的data对象  {ip:'121.00.00.01'}; 
    return request.get(url, { params: data });
  },
  // post请求
  postData (url, data) {
    // 传入的data对象  {ip:'xxxxxx'}; 
    return request.post(url, data);
  },
  // put请求
  putData (url, data) {
    // 传入的data对象  {ip:'xxxxxx'}; 
    return request.put(url, data);
  },
  // delete请求
  deleteData (url, data) {
    // 传入的data对象  {ip:'xxxxxx'}; 
    return request.delete(url, data);
  }
}