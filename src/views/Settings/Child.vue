<template>
    <hr>
    child-components
    {{ model }}
    <el-input v-model="model.age"></el-input>

</template>


<script setup lang="ts">
import { useVModel } from '@/hooks/useVModel'


let props = defineProps({
    modelValue: {
        type: Object,
        default: () => ({})
    }
})
let emits = defineEmits(['update:modelValue'])

const model = useVModel(props, 'modelValue', emits)

</script>