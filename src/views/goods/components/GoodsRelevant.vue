<template>
  <div class="goods-relevant">
    <div class="header">
      <i class="icon"></i>
      <!--      {{ goodsId ? "同类商品推荐" : "猜你喜欢" }}-->
      <span class="title">同类商品推荐</span>
    </div>
    <!-- 此处使用改造后的xtx-carousel.vue -->
    <XtxCarousel :carousels="carousels" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { getRelevantGoods } from '@/api/goods'

export default {
  name: 'GoodsRelevant',
  props: {
    goodsId: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const carousels = useGoodsRelevant(props.goodsId)
    return { carousels }
  }
}
function useGoodsRelevant (goodsId) {
  //  轮播图需要的数据结构[[{}],[{}],[{}]]
  const carousels = ref([])
  //  发送请求获取数据
  getRelevantGoods(goodsId).then((data) => {
    // 每页显示4条数据
    const size = 4
    // 一共有多少条数据
    const total = Math.ceil(data.result.length / size)
    carousels.value = []
    // 组织数据结构
    for (let i = 0; i < total; i++) {
      //  第一页开始 0-3；第二页 4-7 第三页 8-11
      // 取到哪 i*size + size, 由于 slice 方法在截取时不包含第二个参数位置的元素, 所以是 + size, 不是 + size - 1
      carousels.value.push(data.result.slice(i * size, i * size + size))
    }
    // console.log(data);
  })
  return carousels
}
</script>

<style scoped lang="less">
.goods-relevant {
  background: #fff;
  min-height: 460px;
  margin-top: 20px;
  .header {
    height: 80px;
    line-height: 80px;
    padding: 0 20px;
    .title {
      font-size: 20px;
      padding-left: 10px;
    }
    .icon {
      width: 16px;
      height: 16px;
      display: inline-block;
      border-top: 4px solid @xtxColor;
      border-right: 4px solid @xtxColor;
      box-sizing: border-box;
      position: relative;
      transform: rotate(45deg);
      &::before {
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 2px;
        background: lighten(@xtxColor, 40%);
      }
    }
  }
}
.goods-relevant {
  :deep(.xtx-carousel) {
    height: 380px;
    .carousel {
      &-indicator {
        bottom: 30px;
        span {
          &.active {
            background: @xtxColor;
          }
        }
      }
      &-btn {
        top: 110px;
        opacity: 1;
        background: rgba(0, 0, 0, 0);
        color: #ddd;
        i {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
