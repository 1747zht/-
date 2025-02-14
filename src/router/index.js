import { createRouter, createWebHashHistory } from 'vue-router'
import authGuard from '@/router/authGuard'
import LoginPage from '@/views/login/LoginPage'
import CheckoutPage from '@/views/pay/CheckoutPage'
import OrderView from '@/views/member/order/OrderView'
import OrderListPage from '@/views/member/order/OrderListPage'

const HomePage = () => import('@/views/home/HomePage')
const TopCategoryPage = () => import('@/views/category/TopCategoryPage')
const SubCategoryPage = () => import('@/views/category/SubCategoryPage')
const GoodsDetailPage = () => import('@/views/goods/GoodsDetailPage')
const LoginCallbackPage = () => import('@/views/login/LoginCallbackPage')
const CartPage = () => import('@/views/cart/cartPage')
const PayPage = () => import('@/views/pay/PayPage')
const PayResultPage = () => import('@/views/pay/PayResultPage')
const MemberHomePage = () => import('@/views/member/home/MemberHomePage')
const OrderDetailPage = () => import('@/views/member/order/OrderDetailPage')
const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/category/:id',
    component: TopCategoryPage
  },
  {
    path: '/category/sub/:id',
    component: SubCategoryPage
  },
  {
    path: '/goods/:id',
    component: GoodsDetailPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/login/callback',
    component: LoginCallbackPage
  },
  {
    path: '/checkout/order',
    component: CheckoutPage
  },
  { path: '/cart', component: CartPage },
  {
    path: '/checkout/pay',
    component: PayPage
  },
  {
    path: '/pay/callback',
    component: PayResultPage
  },
  {
    path: '/member/home',
    component: MemberHomePage
  },
  {
    path: '/member/order',
    component: OrderView,
    children: [
      {
        path: '',
        component: OrderListPage
      },
      {
        path: ':id',
        component: OrderDetailPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes,
  linkActiveClass: 'fuzzy-active',
  linkExactActiveClass: 'exact-active'
})

// 检测用户是否登录
router.beforeEach(authGuard)
export default router
