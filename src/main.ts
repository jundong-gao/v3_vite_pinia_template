import { createApp } from 'vue'
import '@/styles/flex.css'
import '@/styles/reset.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '@/styles/tailwind.css'
import 'element-plus/dist/index.css'
import { tooltip } from 'gao-tooltip'


const app = createApp(App)
// pinia状态管理
const pinia = createPinia()
// pinia持久化插件
pinia.use(piniaPluginPersistedstate)

// tooltip指令
app.use(tooltip, {
  maxWidth: 500,
  delay: 100,
  theme: 'dark'
})

app.use(pinia)
app.use(router)

app.mount('#app')
