<template>
  <div class="base-water-mark-container" ref="parentRef">
    <slot></slot>
  </div>
</template>


<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useWaterMarkBg, IWaterMarkConfig } from '@/hooks/useWaterMarkBg'


let props = withDefaults(defineProps<{
  config: IWaterMarkConfig
}>(), {
  config: () => ({
    text: '测试水印',
    color: '#999',
    fontSize: 14,
    gap: 40,
    zIndex: 9999
  })
})

let config = { ...props.config }


let parentRef = ref(null as HTMLElement | null)
let bg = useWaterMarkBg(config)
let div = null as HTMLElement | null

const resetMark = () => {
  if(!parentRef.value) return
  let { base64, size } = bg
  if(div) div.remove()
  div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.backgroundImage = `url(${base64})`
  div.style.backgroundSize = `${size}px ${size}px`
  div.style.backgroundRepeat = 'repeat'
  div.style.zIndex = String(config.zIndex)
  div.style.inset = '0'
  div.style.pointerEvents = 'none'
  parentRef.value.appendChild(div)
}


let ob = new MutationObserver((entries) => {
  for (const entry of entries) {
    for (const node of entry.removedNodes) {
      if(node === div) { // 删除
        resetMark()
      }
    }
    if(entry.target === div) { // 修改属性
      resetMark()
    }
  }

  
})

onMounted(() => {
  resetMark()
  ob.observe(parentRef.value!, {
    childList: true,
    subtree: true,
    attributes: true
  })
})

onUnmounted(() => {
  ob.disconnect()
})






</script>


<style lang="scss" scoped>
@import './style.scss'
</style>