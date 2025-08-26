import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'build',        
    sourcemap: false,        
    minify: 'esbuild'       
  },
  server:{
    port: 8900
  }
})
