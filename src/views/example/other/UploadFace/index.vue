<template>
  <div>
    {{ maskStyle }}
    
    <div class="flex">
      <div class="left flex-jac">
        <base-cut-img v-if="imgblob" ref="cutRef"  class="left-img-box" :left="80" :top="80" :width="140" :height="140">
          <img class="left-img" :src="imgblob" draggable="false">
        </base-cut-img>
        <el-upload v-if="!imgblob" accept="image/*" action="#" :show-file-list="false" :http-request="changeImage">
          <el-button type="primary" size="small">选择图片</el-button>
        </el-upload>
      </div>
      <div class="right flex-jac">
        <img class="right-img" :src="previewurl"/>
      </div>
    </div>
    <div class="flex-aic" v-if="imgblob">
      <el-upload  accept="image/*" action="#" :show-file-list="false" :http-request="changeImage">
        <el-button type="primary" size="small">重新选择</el-button>
      </el-upload>

      <el-button class="ml-2 mt-[2px]" type="primary" @click="takeImage" size="small">确定</el-button>
    </div>
    
  </div>
</template>



<script setup lang="ts">

import { computed, ref, Ref } from 'vue'

const cutRef = ref({} as Element | Ref<any>)
const maskStyle = computed(() => cutRef.value?.maskStyle)
const imgblob = ref('')
const previewurl = ref('')

const changeImage = (file: any) => {
  imgblob.value = URL.createObjectURL(file.file)
}



const takeImage = () => {

/**
 * 由于canvas drawImage 使用的是图片原本的像素大小。
 * 页面中对img标签进行了缩放，所以在canvas绘制的时候 像素是有偏差的
 * 因此 先将img画到一个canvas上，然后使用该canvas来绘制最终的图像
 */
 let img = document.querySelector('.left-img') as HTMLImageElement;

 let imgcanvas = document.createElement('canvas');
 let imgcanvas_ctx = imgcanvas.getContext('2d') as CanvasRenderingContext2D;
 imgcanvas.width = img.width;
 imgcanvas.height = img.height;
 imgcanvas_ctx.drawImage(img, 0, 0, imgcanvas.width, imgcanvas.height);

 



  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  canvas.width = maskStyle.value.width.value
  canvas.height = maskStyle.value.height.value;

  ctx.drawImage(imgcanvas, maskStyle.value.left.value, maskStyle.value.top.value, maskStyle.value.width.value, maskStyle.value.height.value, 0, 0, maskStyle.value.width.value, maskStyle.value.height.value);

  let url = canvas.toDataURL()

  previewurl.value = url
  
}


</script>

<style lang="scss" scoped>
@import './style.scss'
</style>