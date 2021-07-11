import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      hydratable: true
    }
  })],
  resolve: {
    alias: {
      '@easyroute/svelte': path.resolve('../monorepo/packages/svelte'),
      '@easyroute/core': path.resolve('../monorepo/packages/core')
    }
  },
  build: {
    outDir: 'dist/client'
  }
})
