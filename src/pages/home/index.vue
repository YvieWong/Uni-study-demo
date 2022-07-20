<template>
  <view @click="updateClickTime">

    <!-- 使用自定义的搜索组件 -->
    <!-- <view class="search-box">
      <headbar></headbar>
      <my-search @myClick="gotoSearch"></my-search>
    </view> -->
    <index></index>
    <!-- 轮播图区域 -->
    <swiper
      :indicator-dots="true"
      :autoplay="true"
      :interval="3000"
      :duration="1000"
      :circular="true"
    >
      <!-- 循环渲染轮播图的 item 项 -->
      <swiper-item
        v-for="(item, i) in swiperList"
        :key="i"
      >
        <navigator
          class="swiper-item"
          :url="`/subpkg/goods_detail/index?goods_id=${item.goods_id}`"
        >
          <!-- 动态绑定图片的 src 属性 -->
          <image :src="item.image_src"></image>
        </navigator>
      </swiper-item>
    </swiper>

    <!-- 分类导航区域 -->
    <view class="nav-list">
      <view
        class="nav-item"
        v-for="(item, i) in navList"
        :key="i"
        @click="navClickHandler(item)"
      >
        <image
          :src="item.image_src"
          class="nav-img"
        ></image>
      </view>
    </view>

    <!-- 楼层区域 -->
    <view class="floor-list">
      <!-- 楼层 item 项 -->
      <view
        class="floor-item"
        v-for="(item, i) in floorList"
        :key="i"
      >
        <!-- 楼层标题 -->
        <image
          :src="item.floor_title.image_src"
          class="floor-title"
        ></image>
        <!-- 楼层图片区域 -->
        <view class="floor-img-box">
          <!-- 左侧大图片的盒子 -->
          <navigator
            class="left-img-box"
            :url="item.product_list[0].url"
          >
            <image
              :src="item.product_list[0].image_src"
              :style="{width: item.product_list[0].image_width + 'rpx'}"
              mode="widthFix"
            ></image>
          </navigator>
          <!-- 右侧 4 个小图片的盒子 -->
          <view class="right-img-box">
            <navigator
              class="right-img-item"
              v-for="(item2, i2) in item.product_list"
              :key="i2"
              :url="item2.url"
            >
              <image
                v-if="i2 !== 0"
                :src="item2.image_src"
                mode="widthFix"
                :style="{width: item2.image_width + 'rpx'}"
              ></image>
            </navigator>
          </view>
        </view>
      </view>

    </view>

  </view>
</template>

<script>
import mySearch from '../../components/my-search/index'
import headbar from '@/components/headbar/headbar'
import index from '@/pages/index/index'
import api from '../../api/common'
import { timeOut } from '@/utils/timing.js'
export default {
  components: {
    mySearch,
    headbar,
    index
  },
  data () {
    return {
      swiperList: [],
      navList: [],
      floorList: []
    }
  },
  computed: {},
  methods: {
    updateClickTime () {
      console.log('1111')
      this.$store.commit('LAST_TIME_UPDATE', new Date().getTime())
      timeOut()
    },
    async getSwiperList () {
      // const {data:res} = await uni.$http.get('/api/public/v1/home/swiperdata')
      api.getData('/api/public/v1/home/swiperdata')
        .then(res => {
          console.log(res);
          if (res.data.meta.status !== 200) return uni.$showMsg()
          this.swiperList = res.data.message
          console.log(this.swiperList);
        })
        .catch(error => {
          console.log(error);
        })
      // if(res.meta.status !== 200)return uni.$showMsg()
      // this.swiperList = res.message
      // uni.$showMsg('数据请求成功!')
    },
    async getNavList () {
      // const {data:res} = await uni.$http.get('/api/public/v1/home/catitems')
      api.getData('/api/public/v1/home/catitems')
        .then(res => {
          console.log(res);
          if (res.data.meta.status !== 200) return uni.$showMsg()
          this.navList = res.data.message
          console.log(this.swiperList);
        })
        .catch(error => {
          console.log(error);
        })
      // if(res.meta.status !== 200)return uni.$showMsg()
      // this.navList = res.message
    },
    // nav-item 项被点击时候的事件处理函数
    navClickHandler (item) {
      // 判断点击的是哪个 nav
      if (item.name === '分类') {
        uni.switchTab({
          url: '/pages/cate/index'
        })
      }
    },
    async getFloorList () {
      // const {data:res} = await uni.$http.get('/api/public/v1/home/floordata')
      // if(res.meta.status !== 200)return uni.$showMsg()
      api.getData('/api/public/v1/home/floordata')
        .then(res => {
          console.log(res);
          if (res.data.meta.status !== 200) return uni.$showMsg()
          res = res.data
          res.message.forEach(floor => {
            floor.product_list.forEach(prod => {
              prod.url = '/subpkg/goods_list/index?' + prod.navigator_url.split('?')[1]
            })
          })
          // console.log(res);
          this.floorList = res.message
        })
        .catch(error => {
          console.log(error);
        })


    },
    gotoSearch () {
      uni.navigateTo({
        url: '/subpkg/search/search'
      })
    }
  },
  watch: {},
  // 页面周期函数--监听页面加载
  onLoad () {
    this.getSwiperList()
    this.getNavList()
    this.getFloorList()
  },
}
</script>

<style lang="scss" scoped>
swiper {
  height: 330rpx;
  .swiper-item,
  image {
    width: 100%;
    height: 100%;
  }
}
.nav-list {
  display: flex;
  justify-content: space-around;
  margin: 15px 0;

  .nav-img {
    width: 128rpx;
    height: 140rpx;
  }
}
.floor-title {
  height: 60rpx;
  width: 100%;
  display: flex;
}
.right-img-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.floor-img-box {
  display: flex;
  padding-left: 10rpx;
}
.search-box {
  // 设置定位效果为“吸顶”
  position: sticky;
  // 吸顶的“位置”
  top: 0;
  // 提高层级，防止被轮播图覆盖
  z-index: 999;
}
</style>
