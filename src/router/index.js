import { createRouter, createWebHashHistory } from 'vue-router'
const HomePage = () => import('@/views/home')
const TopCategoryPage = () => import('@/views/category/TopCategoryPage.vue')
const SubCategoryPage = () => import('@/views/category/SubCategoryPage.vue')

const routes = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  // 分类
  {
    path: '/category/:id',
    name: 'Category',
    component: TopCategoryPage
  },
  // 二级分类
  {
    path: '/category/sub/:id',
    name: 'SubCategory',
    component: SubCategoryPage
  }
]

// 创建路由实例
const router = createRouter({
  // 使用hash方式使用路由
  history: createWebHashHistory(),
  routes
})
export default router
