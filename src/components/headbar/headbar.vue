<template>
  <div class="headbar">
    <uni-nav-bar>
      <block slot="left">
        <view class="city">
          <view>
            <text class="uni-nav-bar-text">左侧</text>
          </view>
          <uni-icons
            type="arrowdown"
            color="#666"
            size="18"
          />
        </view>
      </block>
      <view class="input-view">
        <uni-icons
          class="input-uni-icon"
          type="search"
          size="18"
          color="#999"
        />
        <!-- <input
          confirm-type="search"
          class="nav-bar-input"
          type="text"
          placeholder="输入搜索关键词"
          @confirm="confirm"
        /> -->
      </view>
      <block slot="right">
        <view class="city">
          搜索
        </view>
      </block>
    </uni-nav-bar>
  </div>
</template>

<script>
export default {
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted () { },
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate () { },
  // 组件周期函数--监听组件数据更新之后
  updated () { },
  // 组件周期函数--监听组件激活(显示)
  activated () { },
  // 组件周期函数--监听组件停用(隐藏)
  deactivated () { },
  // 组件周期函数--监听组件销毁之前
  beforeDestroy () { },
}
</script>

<style lang="scss" scoped>
$nav-height: 30px;
.city {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  // width: 160rpx;
  margin-left: 4px;
}

.input-view {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  // width: 500rpx;
  flex: 1;
  background-color: #f8f8f8;
  height: $nav-height;
  border-radius: 15px;
  padding: 0 15px;
  flex-wrap: nowrap;
  margin: 7px 0;
  line-height: $nav-height;
}

.input-uni-icon {
  line-height: $nav-height;
}

.nav-bar-input {
  height: $nav-height;
  line-height: $nav-height;
  /* #ifdef APP-PLUS-NVUE */
  width: 370rpx;
  /* #endif */
  padding: 0 5px;
  font-size: 12px;
  background-color: #f8f8f8;
}
</style>