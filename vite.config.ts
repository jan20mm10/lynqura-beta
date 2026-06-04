import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'ignore-figma-assets',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          return '\0figma-asset-stub'
        }
      },
      load(id) {
        if (id === '\0figma-asset-stub') {
          return 'export default ""'
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
