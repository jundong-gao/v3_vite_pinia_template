## 简介
- vue3+pinia
- 自动引入components文件夹组件
- 自动引入elementPlus组件
- 支持typescript
- 封装axios
- 集成tailwindcss、elementPlus
- 提供丰富组件
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
- useIntervalCallback 指定时间执行回调函数(如：多少秒后获取验证码)

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




#### @wangeditor/editor-for-vue 打包报错问题
> Could not find a declaration file for module '@wangeditor/editor-for-vue'. '/Users/gaojundong/study-demo/v3TsPiniaTemplate/node_modules/.pnpm/@wangeditor+editor-for-vue@5.1.12_@wangeditor+editor@5.1.23_vue@3.4.19/node_modules/@wangeditor/editor-for-vue/dist/index.esm.js' implicitly has an 'any' type.
  There are types at '/Users/gaojundong/study-demo/v3TsPiniaTemplate/node_modules/@wangeditor/editor-for-vue/dist/src/index.d.ts', but this result could not be resolved when respecting package.json "exports". The '@wangeditor/editor-for-vue' library may need to update its package.json or typings.

- 解决方法
  - 找到 `node_modules/@wangeditor/editor-for-vue/package.json`文件
  - 删除以下配置
  ```json
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    },
  }
  ```