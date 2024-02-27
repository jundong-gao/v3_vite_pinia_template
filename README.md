## 简介
> 此模板集成了 Vue3 + TS + Vite + Pinia + VueRouter + axios + tailwind.css 可以快速的开发项目
> **node>=18**

## 项目启动
- 安装依赖
```bash
pnpm install
```
- 启动项目
```bash
npm run dev
```


## 推荐IDEA
- [VS Code](https://code.visualstudio.com/) 

## 推荐插件
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (禁用掉 Vetur) 
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 请求类
- [axios](https://github.com/axios/axios)

## UI类
- [element-plus](https://github.com/element-plus/element-plus)

## 路由类
- [vue-router](https://github.com/vuejs/vue-router)

## 状态管理类
- [pinia](https://github.com/vuejs/pinia)

## hooks
- useVModel 用于处理props数据 在表单上的应用。保证单项数据流
- useFps 实时获取帧率fps
- useDebounce 防抖函数
- useWaterMarkBg 生成水印最小单元背景图

## 组件
- BaseTable
  - 通过配置生产表格
  - 支持分页、自定义列、自定义表头
  - 支持查询(配置与BaseForm一致)
- BaseForm
  - 通过配置的表单组件
  - 支持自定义表单项
  - select/radio等类型 支持async: ()=>Promise<Array<any>> 异步获取数据
- BaseDialog
  - 通用模态框组件
- BaseWaterMark
  - 通用水印组件
  - 接收config属性 :config={text: string, color: string, fontSize: number, gap: number, zIndex: number}
