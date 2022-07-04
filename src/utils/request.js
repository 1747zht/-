import axios from 'axios'
import store from '@/store/index'
import router from '@/router'

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instanceWithToken = axios.create({ baseURL })

// 带有token的请求拦截器
instanceWithToken.interceptors.request.use(config => {
  // const { profile } = store.state.user
  const token = store.state.user.profile.token
  if (token) {
    config.headers.Authorization = `Bear ${token}`
  }
  return config
},
err => {
  return Promise.reject(err)
}
)
// 带有token响应拦截器
instanceWithToken.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log(401)
          store.commit('user/setProfile', {})
          router
            .push('/login')
            .then(() => { console.log('跳转成功') })
            .catch(() => { console.log('跳转失败') })
          break
        default:
          break
      }
    }
    return Promise.reject(error)
  }

)

const instanceWithOutToken = axios.create({ baseURL })
// 不带token的响应拦截器
instanceWithOutToken.interceptors.response.use(res => res.data)

// 生成请求配置
const generateRequestConfig = (url, method, data) => {
  return {
    url,
    method,
    [method === 'get' ? 'params' : 'data']: data
  }
}

export const requestWithToken = (url, method, data) => {
  return instanceWithToken(generateRequestConfig(url, method, data))
}

export const requestWithOutToken = (url, method, data) => {
  return instanceWithOutToken(generateRequestConfig(url, method, data))
}
