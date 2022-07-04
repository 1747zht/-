import { createStore } from 'vuex'
// 让在vuex中管理的状态数据同时存储在本地localStorage。可免去自己存储环节
import createPersistedState from 'vuex-persistedstate'
import user from '@/store/user'
import cart from '@/store/cart'
import category from '@/store/category'

// 创建vuex仓库并导出
export default createStore({
  state: {
  // 数据
  },
  mutations: {
    // 改变数据函数
  },
  actions: {
    // 请求数据函数

  },
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedState({
      // 指定需要存储的模块
      paths: ['user', 'cart'],
      // 指定数据存储在localStorage中的键
      key: 'rabbit-client-pc'
    })
  ]

})
