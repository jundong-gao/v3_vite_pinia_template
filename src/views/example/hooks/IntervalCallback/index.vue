<template>
  interval callback

  <el-button @click="handle">{{ time ? `${time}s后重新发送` : '发送验证码' }}</el-button>
</template>

<script setup lang="ts">
import { useIntervalCallback } from '@/hooks/useIntervalCallback'
import { ElMessage } from 'element-plus'

const { time, handle } = useIntervalCallback(10, () => {
  console.log('::::::::::::::::', 123)
  ElMessage.success('发送成功')
})


</script>