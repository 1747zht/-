import { createRouter, createWebHashHistory } from 'vue-router'
const HomePage = () => import('@/views/home')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
]

// 创建路由实例
const router = createRouter({
  // 使用hash方式使用路由
  history: createWebHashHistory(),
  routes
})
export default router
