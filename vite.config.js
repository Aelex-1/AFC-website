import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        franchise: resolve(__dirname, 'franchise.html'),
        locations: resolve(__dirname, 'locations.html'),
        blogs: resolve(__dirname, 'blogs.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        careers: resolve(__dirname, 'careers.html'),
        developmentJourney: resolve(__dirname, 'post/development-journey.html'),
        highlights: resolve(__dirname, 'post/2025-highlights.html'),
        storeManager: resolve(__dirname, 'careers/store-manager.html'),
      },
    },
  },
})