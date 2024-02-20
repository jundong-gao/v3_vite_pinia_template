<template>
    <div class="layout">
        <div class="top flex-jasc">
            <div class="flex-aic">
                <div class="top-title">GAdmin</div>
            </div>
            <div>
                <el-dropdown @command="dropDownCommand">
                    <div class="top-face"></div>
                    <template v-slot:dropdown>
                        <el-dropdown-menu>
                            <!-- <el-dropdown-item command="userinfo">个人信息</el-dropdown-item> -->
                            <el-dropdown-item command="logout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                    
                </el-dropdown>
            </div>
        </div>
        <div class="layout-main flex">
            <div class="menu">
                <div class="menu-btn flex-jac" @click="isCollapse = !isCollapse">
                    <el-icon v-if="isCollapse" color="#333"><DArrowRight /></el-icon>
                    <el-icon v-if="!isCollapse" color="#333"><DArrowLeft /></el-icon>
                </div>
                <base-menu class="menu-real" :isCollapse="isCollapse"></base-menu>
            </div>
            <div class="content flex-grow">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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

