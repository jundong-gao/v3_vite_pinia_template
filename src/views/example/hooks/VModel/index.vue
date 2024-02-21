<template>
  <Child v-model="info" />
</template>


<script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue'
const info = ref({
  name: '高天',
  age: 18
})
</script>