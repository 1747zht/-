<template>
	<HomePanel title="热门品牌" subTitle="国际经典 品质保证" ref="target">
		<template v-slot:right>
			<a @click="toggle(-1)" class="iconfont icon-angle-left prev" :class="{ disabled: currentIndex === 0 }"></a>
			<a @click="toggle(1)" class="iconfont icon-angle-right next"
				:class="{ disabled: (currentIndex + 1) * 5 >= brandData?.length }"></a>
		</template>
		<template v-slot:default>
			<div class="box">
				<ul class="list" v-if="brandData" :style="{ transform: `translateX(${-currentIndex * 1240}px)` }">
					<li v-for="item in brandData" :key="item.id">
						<router-link to="/">
							<img :src="item.picture" :alt="item.name">
						</router-link>
					</li>
				</ul>
			</div>
			<transition name="fade">
				<div class="skeleton" v-if="!brandData">
					<xtx-skeleton class="item" v-for="i in 5" :key="i" animated="scroll" bg="#e4e4e4" width="240px"
						height="305px">
					</xtx-skeleton>
				</div>
			</transition>
		</template>

	</HomePanel>
</template>
<script>
import HomePanel from './HomePanel.vue'
import { getHotBrandApi } from '@/api/home'
import useLazyData from '@/hooks/useLazyData'
import { ref } from 'vue'
export default {
  name: 'HomeBrand',
  components: { HomePanel },
  setup () {
    const { target, result: brandData } = useLazyData(() => (getHotBrandApi(10)))
    return { target, brandData, ...useToggle(brandData.length) }
  }
}
const useToggle = (length = 10) => {
  const currentIndex = ref(0)
  const toggle = (step) => {
    const nextIndex = currentIndex.value + step
    if (nextIndex < 0 || nextIndex >= length / 5) return
    currentIndex.value = nextIndex
  }
  return { currentIndex, toggle }
}
</script>
<style scoped lang="less">
.home-panel {
	background: #f5f5f5;

	.iconfont {
		width: 20px;
		height: 20px;
		background: #ccc;
		color: #fff;
		display: inline-block;
		text-align: center;
		margin-left: 5px;
		background-color: #27BA9B;

		&::before {
			font-size: 12px;
			position: relative;
			top: -2px;
		}

		&.disabled {
			background-color: #ccc;
			cursor: not-allowed;
		}
	}

	.box {
		display: flex;
		width: 100%;
		height: 345px;
		overflow: hidden;
		padding-bottom: 40px;

		.list {
			width: 200%;
			display: flex;
			transition: all 1s;

			li {
				margin-right: 10px;
				width: 240px;

				&:nth-child(5n) {
					margin-right: 0;
				}

				img {
					width: 240px;
					height: 305px;
				}
			}
		}
	}
}
</style>
