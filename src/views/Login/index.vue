<template>
    登录
    <el-button type="primary" @click="doLogin">登录</el-button>
    {{ user_store }}
</template>


<script setup lang="ts">
import { useRouter } from "vue-router";
import userStore from '@/store/User';
const router = useRouter();

const user_store = userStore();


function doLogin() {
    user_store.setUserInfo({username: '高天', age: 18, token: '123456'})
    user_store.setAddress('修改之后的地址')
    user_store.$state.weatherInfo = {city: '杭州', temperature: '20'}

    //  跳转到首页
    router.push('/')
}
</script>