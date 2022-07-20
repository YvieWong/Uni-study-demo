import store from '../store/index.js';
export const timeOut = () => {
  // 上一次点击时间
  let lastTime = null
  // 当前时间
  let currentTime = null
  // 超时时间
  let sys_timeout = 5* 1000
  // 每隔多长时间检查是否超时
  let check_time = 5* 1000
  // 计时器
  let goOut = null


  const isTimeOut = () => {
    // 页面上一次的点击时间
    lastTime = store.getters.lastTime
    currentTime = new Date().getTime()
    // 超时了
    if ((currentTime - lastTime) > sys_timeout) {
      return true;
    } else {
      return false;
    }
  }


  const isLoginOut = () => {
    clearInterval(goOut);
    //setInterval方法来确定多长时间检测一次有没有超时
    goOut = setInterval(() => {
      console.log(isTimeOut());
      // 判断一下是否超时，如果超时了就退出
      if (isTimeOut()) {
        // 需要转到的页面
        // uni.navigateTo({
        //   url: '/pages/home/index',
        //   animationType: 'pop-in',
        //   animationDuration: 200
        // });
        uni.reLaunch({
          url: '/pages/home/index',
          animationType: 'pop-in',
          animationDuration: 200
        })
        //已经超时跳转到相应界面，不需要计时了
        clearInterval(goOut)
      }
    }, check_time);
  }
  isLoginOut();
}