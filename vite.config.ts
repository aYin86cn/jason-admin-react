import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData:`
          @import "${path.resolve(__dirname, './node_modules/ayin-lessmixins/ayin-lessmixins.less')}";
          @import "${path.resolve(__dirname, './node_modules/ayin-color/ayin-color.less')}";
          @import "${path.resolve(__dirname, './node_modules/ayin-color/ayin-color-expand.less')}";
          `
      }
    }
  },
})
