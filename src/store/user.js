const user = {
  // 使用命名空间模块
  namespaced: true,
  state () {
    return {
      profile: {
        id: '',
        name: '',
        account: '',
        token: ''
      }
    }
  },
  mutations: {
    setProfile (state, payload) {
      // 判断payload对象是否为空
      // object.key()返回对象中的每一项key的数组
      if (Object.keys(payload).length !== 0) {
        state.profile = {
          ...state.profile,
          ...payload
        }
      } else {
        state.profile = {
          id: '',
          name: '',
          account: '',
          token: ''
        }
      }
    },
    clearProfile (state) {
      state.profile = {
        id: '',
        name: '',
        account: '',
        token: ''
      }
    }
  },
  actions: {

  },
  getters: {

  }
}
export default user
