import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use an environment variable to choose deployment platform
// - Firebase: relative paths './'
// - GitHub Pages: repo subpath '/vibe.Inc_React/'
const basePath = process.env.VITE_DEPLOY === 'firebase' ? './' : '/vibe.Inc_React/'

export default defineConfig({
  plugins: [react()],
  base: basePath,
})

