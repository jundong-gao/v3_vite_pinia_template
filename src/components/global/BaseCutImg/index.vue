<template>
  <div class="base-cut-img">
    <slot></slot>
    <div class="base-cut-img-mask" :style="maskStyle" @mousedown.stop="mousedown">
      <div class="base-cut-img-btns-item left-top" @mousedown.stop="dianDown($event, 'left-top')"></div>
      <div class="base-cut-img-btns-item left-bottom"  @mousedown.stop="dianDown($event, 'left-bottom')"></div>
      <div class="base-cut-img-btns-item right-top" @mousedown.stop="dianDown($event, 'right-top')"></div>
      <div class="base-cut-img-btns-item right-bottom" @mousedown.stop="dianDown($event, 'right-bottom')"></div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';

let left = ref(0);
let top = ref(0);
let width = ref(50);
let height = ref(50);

let maskStyle = computed(() => ({
  width: `${width.value}px`, 
  height: `${height.value}px`, 
  left: `${left.value}px`, 
  top: `${top.value}px`
}))

let start = ref({
  clientX: 0,
  clientY: 0,
  left: 0,
  top: 0
})

let can_move = ref(false)
const mousedown = (e: MouseEvent) => {
  can_move.value = true
  start.value.clientX = e.clientX;
  start.value.clientY = e.clientY;
  start.value.left = left.value;
  start.value.top = top.value;
  let parentWidth = (e.target as Element).parentElement?.clientWidth || 0
  let parentHeight = (e.target as Element).parentElement?.clientHeight || 0

  document.onmousemove = (e: MouseEvent) => {
    left.value = Math.max(0, start.value.left + e.clientX - start.value.clientX);
    top.value = Math.max(0, start.value.top + e.clientY - start.value.clientY);

    left.value = Math.min(parentWidth - width.value, left.value)
    top.value = Math.min(parentHeight - height.value, top.value)
  }

  document.onmouseup = () => {
    can_move.value = false
    document.onmousemove = null;
    document.onmouseup = null;
  }
}


let dianStart = ref({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  left: 0,
  top: 0
})
let isDianDown = ref(false)
type mousetype = 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom'
const dianDown = (e: MouseEvent, type: mousetype) => {
  dianStart.value.x = e.clientX;
  dianStart.value.y = e.clientY;
  dianStart.value.width = width.value;
  dianStart.value.height = height.value;
  dianStart.value.left = left.value;
  dianStart.value.top = top.value;
  isDianDown.value = true

  document.onmousemove = (e: MouseEvent) => {
    if(!isDianDown.value) return
    if(type === 'right-bottom'){
      height.value = dianStart.value.height +  e.clientY - dianStart.value.y;
      width.value = dianStart.value.width +  e.clientX - dianStart.value.x;
    }
    if(type === 'left-top') {
      left.value = dianStart.value.left +  e.clientX - dianStart.value.x;
      top.value = dianStart.value.top +  e.clientY - dianStart.value.y;
      width.value = dianStart.value.width -  e.clientX + dianStart.value.x;
      height.value = dianStart.value.height -  e.clientY + dianStart.value.y;
    }
    if(type === 'left-bottom') {
      left.value = dianStart.value.left +  e.clientX - dianStart.value.x;
      width.value = dianStart.value.width -  e.clientX + dianStart.value.x;
      height.value = dianStart.value.height +  e.clientY - dianStart.value.y;
    }
    if(type === 'right-top') {
      top.value = dianStart.value.top +  e.clientY - dianStart.value.y;
      width.value = dianStart.value.width +  e.clientX - dianStart.value.x;
      height.value = dianStart.value.height -  e.clientY + dianStart.value.y;
    }
  }

  document.onmouseup = () => {
    isDianDown.value = false
    document.onmousemove = null;
    document.onmouseup = null;
  }

}



defineExpose({
  maskStyle: {
    left,
    top,
    width,
    height
  }
})

</script>


<style lang="scss" scoped>
@import './style.scss';
</style>