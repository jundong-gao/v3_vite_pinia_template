<template>
    读取未知文件原始内容（base64）
    <img src="@/assets/img.base64?raw">
    <div class="break-words">{{ base64 }}</div>
</template>


<script setup lang="ts">
import base64 from '@/assets/img.base64?raw'
</script>