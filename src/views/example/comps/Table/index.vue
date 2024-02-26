<template>
  <base-table :columns="columns" stripe :api="getList" max-height="calc(100vh - 210px)">
    <template #age="{ row }">自定义年龄表格单元 ====> {{ row }}</template>
    <template #info2Header="scope">自定义表头 ==== {{ scope.column.label }}</template>
    <template #action>
      <el-button size="small" type="danger" link>删除</el-button>
      <el-button size="small" link type="primary">编辑</el-button>
    </template>
  </base-table>
</template>




<script setup lang="ts">
import { ref } from 'vue';
import { test } from '@/api/test';
import { ElMessage } from 'element-plus';
const columns = ref([
  {label: '姓名', key: 'name', search: true, type: 'input'},
  {label: '信息', key: 'salary', children: [
    {label: '信息1', key: 'info1'},
    {label: '信息2', key: 'info2'},
  ]},
  {label: '年龄', key: 'age', width: 600, search: true, type: 'select', data: [], async: () => {
    return Promise.resolve([{label: '18-25岁', value: 1}, {label: '26-35岁', value: 2}])
  }},
  {label: '性别', key: 'gender'},
  {label: '电话', key: 'phone', search: true, type: 'input'},
  // {label: '地址', key: 'address', search: true, type: 'input'},
  {label: '操作', key: 'action', fixed: 'right', width: 200}
])

const getList = (params: any) => {
  // return Promise.resolve({
  //   data: [
  //   {username: '张三', salary: '10000', info1: '信息1', info2: '信息2',
  //     age: 18, gender: '男', phone: '13812345678', address: '北京市', action: ''},
  //   {username: '李四', salary: '20000', info1: '信息1', info2: '信息2',
  //     age: 20, gender: '女', phone: '13812345678', address: '上海市',
  //     action: ''},
  // ]
  // })
  let json = {...params, page: params.pageNum}
  ElMessage.success(`请求参数===>${JSON.stringify(json)}`)

  return test(json).then(res => {
    return {
      data: {
        list: res.data,
        total: 100
      },
    }
  })
}

</script>