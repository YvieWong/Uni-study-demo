<template>
  <div class="cart">
    <h2>canvas的使用学习</h2>
    <canvas
      :style="{width:'500px',height:'400px'}"
      id="myCanvas"
      canvas-id="myCanvas"
    >
    </canvas>
    <button
      open-type=""
      hover-class="button-hover"
      @click="handleFlash"
    >
      动画效果
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      context: '',
      isFlash: false
    }
  },
  computed: {},
  mounted () { },
  methods: {
    drawPic () {
      // 获取画布
      let contextTem = uni.createCanvasContext('myCanvas')
      console.log(contextTem);
      contextTem.setFillStyle('green')
      contextTem.fillRect(50, 100, 200, 100)
      this.context = contextTem
      // 开始绘画
      this.context.draw(true, () => {
        uni.$showMsg('绘制完成')
      })
    },
    handleFlash () {
      var left = 50
      if (this.isFlash) {
        this.isFlash = false
        return
      }
      setInterval(() => {
        this.isFlash = true
        this.context.clearRect(0, 0, 500, 400)
        left++
        this.context.fillRect(left, 100, 200, 100)
        this.context.draw(true)
        if (left > 400) {
          left = -200
        }
      }, 16)
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad () { },
  // 页面周期函数--监听页面初次渲染完成
  onReady () {
    this.drawPic()
  },
  // 页面周期函数--监听页面显示(not-nvue)
  onShow () { },
  // 页面周期函数--监听页面隐藏
  onHide () { },
  // 页面周期函数--监听页面卸载
  onUnload () { },
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

<style scoped></style>