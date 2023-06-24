import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import  'element-plus/dist/index.css'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-tw.mjs'

import gloablComponent from '@/components'
import router from './router'


import '@/styles/index.scss'
import 'virtual:svg-icons-register'
const app=createApp(App)
app.use(ElementPlus,{
    locale:zhCn
})
app.use(gloablComponent)
app.use(router)

app.mount('#app')

import axios from 'axios'
axios({
    url:'/api/user/login', //请求地址
    method: 'post', 
    data: {
        username:'admin',
        password:'111111'
    }
})