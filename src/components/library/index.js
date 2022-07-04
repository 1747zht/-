// 批量导入模块，返回值是一个导入函数
// require.context(目录,是否查找子目录,用于查找文件名的正则表达式)
import lazy from '@/components/directive/lazy'
const importFn = require.context('./', false, /\.vue$/)
// 使用导入函数的keys方法用于获取匹配成功的文件路径数组
const keys = importFn.keys()
export default {
  install (app) {
    // 遍历文件路径
    keys.forEach((key) => {
      // 导入组件
      const component = importFn(key).default
      app.component(component.name, component)
      console.log(component)
    })
    // 图片懒加载指令
    app.directive('lazy', lazy)
  }
}
