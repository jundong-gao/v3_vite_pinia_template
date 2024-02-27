<template>
  {{ model }}
  <el-input v-model="model.age"></el-input>
</template>


<script setup lang="ts">
import { useVModel } from '@/hooks/useVModel'

let props = defineProps<{
  modelValue: {age: number}
}>()
let emits = defineEmits(['update:modelValue'])

const model = useVModel(props, 'modelValue', emits) as typeof props.modelValue

</script>