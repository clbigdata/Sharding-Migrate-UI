import {createApp} from 'vue'
import './assets/style.css'
// @ts-ignore
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.ts'
import * as AntIconsVue from '@ant-design/icons-vue'

// @ts-ignore
// import axios from './utils/axios.ts';

const app = createApp(App);
for (const [key, component] of Object.entries(AntIconsVue)) {
    app.component(key, component)
}
// app.config.globalProperties.$axios = axios
app.use(ElementPlus)
app.mount('#app')
