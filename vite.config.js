const basePath = process.env.VITE_DEPLOY === 'firebase' ? './' : '/vibe.Inc_React/'
export default defineConfig({
  plugins: [react()],
  base: basePath
})
