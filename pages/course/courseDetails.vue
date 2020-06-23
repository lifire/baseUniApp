<template>
	<view class="course-details">
		<view class="video">
			<video id="myVideo" class="my-video" :src="videoUrl" :poster='videoData.imgPath' object-fit='cover' controls></video>
		</view>
		<view class="courseInfo">
			<view class="title">
				{{coursetitle}}
			</view>
			<view class="teacherName">
				{{teacherName}}
			</view>
		</view>
		<view class="contents">
			<div class="list-info" v-for="(item, wareIndex) in wareList" :key="item.uuid">
				<div class="title">
					<h3>{{item.chapterName}}</h3>
					<i class="iconfont iconxiala1"></i>
				</div>
				<ul>
					<li v-for="(items, chapterIndex) in item.list" :key="items.wareUuid" @click="changeVideo(items.playUrl, items.wareUuid, wareIndex, chapterIndex, items.type)"
					 :class="[(videoPath == items.playUrl && isPlaying) || playingId == items.wareUuid ? 'active' : '']">
						<div>
							<p class="name">{{items.wareName}}</p>
							<p class="time"><i class="iconfont iconguankancishu"></i> {{items.wareTime}}</p>
						</div>
						<template v-if="courseVideoData.price == 0">
							<template v-if="videoPath == items.playUrl && isPlaying">
								<!-- <img class="playing-icon" src="../../public/img/icon_playing.png" alt=""> -->
							</template>
						</template>
						<template v-else>
							<template v-if="playingId == items.wareUuid">
								<i class="iconfont iconyinpin2"></i>
							</template>
							<template v-else-if="items.type == 1 && !isBuy">
								<span class="try-it">试看</span>
							</template>
							<template v-else>
								<i class="iconfont iconlock" v-if="!isBuy"></i>
								<i class="iconfont iconweike" v-else></i>
							</template>
						</template>
					</li>
				</ul>
			</div>
		</view>
		<!-- <view class="course-desc" v-html="videoData.courseDetailDesc"></view> -->
		<rich-text class="course-desc" :nodes="courseDesc"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				courseUuid: '',
				coursetitle: '',
				teacherName: '',

				videoUrl: '',
				courseDesc: '',
				videoData: [],
				wareList: []
			}
		},
		onLoad(option) {
			this.courseUuid = option.courseUuid
			this.coursetitle = option.courseName
			this.teacherName = option.teacherName
			this.getCourseData()
		},
		methods: {
			getCourseData() {
				let data = {
					'courseUuid': this.courseUuid, //课程uuid
					'uuid': '', //用户uuid,是否收藏需要根据用户uuid查询
					'columnUuid': '' //行业课程UUID(用于判断用户购买了行业课程)
				}
				uni.request({
					url: this.$API.API_URL.COMMONCOURSELISTNEW,
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: data,
					success: res => {
						if (res.data.code == 1000) {
							let resdata = res.data
							this.videoData = resdata.courseInfo
							this.videoUrl = resdata.courseInfo.playUrl
							this.wareList = resdata.wareList
							this.courseDesc = resdata.courseInfo.courseDetailDesc.replace(/\<img/gi,
								'<img style="max-width:100%; vertical-align: top;" ')
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>
<style lang="less" scoped>
	.my-video {
		width: 100%;
	}

	.courseInfo {
		margin-bottom: 20rpx;
		padding: 20rpx;
		background-color: #fff;
		line-height: 1.624;

		.title {
			font-size: 28rpx;
		}

		.teacherName {
			font-size: 24rpx;
			color: #777;
		}
	}
	
	//目录列表
	.list-info{
		background-color: #fff;
	  .title{
	    display: flex;
	    justify-content:space-between;
	    align-items: center;
	    padding: 30rpx 20rpx;
	    background: #efefef;
	    h3{
	      font-size: 28rpx;
	      font-weight: normal;
	      color:#686868;
	    }
	    i{
	      font-size: 32rpx;
	      color: #707070;
	    }
	  }
	  ul{
	    list-style: none;
	  }
	  li{
	    position: relative;
	    padding: 28rpx 32rpx 22rpx 22rpx;
	    display: flex;
	    justify-content:space-between;
	    align-items: center;
	    color:#878787;
	    &.active{
	      color:#f95858;
	      i{
	        color:#f95858;
	      }
	    }
	    .playing-icon{
	      width: .32rpx;
	      animation: dong 1s infinite;
	    }
	    &::after{
	      position: absolute;
	      content: '';
	      height: 1px;
	      background: #c9c9c9;
	      left: 22rpx;
	      right: 22rpx;
	      bottom: 0;
	    }
	    &:last-child::after{
	      content: none;
	    }
	    i.iconlock{
	      font-size: 32rpx;
	      color:#333;
	    }
	    .try-it{
	      padding: 3rpx 6rpx;
	      border-radius: 6rpx;
	      color:#5a584c;
	      background: #f9e067;
	    }
	    .name{
	      font-size: 26rpx;
	    }
	    .time{
	      font-size: 22rpx;
	    }
	  }
	}
</style>
