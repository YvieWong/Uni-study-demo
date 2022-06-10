<template>
  <view>
    <view class="search-box">
      <!-- 使用 uni-ui 提供的搜索组件 -->
      <uni-search-bar @input="input" :radius="100" cancelButton="none" :focus="true"></uni-search-bar>
    </view>
</view>
  
</template>

<script>
import {uniSearchBar} from '@dcloudio/uni-ui'
export default {
  components: {
    uniSearchBar
  },
  data: () => ({}),
  computed: {},
  methods: {
    input(e) {
      // e.value 是最新的搜索内容
      console.log(e)
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
} 
</script>

<style lang="scss" scoped>
.search-box {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #c00000;
}
</style>