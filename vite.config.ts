import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  /* Config Alias */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@slices": `${path.resolve(__dirname, "./src/store/slices/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets")}`,
    },
  },

  /* Config Global Scss Variable */
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "src/scss/index.scss";` },
    }
  }
})
