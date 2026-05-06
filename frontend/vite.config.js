import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsRoot = path.resolve(__dirname, '../Assets')

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
}

function isInsideDir(file, dir) {
  const rel = path.relative(dir, file)
  return rel && !rel.startsWith('..') && !path.isAbsolute(rel)
}

function serveParentAssets() {
  return {
    name: 'serve-parent-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next()
        const url = req.url.split('?')[0]
        if (!url.startsWith('/Assets/')) return next()
        const rel = url.slice('/Assets/'.length)
        const filePath = path.normalize(path.join(assetsRoot, rel))
        if (!isInsideDir(filePath, assetsRoot)) return next()
        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile())
          return next()
        const ext = path.extname(filePath).toLowerCase()
        res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream')
        if (req.method === 'HEAD') {
          res.end()
          return
        }
        fs.createReadStream(filePath).pipe(res)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), serveParentAssets()],
})
