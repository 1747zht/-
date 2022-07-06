<template>
	<ul class="app-header-nav">
		<li class="home">
			<router-link to="/">首页</router-link>
		</li>
		<li v-for="topCategory in category.list" :key="topCategory.id" @mouseenter="open(topCategory.id)"
			@mouseleave="close(topCategory.id)">
			<router-link :to="`/category/${topCategory.id}`" @click="close(topCategory.id)">
				{{ topCategory.name }}
			</router-link>
			<!-- 二级菜单 -->
			<div class="layer" :class="{ open: topCategory.open }">
				<ul>
					<li v-for="subCategory in topCategory.children" :key="subCategory.id">
						<router-link :to="`/category/sub/${subCategory.id}`" @click="close(topCategory.id)">
							<img :src="subCategory.picture" alt="">
							<p>{{ subCategory.name }}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</li>
	</ul>
</template>
<script>
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const category = store.state.category
    const open = (id) => {
      store.commit('category/open', id)
    }
    const close = (id) => {
      store.commit('category/close', id)
    }
    return { category, open, close }
  }
}
</script>
<style scope lang="less">
.app-header-nav {
	display: flex;
	justify-content: space-around;
	width: 820px;
	padding-left: 40px;
	z-index: 998;
	position: relative;

	>li {
		text-align: center;
		margin-right: 40px;
		width: 38px;

		>a {
			font-size: 16px;
			height: 32px;
			line-height: 32px;
			display: inline-block;
		}

		&:hover {
			>a {
				color: #27BA9B;
				border-bottom: 1px solid #27Ba9B;
			}
		}
	}
}

.layer {
	width: 1240px;
	background-color: #fff;
	position: absolute;
	left: -200px;
	top: 56px;
	height: 0;
	overflow: hidden;
	opacity: 0;
	box-shadow: 0 0 5px #ccc;
	transition: all 0.2s 0.1s;

	&.open {
		height: 132px;
		opacity: 1;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		/* 允许换行 */
		padding: 0 70px;
		align-items: center;
		height: 132px;

		>li {
			width: 110px;
			text-align: center;

			img {
				width: 60px;
				height: 60px;
			}

			p {
				padding-top: 10px;
			}

			&:hover {
				p {
					color: #27BA9B;
				}
			}
		}
	}
}
</style>
