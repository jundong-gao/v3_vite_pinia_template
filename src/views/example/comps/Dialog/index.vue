<template>
  <el-button @click="baseDialogVisible = true">基本使用</el-button>
  <el-button @click="cusFooterDialog = true">自定义底部按钮</el-button>
  <el-button @click="hideFooterDialog = true">隐藏底部按钮</el-button>

  <base-dialog v-model="baseDialogVisible" title="标题" width="500px" draggable cancel-text="自定义取消文字" confirm-text="自定义确定文字" @confirm="confirm">
    <p>基本使用, 如果 @confirm 函数返回的是promise对象，确认按钮会自动启用loading,直到结束</p>
  </base-dialog>

  <base-dialog v-model="cusFooterDialog" title="自定义底部按钮" width="500px" draggable>
    <p>自定义底部按钮</p>
    <template #footer>
      自定义底部
    </template>
  </base-dialog>

  <base-dialog v-model="hideFooterDialog" title="隐藏底部按钮" width="500px" draggable :show-footer="false">
    <p>隐藏底部按钮</p>
  </base-dialog>
</template>


<script setup lang="ts">

const baseDialogVisible = ref(false)
const cusFooterDialog = ref(false)
const hideFooterDialog = ref(false)



const confirm = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      baseDialogVisible.value = false
      resolve({})
    }, 1000)
  })
}

</script>