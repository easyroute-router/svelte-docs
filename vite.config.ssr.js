import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      generate: 'ssr',
      immutable: true,
      css: false,
      hydratable: true
    }
  })],
  build: {
    outDir: 'dist/server'
  }
})
