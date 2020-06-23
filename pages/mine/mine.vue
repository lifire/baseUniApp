<template>
	<view class="mine">
		<u-cell-group>
			<u-cell-item  title="夕阳无限好" arrow-direction="down">
				<u-icon slot="icon" size="32" name="search"></u-icon>
				<u-badge count="99" :absolute="false" slot="right-icon"></u-badge>
				<!-- <u-switch slot="right-icon" v-model="checked"></u-switch> -->
			</u-cell-item>
			<u-cell-item icon="setting-fill" title="只是近黄昏"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: true
			}
		}
	}
</script>

<style>
</style>
