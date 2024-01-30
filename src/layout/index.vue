<template>
    <div class="mt-[10px] box-border border border-[red] border-solid">layout</div>
    <el-button type="primary" @click="logout">退出</el-button>
    <div>用户名：
      <el-input readonly :value="user_store.$state.userInfo.username"></el-input>
    </div>
    <el-select>
      <el-option label="选项" value="1"></el-option>
    </el-select>
    <router-view></router-view>
</template>

<script setup lang="ts">
import router from '@/router';
import userStore from '@/store/User'
const user_store = userStore()

function logout() {
  user_store.$reset()
  router.replace('/login')
}
</script>