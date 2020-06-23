<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			token: 'aaa'
		}
	}
</script>
<style lang="scss">
	@import  "uview-ui/index.scss";
</style>
<style lang="less">
	/*每个页面公共css */
	body{
		background: #f2f2f2;
		color: #333;
		font-size: 26rpx;
	}
	img{
		max-width: 100%;
		vertical-align: top;
	}
</style>
