<template>
  <div class="cart">
	  更新啦
	  <div class="swiper-item" v-for="(item, i) in swiperList" :key="i">
      <div>{{item.image_src}}</div>
		  <image :src="item.image_src" style="height:100%"></image>
	  </div>
  </div>
</template>

<script>
import api from '../../api/common'
export default {
  components: {},
 data(){
   return{
     swiperList:[]
   }
 },
  computed: {},
  methods: {
	  async getSwiperList(){
	    // const {data:res} = await uni.$http.get('/api/public/v1/home/swiperdata')
      // console.log(res);
      api.getData('/api/public/v1/home/swiperdata')
      .then(res=>{
        console.log(res);
        if(res.data.meta.status !== 200)return uni.$showMsg()
	      this.swiperList = res.data.message
        console.log(this.swiperList);
      })
      .catch(error=>{
        console.log(error);
      })
	    // if(res.meta.status !== 200)return uni.$showMsg()
	    // this.swiperList = res.message
	    uni.$showMsg('数据请求成功!')
	  },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {
	  this.getSwiperList()
  },
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

<style scoped>
.swiper-item,
 image {
   width: 100%;
   height: 100%;
 }
</style>