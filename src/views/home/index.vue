<template>
  <AppLayout>
    <div class="container">
      <!-- 轮播图 -->
      <HomeBanner />
      <!-- 分类 -->
      <HomeCategory />
    </div>
    <!-- 新鲜好物 -->
    <HomeNew />
    <!-- 人气推荐 -->
    <HomeHot />
    <!-- 热门品牌 -->
    <HomeBrand />
    <!-- 产品专区 -->
    <HomeProduct />
    <!-- 最新专题 -->
    <HomeSpecial />
  </AppLayout>
</template>
<script>
import AppLayout from '@/components/AppLayout.vue'
import HomeBanner from './component/HomeBanner.vue'
import HomeBrand from './component/HomeBrand.vue'
import HomeCategory from './component/HomeCategory'
import HomeNew from './component/HomeNew.vue'
import HomeHot from './component/HomeHot.vue'
import HomeProduct from './component/HomeProduct.vue'
import HomeSpecial from './component/HomeSpecial.vue'
export default {
  name: 'Home',
  components: {
    AppLayout,
    HomeBanner,
    HomeBrand,
    HomeCategory,
    HomeNew,
    HomeHot,
    HomeProduct,
    HomeSpecial
  }
}
</script>
<style>
</style>
