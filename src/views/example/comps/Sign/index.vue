<template>
  <el-alert :closable="false" type="success" title="gao-canvas-sign">
    集成指令插件 <a target="_blank" class="p-1 cursor-pointer underline underline-offset-8 hover:text-blue-600 " href="https://www.npmjs.com/package/gao-canvas-sign">gao-canvas-sign</a>
  </el-alert>
  <sign class="mt-3" ref="signRef" color="#333" background-color="#ccc" :line-width="3" :width="500" :height="300"/>
  <div>
    <base-button type="primary" @click.stop="getUrl">获取临时url</base-button>
    <base-button type="primary" @click.stop="getBlob">获取临时blob对象</base-button>
    <base-button type="primary" @click.stop="reset">重置</base-button>
  </div>
</template>

<script setup lang="ts">
import sign from 'gao-canvas-sign'
let signRef = ref<InstanceType<typeof sign>>()
function getUrl() {
  let url = signRef.value?.getUrl()
  ElMessage.success('获取临时url成功===> 控制台查看')
  console.log(url)
}

function getBlob() {
  return signRef.value?.getBlob().then(blob => {
    ElMessage.success('获取临时blob对象成功===> 控制台查看')
    console.log('blob::::::::::::::::', blob)
  })
}

function reset() {
  signRef.value?.reset()
}
</script>

<style lang="scss" scoped>

</style>