<template>
  <ul className="app-header-nav">
    <!--    @mouseenter="open(top.id)" @mouseleave="close(top.id)"-->
    <li>
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li
      v-for="item in category.list"
      :key="item.id"
      @mouseenter="open(item.id)"
      @mouseleave="close(item.id)"
    >
      <RouterLink @click="close(item.id)" :to="`/category/${item.id}`">{{
        item.name
      }}</RouterLink>
      <div class="layer" :class="{ open: item.open }">
        <ul>
          <li v-for="sub in item.children" :key="sub.id">
            <router-link :to="`/category/sub/${sub.id}`">
              <img :src="sub.picture" alt="sub.name" />
              <p>{{ sub.name }}</p>
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
  name: 'AppHeaderNav',
  setup () {
    // 获取store对象
    const store = useStore()
    // 获取分类模块状态
    const category = store.state.category
    /**
     * 指定导航下单的显示与隐藏
     */
    const open = (id) => store.commit('category/open', id)
    const close = (id) => store.commit('category/close', id)
    // 返回组件所需模块
    return {
      category,
      open,
      close
    }
  }
}
</script>

<style scoped lang="less">
.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }

    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      > .open {
        height: 132px;
        opacity: 1;
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
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 70px;
        align-items: center;
        height: 132px;
        li {
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
              color: @xtxColor;
            }
          }
        }
      }
    }
  }
}
</style>
