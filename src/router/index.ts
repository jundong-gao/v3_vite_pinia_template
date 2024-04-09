import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/store/useUserStore'

const routes: Array<RouteRecordRaw> = [
    {path: '/:pathMatch(.*)*', redirect: '/'},
    {path: '/', component: () => import('@/layout/index.vue'), redirect: '/home', children: [
        {path: '/home', meta: {title: '简介', icon: 'i-ep-location'}, component: () => import('@/views/example/Home/index.vue')},
        {path: '/comps', meta: {title: '组件'}, redirect: '/comps/form', 
            children: [
                {path: '/comps/form', meta: {title: '表单'}, component: () => import('@/views/example/comps/From/index.vue')},
                {path: '/comps/table', meta: {title: '表格'}, component: () => import('@/views/example/comps/Table/index.vue')},
                {path: '/comps/dialog', meta: {title: '模态框'}, component: () => import('@/views/example/comps/Dialog/index.vue')},
                {path: '/comps/watermark', meta: {title: '水印'}, component: () => import('@/views/example/comps/WaterMark/index.vue')},
            ]
        },
        {path: '/hooks', meta: {title: 'hooks'}, redirect: '/hooks/fps', 
            children: [
                {path: '/hooks/pfs', meta: {title: '渲染帧'}, component: () => import('@/views/example/hooks/Fps/index.vue')},
                {path: '/hooks/debounce', meta: {title: '防抖'}, component: () => import('@/views/example/hooks/Debounce/index.vue')},
                {path: '/hooks/vmodel', meta: {title: 'vmodel'}, component: () => import('@/views/example/hooks/VModel/index.vue')},
                {path: '/hooks/uuid', meta: {title: 'uuid'}, component: () => import('@/views/example/hooks/UUID/index.vue')},
                {path: '/hooks/intervalCallback', meta: {title: 'intervalCallback'}, component: () => import('@/views/example/hooks/IntervalCallback/index.vue')},
            ]
        },
        {path: '/directive', meta: {title: '指令'}, redirect: '/directive/tooltip', 
            children: [
                {path: '/directive/tooltip', meta: {title: 'tooltip'}, component: () => import('@/views/example/directive/Tooltip/index.vue')},
            ]
        },
        {path: '/other', meta: {title: '其他'}, redirect: '/other/readbase64', 
            children: [
                {path: '/other/readbase64', meta: {title: '读取文件原始内容'}, component: () => import('@/views/example/other/ReadBase64/index.vue')},
                {path: '/other/sendRequest', meta: {title: '发送请求'}, component: () => import('@/views/example/other/SendRequest/index.vue')},
                {path: '/other/uploadFace', meta: {title: '修改头像'}, component: () => import('@/views/example/other/UploadFace/index.vue')},
            ]
        },
        {path: '/test', meta: {title: '测试', hideMenu: true}, component: () => import('@/views/test/index.vue')},
    ]},
    {path: '/login', component: () => import('@/views/Login/index.vue')}
]
const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

// 路由白名单
const allowList: string[] = ['/login']

router.beforeEach((to, from, next) => {
    const user_store = useUserStore()
    console.log('全局路由拦截::::::::::::::::to, from', to, from)
    // 是否在白名单内
    if(allowList.includes(to.path)) return next()
    // 是否登录
    if(!user_store.$state.userInfo.token) return next('/login')
    next()
})

export default router