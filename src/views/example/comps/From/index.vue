<template>
  {{ formData }}
  <el-form ref="baseFromRef" label-width="100px" :model="formData" :rules="formRules">
    <base-form :form-data="formData" :row-num="2" :columns="columns">
      <template #custom="scope">
        <el-form-item v-bind="scope">
          这是自定义的插槽
        </el-form-item>
      </template>
    </base-form>
    <el-button @click="submit">校验</el-button>
    <el-button @click="reset" type="danger">重置</el-button>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElForm, ElMessage } from 'element-plus'
const baseFromRef = ref({} as InstanceType<typeof ElForm>)

const formData = ref({
  favorite: 'basketball'
})

const formRules = ref({
  username: [{ required: true, message: '请输入名字', trigger: 'change' }],
  age: [{ required: true, message: '请输入年龄', trigger: 'change' }],
  date: [{ required: true, message: '请输入日期', trigger: 'change' }],
  radio: [{ required: true, message: '请选择', trigger: 'change' }],
  favorite: [{ required: true, message: '请选择爱好', trigger: 'change' }]
})

const columns = ref([
  { label: '名字', key: 'username', type: 'input' },
  { label: '年龄', key: 'age', type: 'inputNumber', min: 1, precision: 0 },
  { label: '日期', key: 'date', type: 'date' },
  { label: '日期范围', key: 'dateRange', type: 'dateRange' },
  { label: '时间', key: 'time', type: 'time' },
  { label: '日期时间', key: 'dateTime', type: 'dateTime' },
  {
    label: '爱好', key: 'favorite', type: 'select', data: [
      { label: '篮球', value: 'basketball' },
      { label: '足球', value: 'football' },
    ]
  },
  {
    label: '性别', key: 'gender', type: 'select', data: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' },
    ]
  },
  { label: '备注', key: 'remark', type: 'textarea', span: 24, showWordLimit: true, maxlength: 50 },
  { label: '开关', key: 'switch', type: 'switch' },
  {
    label: '单选', key: 'radio', type: 'radio', data: [
      { label: '选项1', value: 'option1' },
      { label: '选项2', value: 'option2' },
    ]
  },
  { label: '自定义', key: 'custom', type: 'custom' }
])


const submit = () => {
  baseFromRef.value.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success('表单验证通过')
      console.log('表单验证通过', formData.value)
    } else {
      ElMessage.error('表单验证失败')
      console.log('表单验证失败')
    }
  })
}

const reset = () => {
  baseFromRef.value.resetFields()
}
</script>