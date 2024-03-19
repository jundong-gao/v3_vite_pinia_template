<template>
  <el-button @click="sendAxios">普通发送请求</el-button>

  <hr>



  <el-button @click="sendOnce">自动取消上一个未完成的请求</el-button>

  <el-button @click="sendSleep">发送等待时长较长的请求</el-button>
  <el-button @click="cancelAllRequest">取消全部请求</el-button>


</template>


<script setup lang="ts">
import { test, testSleep } from '@/api/test';
import axios, { CancelTokenSource } from 'axios';
import server from '@/utils/axios'
import { ElMessage } from 'element-plus';


function sendAxios() {
  test({ page: 20, pageSize: 10 }).then(res => {
    console.log('请求数据', res.data)
    ElMessage.success(JSON.stringify(res.data))
  })
}


let source: CancelTokenSource

function sendOnce() {
  source && source.cancel('取消请求')
  source = axios.CancelToken.source()
  testSleep({time: 10000, cancelToken: source.token}).then(res => {
    console.log('获取到信息::::::::::::::::', res.msg)
  }).catch(err => {
    ElMessage.error(err.message)
  })
}


function sendSleep() {
  testSleep({time: 10000}).then(res => {
    console.log('获取到信息::::::::::::::::', res.msg)
  }).catch(err => {
    ElMessage.error(err.message)
  })
}

function cancelAllRequest() {
  server.cancelAllRequest('取消全部请求')
}



</script>