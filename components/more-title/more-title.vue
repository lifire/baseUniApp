<template>
	<view class="more-title">
		<uni-title :title="title"  />
		<navigator class="more-link" :url="moreLink">
			{{moreText}}
			<view class="iconfont iconjiantou"></view>
		</navigator>
	</view>
</template>

<script>
	import uniTitle from '@/components/uni-title/uni-title.vue'
	export default{
		components:{
			uniTitle
		},
		props:['title', 'moreLink', 'moreText']
	}
</script>

<style lang="less" scoped>
	.more-title{
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 6rpx 20rpx 6rpx 32rpx;
		font-size: 30rpx;
		color: #333;
		background-color: #fff;
		&::before{
			content: '';
			position: absolute;
			left: 20rpx;
			top: 20rpx;
			bottom: 20rpx;
			width: 4rpx;
			background-color: #d5d5d5;
		}
		.more-link{
			display: flex;
			align-items: center;
			font-size: 26rpx;
			color: #999;
			.iconfont{
				font-size: 24rpx;
			}
		}
	}
</style>
