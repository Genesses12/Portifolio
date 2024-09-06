import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Define o diretório de saída
    sourcemap: true // Gera sourcemaps para debug
  }
})
