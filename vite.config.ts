import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteCompression(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: path.resolve(__dirname, 'src/auto-import.d.ts'),
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    Components({
      dts: path.resolve(__dirname, 'src/components.d.ts'),
      resolvers: [
        IconsResolver({
          prefix: 'i',
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver(),
      ]
    }),
    Icons({
      autoInstall: true
    })
  ],
  base: '/vue3',
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    host: '0.0.0.0',
    open: true
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return `vender_${id.toString().split('node_modules/')[1].split('/')[1].toString()}`;
          }
        }
      }
    }
  }
})
