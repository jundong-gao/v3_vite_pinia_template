<template>
  <el-button v-bind="$attrs" @click.stop="clickHandle" :loading="loading">
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
let loading = ref(false)
let props = defineProps({
  onClick: {
    type: Function,
    default: () => {}
  }
})



function clickHandle(e:Event) {
  let result = props.onClick?.(e) || null
  if(result && result instanceof Promise) {
    loading.value = true
    result.finally(() => {
      loading.value = false
    })
  }
}



</script>

<style lang="scss" scoped>

</style>