<script>
import { timeOut } from './utils/timing'
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
    // 启动定时器
    timeOut();
  },
  onHide: function () {
    console.log('App Hide')
  },
  methods: {
    // 记录点击时间，传入参数为当前时间
    updateClickTime () {
      console.log('1111')
      this.$store.commit('LAST_TIME_UPDATE', new Date().getTime())
      timeOut()
    },
  },
}
</script>

<style lang="scss">
@import "uview-ui/index.scss";
/*每个页面公共css */
uni-page-head {
  display: none;
}
</style>
