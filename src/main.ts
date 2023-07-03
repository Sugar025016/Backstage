import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-expect-error-123
import zhCn from 'element-plus/dist/locale/zh-tw.mjs'
import gloablComponent from '@/components'
import router from './router'
import pinia from '@/store'

import '@/styles/index.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:svg-icons-register'
import './permission'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(gloablComponent)
app.use(router)
app.use(pinia)

app.mount('#app')

import axios from 'axios'
axios({
  url: '/api/user/login', //请求地址
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  },
})
