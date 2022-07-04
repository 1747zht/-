// 默认图片
import defaultImg from '@/assets/images/200.png'
const lazy = {
  mounted (el, binding) {
    // 创建元素监听对象
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      // 判断元素是否进入可视区
      if (isIntersecting) {
        // 停止监听
        observer.unobserve(el)
        // 给元素添加图片的src属性
        el.src = binding.value
        el.onerror = () => {
          // 显示默认产品图片
          el.src = defaultImg
        }
      }
    })
    // 绑定需要监听的元素
    observer.observe(el)
  }
}
export default lazy
