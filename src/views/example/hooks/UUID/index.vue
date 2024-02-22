<template>
  uuid==> {{ uuid }}

  <el-button @click="reset">createUUID</el-button>
</template>

<script setup lang="ts">
import { useUUID } from '@/hooks/useUUID'
import { ref } from 'vue';

let uuid = ref('')

const reset = () => {
  uuid.value = useUUID()
}

</script>