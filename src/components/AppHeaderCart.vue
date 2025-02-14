<template>
  <div class="cart">
    <router-link class="curr" to="/cart">
      <i class="iconfont icon-cart"></i><em>{{ effectiveGoodsCount }}</em>
    </router-link>
    <div class="layer" v-if="effectiveGoodsCount > 0 && !isCarPage">
      <div class="list">
        <div class="item" v-for="goods in effectiveGoodsList" :key="goods.id">
          <RouterLink to="">
            <img :src="goods.picture" alt="" />
            <div class="center">
              <router-link :to="`/goods/${goods.id}`">
                <p class="name ellipsis-2">{{ goods.name }}</p>
              </router-link>

              <p class="attr ellipsis">{{ goods.attrsText }}</p>
            </div>
            <div class="right">
              <p class="price">&yen;{{ goods.nowPrice }}</p>
              <p class="count">{{ goods.count }}</p>
            </div>
          </RouterLink>
          <i
            @click="deleteGoodsOfCartBySkuId(goods.skuId)"
            class="iconfont icon-close-new"
          ></i>
        </div>
      </div>
      <div class="foot">
        <div class="total">
          <p>共 {{ effectiveGoodsCount }} 件商品</p>
          <p>&yen;{{ effectiveGoodsPrice }}</p>
        </div>
        <XtxButton type="plain">
          <RouterLink to="/cart">去购物车结算</RouterLink>
        </XtxButton>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import Message from '@/components/library/Message'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export default {
  name: 'AppHeaderCart',
  setup () {
    //  获取store 对象
    const store = useStore()
    // 获取路由信息
    const route = useRoute()
    // 获取可购买商品列表
    const effectiveGoodsList = computed(
      () => store.getters['cart/effectiveGoodsList']
    )
    // 获取购买商品数量
    const effectiveGoodsCount = computed(
      () => store.getters['cart/effectiveGoodsCount']
    )
    // 获取可购买商品总价
    const effectiveGoodsPrice = computed(
      () => store.getters['cart/effectiveGoodsPrice']
    )
    // console.log(effectiveGoodsList, effectiveGoodsCount, effectiveGoodsPrice);
    // 根据 skuId 删除购物车中的商品
    const deleteGoodsOfCartBySkuId = (skuId) => {
      store.dispatch('cart/deleteGoodsOfCartBySkuId', skuId).then(() => {
        Message({ type: 'success', text: '购物车的商品删除成功' })
      })
    }
    // 是否为购物车页面
    const isCarPage = ref(route.path === '/cart')
    // 路由更新时 判断是否为购物车
    onBeforeRouteUpdate((to) => {
      isCarPage.value = to.path === '/cart'
    })
    return {
      effectiveGoodsList,
      effectiveGoodsCount,
      effectiveGoodsPrice,
      deleteGoodsOfCartBySkuId,
      isCarPage
    }
  }
}
</script>
<style scoped lang="less">
.cart {
  width: 50px;
  position: relative;
  z-index: 600;
  .curr {
    height: 32px;
    line-height: 32px;
    text-align: center;
    position: relative;
    display: block;
    .icon-cart {
      font-size: 22px;
    }
    em {
      font-style: normal;
      position: absolute;
      right: 0;
      top: 0;
      padding: 1px 6px;
      line-height: 1;
      background: @helpColor;
      color: #fff;
      font-size: 12px;
      border-radius: 10px;
      font-family: Arial, serif;
    }
  }
  &:hover {
    .layer {
      opacity: 1;
      transform: none;
    }
  }
  .layer {
    opacity: 0;
    transition: all 0.4s 0.2s;
    transform: translateY(-200px) scale(1, 0);
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50px;
    right: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 4px;
    padding-top: 10px;
    &::before {
      content: "";
      position: absolute;
      right: 14px;
      top: -10px;
      width: 20px;
      height: 20px;
      background: #fff;
      transform: scale(0.6, 1) rotate(45deg);
      box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.1);
    }
    .foot {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 70px;
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      background: #f8f8f8;
      align-items: center;
      .total {
        padding-left: 10px;
        color: #999;
        p {
          &:last-child {
            font-size: 18px;
            color: @priceColor;
          }
        }
      }
    }
  }
  .list {
    height: 310px;
    overflow: auto;
    padding: 0 10px;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #f8f8f8;
      border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background: #eee;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #ccc;
    }
    .item {
      border-bottom: 1px solid #f5f5f5;
      padding: 10px 0;
      position: relative;
      i {
        position: absolute;
        bottom: 38px;
        right: 0;
        opacity: 0;
        color: #666;
        transition: all 0.5s;
      }
      &:hover {
        i {
          opacity: 1;
          cursor: pointer;
        }
      }
      a {
        display: flex;
        align-items: center;
        img {
          height: 80px;
          width: 80px;
        }
        .center {
          padding: 0 10px;
          width: 200px;
          .name {
            font-size: 16px;
          }
          .attr {
            color: #999;
            padding-top: 5px;
          }
        }
        .right {
          width: 100px;
          padding-right: 20px;
          text-align: center;
          .price {
            font-size: 16px;
            color: @priceColor;
          }
          .count {
            color: #999;
            margin-top: 5px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
