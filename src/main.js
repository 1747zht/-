import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入重置样式包
import 'normalize.css'
import '@/assets/styles/common.less'
import library from '@/components/library'

createApp(App).use(store).use(router).use(library).mount('#app')
