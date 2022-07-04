import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const useLazyData = (apiFunction) => {
  // 创建用于获取元素的ref
  const target = ref()
  // 创建用于存储数据的变量
  const result = ref()
  // 监听元素是否进入可视区
  // stop是停止观察是否进入或移出可视区域的行为
  // target是观察的目标dom的容器，而且是vue3.0方式绑定的dom元素
  // isIntersecting 是否进入可视区 true是进入 false是移出
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        stop()
        console.log('进入可视区')
        if (result.value) return
        apiFunction().then((data) => { result.value = data.result })
      }
    },
    { threshold: 0 }
  )
  return { result, target }
}
export default useLazyData
