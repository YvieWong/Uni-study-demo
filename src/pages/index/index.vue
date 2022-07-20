<template>
	<view class="content">
    1111
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<image class="logo" :src="this.STATICURL+'1.png'"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
        // url:this.STATICURL
			}
		},
		onLoad() {
      console.log('@@@@');
      console.log(this.staticUrl,111);
      // console.log(this.url,2222);
		},
    mounted() {
      console.log('@@@@');
      console.log(this.STATICURL,111);
    },
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
