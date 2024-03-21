<template>
    <div class="layout">
        <div class="top flex-jasc">
            <div class="flex-aic">
                <div class="top-title">GAdmin</div>
            </div>
            <div class="flex items-center">
                <a target="_blank" class="link-item flex items-center cursor-pointer" href="https://github.com/jundong-gao/v3_vite_pinia_template.git">
                    <img src="../assets/github.svg" class="link-item-icon"> 
                </a>
                <el-dropdown @command="dropDownCommand">
                    <div class="flex-aic cursor-pointer outline-0">
                        <div class="top-face mr-[10px]"></div>
                        <div>{{ user_store.$state.userInfo.username }}</div>
                    </div>
                    <template v-slot:dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="logout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                    
                </el-dropdown>
            </div>
        </div>
        <div class="layout-main flex">
            <div class="menu">
                <div class="menu-btn flex-jac" @click="isCollapse = !isCollapse">
                    <el-icon v-if="isCollapse" color="#333"><i-ep-DArrowRight /></el-icon>
                    <el-icon v-if="!isCollapse" color="#333"><i-ep-DArrowLeft /></el-icon>
                </div>
                <base-menu class="menu-real" :isCollapse="isCollapse"></base-menu>
            </div>
            <div class="content flex-grow">
                <div class="content-routerview">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useUserStore } from '@/store/useUserStore'
let isCollapse = ref(false)

const user_store = useUserStore()

function logout() {
  user_store.$reset()
  router.replace('/login')
}

function dropDownCommand(command: string){
    switch(command) {
        case 'logout':
            logout()
            break;
        default:
            break;
    }
}

</script>

<style lang="scss" scoped>
@import './style.scss'
</style>

