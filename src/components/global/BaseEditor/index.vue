<template>
  <div>
    <Toolbar class="border border-gray-300 border-solid border-b-0" :editor="editorRef" :defaultConfig="toolbarConfig" mode="defalut"></Toolbar>
    <Editor class="h-[300px] border border-gray-300 border-solid" v-model="contentHTML" :defaultConfig="editorConfig" @onCreated="handleCreated" :mode="mode"></Editor>
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Toolbar, Editor } from "@wangeditor/editor-for-vue"
import { IToolbarConfig, IDomEditor } from '@wangeditor/editor'
type InsertImageFnType = (url: string, alt: string, href: string) => void
type InsertVideoFnType = (url: string, poster?: string) => void

let props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  mode: {
    type: String,
    default: 'default'
  }
})
let emits = defineEmits(['update:modelValue'])

const contentHTML = computed({
  get() {
    return props.modelValue
  },
  set(val: string) {
    emits('update:modelValue', val)
  }
})
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef<IDomEditor>()
const toolbarConfig = ref<IToolbarConfig>()
const editorConfig = ref({
  placeholder: '请输入内容...',
  MENU_CONF: {
    uploadImage: {
      async customUpload(file: File, insertFn: InsertImageFnType) {
        ElMessage.success('此处为模拟上传， 未经过接口处理')
        // 将file对象转为临时访问地址
        let url = URL.createObjectURL(file)
        // 插入图片
        insertFn(url, '', '')
      },
    },
    uploadVideo: {
      customUpload(file: File, insertFn: InsertVideoFnType) { 
        ElMessage.success('此处为模拟上传， 未经过接口处理')
        // 将file对象转为临时访问地址
        let url = URL.createObjectURL(file)
        // 插入视频
        insertFn(url, '')
      },
    }
  }
})

function handleCreated(editor: IDomEditor) {
  editorRef.value = editor 
}
</script>

<style lang="scss" scoped>

</style>