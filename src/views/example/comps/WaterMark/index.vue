<template>


  <div class="mb-6 bg-sky-800 text-white p-3 font-bold">
    防篡改 文字水印
    <div>不可删除、不可修改</div>
  </div>

  <div class="flex-aic flex-wrap">
    <base-water-mark class="mr-20 w-[350px]">
      <div class="content">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</div>
    </base-water-mark>

    <base-water-mark class="w-[350px]" :config="{color: 'red', fontSize: 12, text: '水印', gap: 30}">
      <div class="content">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</div>
    </base-water-mark>
  </div>

  
</template>


<script setup lang="ts"></script>

<style lang="scss" scoped>
.content{height: 240px; background: #fff; border: 1px solid #ccc;}
</style>