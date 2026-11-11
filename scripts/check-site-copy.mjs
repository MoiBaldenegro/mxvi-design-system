// Checks that moisesbaldenegro.com uses the current component sheets.
// The website keeps a synced copy of mxvi/base.css, mxvi/components.css and mxvi/components/**
// in src/styles/mxvi/, described by manifest.json (sha256 per file). This check
// compares that manifest with the files in this repository.
//
// Usage:
//   node scripts/check-site-copy.mjs                    # reads the manifest from GitHub
//   node scripts/check-site-copy.mjs path/to/manifest.json
//
// Exit code 1 when the website copy is missing, outdated or has extra files.
// Fix it in the website repository with: node scripts/sync-mxvi.mjs

import { createHash } from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_URL =
  'https://raw.githubusercontent.com/MoiBaldenegro/moibaldenegro.com/main/src/styles/mxvi/manifest.json'

async function readManifest() {
  const local = process.argv[2]
  if (local) return JSON.parse(await fs.readFile(path.resolve(local), 'utf8'))
  const url = process.env.SITE_MANIFEST_URL ?? DEFAULT_URL
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Could not fetch ${url}: HTTP ${response.status}`)
  return response.json()
}

async function componentFiles(dir = path.join(root, 'mxvi', 'components'), prefix = 'components') {
  const files = []
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const relative = `${prefix}/${entry.name}`
    if (entry.isDirectory()) files.push(...(await componentFiles(path.join(dir, entry.name), relative)))
    else if (entry.name.endsWith('.css')) files.push(relative)
  }
  return files
}

async function systemFiles() {
  return ['base.css', 'components.css', ...(await componentFiles())]
}

async function main() {
  const manifest = await readManifest()
  const site = manifest.files ?? {}
  const problems = []

  for (const file of await systemFiles()) {
    const hash = createHash('sha256').update(await fs.readFile(path.join(root, 'mxvi', file))).digest('hex')
    if (!(file in site)) problems.push(`missing on the website: ${file}`)
    else if (site[file] !== hash) problems.push(`outdated on the website: ${file}`)
  }
  const known = new Set(await systemFiles())
  for (const file of Object.keys(site)) {
    if (!known.has(file)) problems.push(`only on the website (removed here): ${file}`)
  }

  if (problems.length) {
    console.error(`moisesbaldenegro.com copy (${manifest.source}) is out of sync:`)
    for (const problem of problems) console.error(`- ${problem}`)
    console.error('\nRun `node scripts/sync-mxvi.mjs` in the website repository.')
    process.exit(1)
  }
  console.log(`moisesbaldenegro.com uses the current component sheets (${Object.keys(site).length} files).`)
}

main().catch(error => {
  console.error(error.message)
  process.exit(1)
})
