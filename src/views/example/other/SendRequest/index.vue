<template>
    <el-button @click="sendAxios">发送请求</el-button>
</template>


<script setup lang="ts">
import { test } from '@/api/test'
import { ElMessage } from 'element-plus'


function sendAxios() {
    test({page: 20, pageSize: 10}).then(res => {
        console.log('请求数据', res.data)
        ElMessage.success(JSON.stringify(res.data))
    })
}
</script>