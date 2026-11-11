// Compares mxvi/tokens.css with the tokens of moisesbaldenegro.com
// (src/styles/tokens.css). The website is the living reference of the look:
// every token it defines must exist here with the same value.
//
// Usage:
//   node scripts/check-tokens-sync.mjs                 # fetches the website tokens from GitHub
//   node scripts/check-tokens-sync.mjs path/to/tokens.css
//   SITE_TOKENS_URL=https://... node scripts/check-tokens-sync.mjs
//
// Exit code 1 when a token is missing or has a different value.

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_URL =
  'https://raw.githubusercontent.com/MoiBaldenegro/moibaldenegro.com/main/src/styles/tokens.css'

// Tokens that exist only in the design system, on purpose.
const DESIGN_SYSTEM_ONLY = new Set([
  '--color-logo-purple',
  '--color-logo-orange',
  '--color-danger',
  '--color-success',
])

/** Custom properties of a stylesheet as a Map(name → normalized value). */
export function parseTokens(css) {
  const tokens = new Map()
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, '')
  for (const match of clean.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
    tokens.set(match[1].toLowerCase(), normalize(match[2]))
  }
  return tokens
}

/** Value normalization: case of hex colors and whitespace do not matter. */
export function normalize(value) {
  return value
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\s*,\s*/g, ',')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/#[0-9a-f]{3,8}\b/gi, hex => hex.toLowerCase())
}

export function compareTokens(site, system) {
  const missing = []
  const different = []
  const extra = []

  for (const [name, value] of site) {
    if (!system.has(name)) missing.push(name)
    else if (system.get(name) !== value) different.push({ name, site: value, system: system.get(name) })
  }
  for (const name of system.keys()) {
    if (!site.has(name) && !DESIGN_SYSTEM_ONLY.has(name)) extra.push(name)
  }

  return { missing, different, extra }
}

async function readSiteTokens() {
  const local = process.argv[2]
  if (local) return fs.readFile(path.resolve(local), 'utf8')

  const url = process.env.SITE_TOKENS_URL ?? DEFAULT_URL
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Could not fetch ${url}: HTTP ${response.status}`)
  return response.text()
}

async function main() {
  const site = parseTokens(await readSiteTokens())
  const system = parseTokens(await fs.readFile(path.join(root, 'mxvi', 'tokens.css'), 'utf8'))
  const { missing, different, extra } = compareTokens(site, system)

  if (site.size === 0) throw new Error('No tokens found in the website stylesheet.')

  if (missing.length || different.length || extra.length) {
    console.error('Tokens out of sync with moisesbaldenegro.com:')
    for (const name of missing) console.error(`- missing in mxvi/tokens.css: ${name}`)
    for (const item of different) console.error(`- different value for ${item.name}: website "${item.site}" · design system "${item.system}"`)
    for (const name of extra) console.error(`- only in mxvi/tokens.css (add it to the website or to DESIGN_SYSTEM_ONLY): ${name}`)
    console.error('\nUpdate mxvi/tokens.css (and the catalog) or the website so both match.')
    process.exit(1)
  }

  console.log(`Tokens in sync with moisesbaldenegro.com (${site.size} tokens).`)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error(error.message)
    process.exit(1)
  })
}
