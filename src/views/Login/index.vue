<template>
  <div class="login-page flex-jac">
      <div class="login-container">
        <div class="login-logo"></div>
        <el-form :model="userinfo" :rules="userinfoRules">
          <base-form :row-num="1" :columns="columns" :form-data="userinfo"></base-form>
        </el-form>
        <el-button type="primary" class="login-btn" @click="doLogin">登录</el-button>
      </div>
  </div>
</template>


<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from '@/store/useUserStore';
import { ref } from "vue";

const router = useRouter();

const user_store = useUserStore();

const userinfo = ref({
  username: 'admin',
  password: '123456'
})

const columns = ref([
  {label: '', key: 'username', type: 'input', placeholder: '请输入用户名'},
  {label: '', key: 'password', type: 'password', placeholder: '请输入密码'},
])
const userinfoRules = ref({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

function doLogin() {
  user_store.setUserInfo({username: 'Admin', age: 18, token: '123456'})
  user_store.setAddress('修改之后的地址')
  user_store.$state.weatherInfo = {city: '杭州', temperature: '20'}
  //  跳转到首页
  router.replace('/')
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>