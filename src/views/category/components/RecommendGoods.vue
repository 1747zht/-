<template>
  <div class="ref-goods" v-for="item in topCategory?.children" :key="item.id">
    <div class="head">
      <h3>- {{ item.name }} -</h3>
      <p class="tag">温暖柔软，品质之选</p>
      <XtxMore />
    </div>
    <div class="body">
      <GoodsItem :goods="goods" v-for="goods in item.goods" :key="goods.id" />
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/views/category/components/GoodsItem'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { ref } from 'vue'
import { getTopCategoryById } from '@/api/category'

export default {
  name: 'CommandGoods',
  components: { GoodsItem },
  setup () {
    //  获取路由的信息对象
    const route = useRoute()
    //  用于存储一级分类具体信息
    const { topCategory, getData } = useTopCategory()
    // 向服务器端发送请求获取一级分类数据
    getData(route.params.id)
    return { topCategory }
  }
}
function useTopCategory () {
  //  用于存储一级分类信息的响应式数据
  const topCategory = ref()
  // 用于存储一级分类的信息的方法
  const getData = (id) => {
    //  获取一级分类
    getTopCategoryById(id).then((data) => {
      //  存储一级分类
      topCategory.value = data.result
      // console.log(data.result);
    })
  }
  // 在路由切回之前 获取目标路由参数id 根据id 获取最新的一级分类信息
  onBeforeRouteUpdate((to) => getData(to.params.id))
  return { topCategory, getData }
}
</script>
<style lang="less" scoped>
.ref-goods {
  background-color: #fff;
  margin-top: 20px;
  position: relative;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .head {
    .xtx-more {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .tag {
      text-align: center;
      color: #999;
      font-size: 20px;
      position: relative;
      top: -20px;
    }
  }
  .body {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 65px 30px;
  }
}
</style>
