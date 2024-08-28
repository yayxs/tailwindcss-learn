import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        selectors: resolve(__dirname, 'selectors.html'),
        layers: resolve(__dirname, 'layers.html')
      }
    }
  }
})
