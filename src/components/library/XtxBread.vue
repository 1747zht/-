<script>
import { h } from 'vue'
export default {
  name: 'XtxBread',
  render () {
    // 子组件内容
    const children = []
    // 获取组件默认插槽内容
    const items = this.$slots.default()
    // 遍历插槽内容
    items.forEach((item, index) => {
      children.push(item)
      if (index < items.length - 1) {
        children.push(h('i', { class: 'iconfont icon-angle-right' }))
      }
    })
    return h('div', { class: 'xtx-bread' }, children)
  }
}
</script>
<style scoped lang="less">
.xtx-bread{
	display: flex;
	padding:25px 10px;
	&-item{
		a{
			color:#666;
			transition: all 0.4s;
			&.hover{
				color:#27BA9B;
			}
		}
		i{
			font-size: 12px;
			margin-left: 5px;
			margin-right: 5px;
			line-height: 22px;
		}
	}
}
</style>
