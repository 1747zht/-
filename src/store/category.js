import { getCategoriesApi } from '@/api/home'
import { topCategories } from '@/api/constants'
const category = {
  namespaced: true,
  state () {
    return {
      list: topCategories.map((item) => ({ name: item }))
    }
  },
  mutations: {
    setCategories (state, payload) {
      state.list = payload
    },
    // 显示当前二级导航
    open (state, id) {
      const target = state.list.find((item) => (item.id === id))
      target.open = true
    },
    // 隐藏当前二级导航
    close (state, id) {
      const target = state.list.find((item) => (item.id === id))
      target.open = false
    }
  },
  actions: {
    async getCategories ({ commit }) {
      const data = await getCategoriesApi()
      data.result.forEach((item) => (item.open = false))
      commit('setCategories', data.result)
    }
  }
}
export default category
