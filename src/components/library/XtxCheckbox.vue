<template>
	<div class="xtx-checkbox" @click="toggle">
		<i class="iconfont icon-checked" v-if="isChecked"></i>
		<i class="iconfont icon-unchecked" v-if="!isChecked"></i>
		<span v-if="$slots.default">
			<slot></slot>
		</span>
	</div>
</template>
<script>
import { useVModel } from '@vueuse/core'
export default {
  name: 'XtxCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    // 复选框的选择状态
    // useVModel函数代理了父子之间的数据交互
    // 使用 uesVModel 将 props 中的 modelValue 实现双向数据绑定并返回一个新的响应式数据
    // useVModel 方法接收三个参数，
    // 参数一：自定义属性 props 接收父组件传递过来的通过 v-model 双向绑定的数据
    // 参数二：props 里面需要传递的数据
    // 参数三：emit 绑定的数据需要通过 emit 事件通知父组件
    const isChecked = useVModel(props, 'modelValue', emit)
    const toggle = () => {
      isChecked.value = !isChecked.value
    }
    return { toggle, isChecked }
  }
}
</script>
<style lang="less" scoped>
.xtx-checkbox {
	display: inline-block;
	margin-right: 2px;

	.icon-checked {
		color: #27BA9B;

		~span {
			color: #27BA9B
		}
	}

	i {
		position: relative;
		top: 1px;
	}

	span {
		margin-left: 2px;
	}
}
</style>
