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

interface IProps {
  left?: number,
  top?: number,
  width?: number,
  height?: number,
}
let props = defineProps<IProps>()


let left = ref(props.left || 0);
let top = ref(props.top || 0);
let width = ref(props.width || 50);
let height = ref(props.height || 50);

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
  // 获取最外层父元素的宽高
  let outerParentWidth = (e.target as Element).parentElement?.parentElement?.getBoundingClientRect().width || 0
  let outerParentHeight = (e.target as Element).parentElement?.parentElement?.getBoundingClientRect().height || 0

  document.onmousemove = (e: MouseEvent) => {
    if(!isDianDown.value) return
    if(type === 'right-bottom'){
      height.value = dianStart.value.height +  e.clientY - dianStart.value.y;
      width.value = dianStart.value.width +  e.clientX - dianStart.value.x;
      height.value = Math.min(outerParentHeight - top.value, height.value)
      width.value = Math.min(outerParentWidth - left.value, width.value)
    }
    if(type === 'left-top') {
      left.value = Math.max(dianStart.value.left +  e.clientX - dianStart.value.x, 0);
      top.value = Math.max( dianStart.value.top +  e.clientY - dianStart.value.y, 0);
      if(left.value > 0) {
        width.value = dianStart.value.width -  e.clientX + dianStart.value.x;
      }
      if(top.value > 0) {
        height.value = dianStart.value.height -  e.clientY + dianStart.value.y;
      }
    }
    if(type === 'left-bottom') {
      left.value = dianStart.value.left +  e.clientX - dianStart.value.x;
      left.value = Math.max(left.value, 0);

      if(left.value > 0) {
        width.value = dianStart.value.width -  e.clientX + dianStart.value.x;
      }

      height.value = dianStart.value.height +  e.clientY - dianStart.value.y;

      if(height.value > outerParentHeight - top.value) height.value = outerParentHeight - top.value;
      
    }
    if(type === 'right-top') {
      top.value = dianStart.value.top +  e.clientY - dianStart.value.y;
      top.value = Math.max(top.value, 0);


      width.value = dianStart.value.width +  e.clientX - dianStart.value.x;

      if(top.value > 0) {
        height.value = dianStart.value.height -  e.clientY + dianStart.value.y;
      }

      if(width.value > outerParentWidth - left.value) width.value = outerParentWidth - left.value;

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