<template>
	<view class="home">
		<swiper class="home-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="item in bannerList" :key="item.bannerUuid">
				<view class="swiper-item">
					<image :src="item.bannerImgPath" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="home-title">
			<more-title :title="listData.siftNewName" moreLink="../course/courseList" moreText="更多" />
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item, key) in listData.list" :key="key" @click="goDetail(item)">
				<view class="uni-media-list">
					<view class="uni-media-list-logo">
						<image :src="item.imgPath"></image>
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{ item.courseName }}</view>
						<view class="uni-media-list-text-body">
							<view>								
								<text>{{item.teacherName}}</text>
								<text>{{item.teacherDesc}}</text>
							</view>
							<view>
								<text>{{item.playCount}}人看过</text>
							</view>
						</view>
						<view class="uni-media-list-text-bottom">
							<view class="lc">								
								<text>{{ item.label }}</text>
							</view>
							<view class="rc">
								<text class="price">￥{{item.price}}/年</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import moreTitle from '@/components/more-title/more-title.vue'
	
	export default {
		components:{
			moreTitle
		},
		data() {
			return {
				bannerList: [],
				listData:[],
			}
		},
		onLoad() {
			this.getHomeData()
			let token = getApp().globalData.token
			console.log(token)
		},
		onPullDownRefresh() {
			this.getHomeData()
		},
		methods: {
			getHomeData(){
				let data = {
					equipmentId: '',
					clientType: '',
					osType: '',
					appVersion: '',
					module: '',
					labels: '',
					uuid: ''
				}
				uni.request({
					url: this.$API.API_URL.INDEXNEW,
					data: data,
					method: 'GET',
					header: { 'Content-Type': 'application/x-www-form-urlencoded' },
					success: res => {
						if(res.data.code == 1000){
							let homeData = res.data
							this.bannerList = homeData.bannerList
							this.listData = homeData.siftNew
						}
					},
					fail: (error) => {
						console.log(error)
					},
					complete() {
						uni.stopPullDownRefresh()
					}
				})
			},
			goDetail(e){
				uni.navigateTo({
					url: `../course/courseDetails?courseUuid=${e.courseUuid}&courseName=${e.courseName}&teacherName=${e.teacherName}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.border-top(@color, @left:0, @top:0){
		&::before {
		    content: "";
		    position: absolute;
		    left: @left;
		    top: @top;
		    right: 0;
		    height: 1px;
		    background-color: @color;
		    transform: translateY(-50%);
		}
	}
	.border-bottom(@color, @left:0, @bottom:0){
		&::after {
		    content: "";
		    position: absolute;
		    left: @left;
		    bottom: @bottom;
		    right: 0;
		    height: 1px;
		    background-color: @color;
		    transform: translateY(-50%);
		}
	}
	
	.home-swiper{
		height: 344rpx;
		image{
			width: 750rpx;
			height: 344rpx;
		}
	}
	.home-title{
		padding-top: 20rpx;
	}
	.uni-list{
		position: relative;
		margin-bottom: 20rpx;
		background-color: #fff;
		.uni-list-cell{
			&:last-child{
				.border-bottom(#cccccc, 20rpx)
			}
			&.uni-list-cell-hover{
				background-color: #f2f2f2;
			}
			.uni-media-list{
				position: relative;
				display: flex;
				padding:20rpx 0 20rpx 20rpx;
				.border-top(#cccccc, 20rpx);
				.uni-media-list-logo{
					width: 144rpx;
					height: 192rpx;
					margin-right: 20rpx;
					image{
						width: inherit;
						height: inherit;
						border-radius: 10rpx;
						vertical-align: top;
					}
				}
				.uni-media-list-body{
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					padding-right: 20rpx;
					.uni-media-list-text-top{
						font-size: 30rpx;
					}
					.uni-media-list-text-body{
						color: #777;
						line-height: 1.612em;
					}
					.uni-media-list-text-bottom{
						display: flex;
						justify-content: space-between;
						color: #777;
					}
				}
			}
		}
		.price{
			color: #ee4758;
		}
	}
</style>
