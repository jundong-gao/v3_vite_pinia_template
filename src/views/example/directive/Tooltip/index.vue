<template>
  <el-alert :closable="false" type="success" title="gao-tooltip">
    集成指令插件 <a target="_blank" class="p-1 cursor-pointer underline underline-offset-8 hover:text-blue-600 " href="https://www.npmjs.com/package/gao-tooltip">gao-tooltop</a>
  </el-alert>
  <div v-tooltip class="w-[400px] overflow-hidden text-ellipsis whitespace-nowrap p-2 mb-4 mt-6 rounded-lg shadow-md">深色主题的tooltip Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos nesciunt veritatis reprehenderit ex voluptatum laudantium, deserunt quis quam voluptates nam iure quaerat veniam nisi explicabo optio consequuntur! Corrupti, deserunt.</div>
  <div v-tooltip="{theme: 'light'}" class="w-[400px] overflow-hidden text-ellipsis whitespace-nowrap p-2 mb-4 rounded-lg shadow-md">浅色主题的tooltip Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos nesciunt veritatis reprehenderit ex voluptatum laudantium, deserunt quis quam voluptates nam iure quaerat veniam nisi explicabo optio consequuntur! Corrupti, deserunt.</div>
  <div v-tooltip="{theme: 'light',text: '自定义显示的内容'}" class="w-[400px] overflow-hidden text-ellipsis whitespace-nowrap p-2 mb-4 rounded-lg shadow-md">自定义tooltip的内容的tooltip Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos nesciunt veritatis reprehenderit ex voluptatum laudantium, deserunt quis quam voluptates nam iure quaerat veniam nisi explicabo optio consequuntur! Corrupti, deserunt.</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>