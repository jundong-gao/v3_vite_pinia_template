<template>
    读取未知文件原始内容（base64）
    <img src="@/assets/img.base64?raw" alt="">

    <el-button @click="sendAxios">发送请求</el-button>
</template>


<script setup lang="ts">
import base64 from '@/assets/img.base64?raw'
import { test } from '@/api/test'
console.log(base64)


function sendAxios() {
    test({page: 20, pageSize: 30}).then(res => {
        console.log('请求数据', res.data)
    })
}
</script>