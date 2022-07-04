<template>
	<HomePanel title="人气推荐" sub-title="人气爆款 不容错过" ref="target">
		<ul class="goods-list">
			<li v-for="item in hotData" :key="item.id">
				<router-link :to="`/goods/${item.id}`">
					<img :src="item.picture" :alt="item.title">
					<p class="name">{{ item.title }}</p>
					<p class="desc">{{ item.alt }}</p>
				</router-link>
			</li>
		</ul>
		<transition name="fade">
			<HomeSkeleton v-if="!hotData" />
		</transition>
	</HomePanel>
</template>
<script>
import HomeSkeleton from './HomeSkeleton.vue'
import HomePanel from './HomePanel.vue'
import useLazyData from '@/hooks/useLazyData'
import { getHotGoodsApi } from '@/api/home'
export default {
  name: 'HomeHot',
  components: { HomeSkeleton, HomePanel },
  setup () {
    const { target, result: hotData } = useLazyData(getHotGoodsApi)
    return { target, hotData }
  }
}
</script>
<style lang="less" scoped>
.goods-list {
	display: flex;
	justify-content: space-between;
	height: 426px;

	li {
		width: 306px;
		height: 406px;
		background-color: #f0f9f4;
		transition: all .5s;
		&:hover {
			transform: translate3d(0, -3px, 0);
			box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
		}

		img {
			width: 306px;
			height: 306px;
		}

		p {
			text-align: center;
			font-size: 22px;
			padding-top: 12px;
		}
		.desc{
			color:#999;
			font-size: 18px;
		}
	}

}
</style>
