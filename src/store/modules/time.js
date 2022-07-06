const time = {
  state: {
    // 记录最后一次点击的时间
    lastTime: new Date().getTime()
  },
  mutations: {
    //点击事件调用，刷新最后一次点击时间
    LAST_TIME_UPDATE: (state, lastTime) => {
      state.lastTime = lastTime;
    }
  },
  actions: {}
}

export default time
