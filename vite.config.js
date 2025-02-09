import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'//sa formata na vremeto

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: { //tuk
    esbuildOptions: { //tuk
      plugins: [esbuildCommonjs(['react-moment'])] //i tuk neobhodimo za formata na vremeto
    }
  }
})
