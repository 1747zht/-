<template>
<AppLayout>
  <div class="container">
    <XtxBread>
      <xtx-bread-item path="/">首页</xtx-bread-item>
      <transition name="fade-right" mode="out-in">
        <!-- mode属性指定动画的执行顺序 默认同时执行(in-out)先入场后两场 out-in先离场后入场 -->
        <!-- 动画的执行条件是组件的挂载和卸载 -->
        <!-- key属性是为了让Vue虚拟DOM树发生变化(重新渲染)从而实现执行动画 -->
        <xtx-bread-item :key="category?.id">{{category?.name}}</xtx-bread-item>
      </transition>
    </XtxBread>
    <XtxCarousel :carousels="banners" style="height: 500px" />
    <ShowSubCategory :subCategories="category.children" v-if="category"/>
    <RecommendGoods/>
  </div>
</AppLayout>
</template>
<script>
import AppLayout from '@/components/AppLayout.vue'
import useBanners from '@/hooks/useBanners'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import ShowSubCategory from './components/ShowSubCategory.vue'
import RecommendGoods from './components/RecommendGoods.vue'
export default {
  components: { AppLayout, ShowSubCategory, RecommendGoods },
  setup () {
    // 轮播图数据
    const { banners, getData } = useBanners()
    getData()
    const category = useBread()
    return { banners, category }
  }
}
// 获取面包屑组件数据
function useBread () {
  const route = useRoute()
  const store = useStore()
  return computed(() => {
    return store.state.category.list.find((item) => (item.id === route.params.id))
  })
}
</script>
<style lang="less" scoped>
// 面包屑导航动画
.fade-right {
  &-enter-from,
  &-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.5s;
  }

  &-enter-to,
  &-leave-from {
    transform: none;
    opacity: 1;
  }
}
</style>
