<template>
	<Header class="app-header">
		<div class="container">
			<!-- 左侧图片 -->
			<h1 class="logo">
				<router-link to="/"></router-link>
			</h1>
			<!-- 导航 -->
			<AppHeaderNav />
			<!-- 搜索框 -->
			<div class="search">
				<i class="iconfont icon-search"></i>
				<input type="text" placeholder="搜一搜">
			</div>
			<!-- 购物车 -->
			<AppHeaderCart />
		</div>
	</Header>
</template>
<script>
import AppHeaderNav from './AppHeaderNav.vue'
import AppHeaderCart from '@/components/AppHeaderCart'
export default {
  name: 'AppHeader',
  components: {
    AppHeaderNav,
    AppHeaderCart
  }
}
</script>
<style scoped lang="less">
.app-header {
	background-color: #fff;
	.container {
		display: flex;
		align-items: center;
		.logo {
			width: 200px;
			a {
				display: block;
				height: 132px;
				width: 100%;
				text-indent: -9999px;
				/* 文字甩到屏幕看不到的地方 */
				background: url('../assets/images/logo.png') no-repeat center 18px/contain;
			}
		}
	}
}
</style>
