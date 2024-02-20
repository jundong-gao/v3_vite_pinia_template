<template>
    <div>FPS: {{ fps }}   
        <div>
            <el-button type="warning" @click="restart">restart</el-button>
            <el-button type="warning" @click="destory">destory</el-button>
        </div>
    </div>
</template>


<script setup lang="ts">
import { useFps } from '@/hooks/useFps'
let { fps, destory, restart } = useFps({delay: 100, infinite: false})
</script>