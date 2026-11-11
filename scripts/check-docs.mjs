import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const docsRoot = path.join(root, 'docs')
const required = [
  'index.md',
  'brand/identity.md',
  'foundations/colors.md',
  'foundations/typography.md',
  'foundations/accessibility.md',
  'components/overview.md',
  'guidelines/thumbnails.md',
  'implementation/css-tokens.md',
  'ai/agent-instructions.md',
  'platforms/index.md',
  'catalog/index.md',
  'catalog/visual-dna.md',
  'catalog/master-prompt.md',
  'catalog/install.md',
  'catalog/templates.md',
  ...['web', 'desktop', 'mobile'].flatMap(platform =>
    ['index', 'layout', 'navigation', 'components', 'interaction', 'checklist']
      .map(page => `platforms/${platform}/${page}.md`)),
]
const errors = []

for (const file of required) {
  try {
    const content = await fs.readFile(path.join(docsRoot, file), 'utf8')
    if (!content.trim()) errors.push(`${file} is empty`)
  } catch {
    errors.push(`${file} is missing`)
  }
}

if (errors.length) {
  console.error('Documentation check failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Documentation check passed (${required.length} required documents).`)