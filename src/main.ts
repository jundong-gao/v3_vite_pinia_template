import { createApp, ComponentOptions } from 'vue'
import '@/styles/flex.css'
import '@/styles/reset.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import elementUI from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/tailwind.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import globalComps from '@/components/global/index'


const app = createApp(App)
// pinia状态管理
const pinia = createPinia()
// pinia持久化插件
pinia.use(piniaPluginPersistedstate)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

for (const [key, component] of Object.entries(globalComps)) {
    app.component(key, component as ComponentOptions)
}

app.use(elementUI)
app.use(pinia)
app.use(router)

app.mount('#app')
