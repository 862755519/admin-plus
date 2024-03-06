import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vitePluginStart from './src/plugin/vitePluginStart.js'
// https://vitejs.dev/config/
export default defineConfig({
  base: "/admin-plus",
  plugins: [
    vue(),
    vitePluginStart(),
    createSvgIconsPlugin({
      // 指定要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      // 执行icon name的格式
      symbolId: 'svg-icon-[name]',
    })
  ],
  // 代理服务
  server: {
    port: 9527,
    host: true,
    open: true,
    proxy: {
      '/dev-api': {
        target: 'https://dev.usemock.com/65e7bf2548882231b5641a15',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/dev-api/, '')
      }
    }
  },
  resolve: {
    alias: [
      { find: /^@\//, replacement: `${path.resolve(__dirname, 'src')}/` },
      { find: /^~/, replacement: '' }
    ],
    extensions: ['.js', '.mjs', '.vue', '.json', '.less', '.css']
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
