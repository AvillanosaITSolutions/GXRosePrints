import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'GXRosePrints'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? `/${repoName}/` : '/',
  server: {
    port: 3000,
    open: true,
  },
}))
