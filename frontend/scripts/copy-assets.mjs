import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoAssets = path.resolve(__dirname, '../../Assets')
const distAssets = path.resolve(__dirname, '../dist/Assets')

if (!fs.existsSync(repoAssets)) {
  console.warn('copy-assets: no existe la carpeta Assets en la raíz del repo.')
  process.exit(0)
}

fs.mkdirSync(path.dirname(distAssets), { recursive: true })
fs.cpSync(repoAssets, distAssets, { recursive: true, force: true })
console.log('copy-assets: Assets copiados a dist/Assets')
