import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import userStore from '@/store/User'
const routes: Array<RouteRecordRaw> = [
    {path: '/:pathMatch(.*)*', redirect: '/'},
    {path: '/', component: () => import('@/layout/index.vue'), redirect: 'home', children: [
        {path: 'home', component: () => import('@/views/Home/index.vue')},
        {path: 'settings', component: () => import('@/views/Settings/index.vue')}
    ]},
    {path: '/login', component: () => import('@/views/Login/index.vue')}
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

// 路由白名单
const allowList: string[] = ['/login']

router.beforeEach((to, from, next) => {
    const user_store = userStore()
    console.log('全局路由拦截::::::::::::::::to, from', to, from)
    // 是否在白名单内
    if(allowList.includes(to.path)) return next()
    // 是否登录
    if(!user_store.$state.userInfo.token) return next('/login')
    next()
})

export default router