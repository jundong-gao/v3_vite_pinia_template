<template>
    <el-button type="primary" @click="debounceTest">test debounce</el-button>
</template>



<script setup lang="ts">
import { useDebounce  } from '@/hooks/useDebounce'
import { ElMessage } from 'element-plus'

console.log('message::::::::::::::::', ElMessage)


function test() {
    console.log('test')
    ElMessage.success('test')
}

let debounceTest = useDebounce(test, 200)


</script>