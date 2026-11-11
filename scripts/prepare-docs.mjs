import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import archiver from 'archiver'
import { createWriteStream } from 'node:fs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const docsRoot = path.join(root, 'docs')
const publicRoot = path.join(docsRoot, 'public')
const markdownOutput = path.join(publicRoot, 'markdown')
const downloadsOutput = path.join(publicRoot, 'downloads')

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const result = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) result.push(...await walk(full))
    else if (entry.isFile() && entry.name.endsWith('.md')) result.push(full)
  }
  return result
}

await fs.rm(markdownOutput, { recursive: true, force: true })
await fs.mkdir(markdownOutput, { recursive: true })
await fs.mkdir(downloadsOutput, { recursive: true })

const sourceFiles = (await walk(docsRoot))
  .filter(file => !file.includes(`${path.sep}.vitepress${path.sep}`))
  .filter(file => !file.includes(`${path.sep}public${path.sep}`))
  .sort()

const docs = []
for (const source of sourceFiles) {
  const relative = path.relative(docsRoot, source).replaceAll(path.sep, '/')
  const content = await fs.readFile(source, 'utf8')
  const destination = path.join(markdownOutput, relative)
  await fs.mkdir(path.dirname(destination), { recursive: true })
  await fs.writeFile(destination, content)
  docs.push({ relative, content })
}

// Platform bundles: the shared core plus one platform guide, published as a
// single context file for fetching and as a zip to drop into a local project.
const PLATFORMS = [
  { id: 'web', label: 'Web', zip: 'mxni-web-markdown.zip' },
  { id: 'desktop', label: 'Desktop', zip: 'mxni-desktop-markdown.zip' },
  { id: 'mobile', label: 'Mobile', zip: 'mxni-mobile-markdown.zip' },
]

const CORE_DOCS = [
  'ai/agent-instructions.md',
  'platforms/index.md',
  'foundations/colors.md',
  'foundations/typography.md',
  'foundations/spacing-layout.md',
  'foundations/geometry-effects.md',
  'foundations/motion.md',
  'foundations/accessibility.md',
  'components/overview.md',
  'components/buttons.md',
  'components/inputs.md',
  'components/cards-panels.md',
  'components/navigation.md',
  'components/feedback.md',
  'brand/identity.md',
  'brand/logo.md',
  'brand/visual-language.md',
  'guidelines/overview.md',
  'guidelines/product-expression.md',
  'guidelines/bento-composition.md',
  'guidelines/content-data.md',
  'implementation/css-tokens.md',
]

const PLATFORM_PAGES = ['index', 'layout', 'navigation', 'components', 'interaction', 'checklist']

const docByPath = new Map(docs.map(doc => [doc.relative, doc]))

function platformDocs(platform) {
  const paths = [
    'ai/agent-instructions.md',
    ...PLATFORM_PAGES.map(page => `platforms/${platform.id}/${page}.md`),
    ...CORE_DOCS.filter(file => file !== 'ai/agent-instructions.md'),
  ]
  const missing = paths.filter(file => !docByPath.has(file))
  if (missing.length) throw new Error(`Missing documents for ${platform.id}: ${missing.join(', ')}`)
  return paths.map(file => docByPath.get(file))
}

function platformAgents(platform) {
  return [
    `# MXNI Design System — ${platform.label}`,
    '',
    `Local copy of the MXNI design system for **${platform.label.toLowerCase()}** interfaces.`,
    'Treat these files as the design contract for any user-facing UI in this project.',
    '',
    '## Read in this order',
    '',
    '1. `ai/agent-instructions.md` — behavioral contract for agents.',
    `2. \`platforms/${platform.id}/index.md\` — platform summary and compact agent contract.`,
    `3. The rest of \`platforms/${platform.id}/\` as needed: layout, navigation, components, interaction, checklist.`,
    '4. `foundations/`, `components/`, `brand/` and `guidelines/` for detailed rules.',
    '5. `implementation/css-tokens.md` for the canonical token values.',
    '',
    `\`llms-${platform.id}.txt\` contains all of the above in a single file.`,
    '',
    '## Links and assets',
    '',
    '- Links that start with `/` point to files in this folder: `/foundations/colors` is `foundations/colors.md`.',
    '- The official logo SVGs are in `brand/assets/`. Never rebuild the logo with a font.',
    '',
    '## Report',
    '',
    `When you finish UI work, report: platform (${platform.label.toLowerCase()}), tokens used,`,
    'components and patterns reused, responsive or adaptive behavior, accessibility',
    'considerations, and any deviation or proposed addition.',
    '',
  ].join('\n')
}

const titleFrom = (content, fallback) =>
  content.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? fallback

const indexLines = [
  '# MXNI Design System — AI documentation index',
  '',
  '> One identity. Multiple products. A consistent experience.',
  '',
  'Use these canonical Markdown resources to understand and implement MXNI.',
  'Start with the agent instructions, then retrieve the relevant foundation, component, or guideline.',
  '',
  '## Core instructions',
  '- [Agent instructions](./ai/agent-instructions.md)',
  '- [Platforms: choose web, desktop or mobile](./markdown/platforms/index.md)',
  '- [Brand identity](./markdown/brand/identity.md)',
  '- [Foundations: colors](./markdown/foundations/colors.md)',
  '- [Foundations: typography](./markdown/foundations/typography.md)',
  '- [Foundations: spacing and layout](./markdown/foundations/spacing-layout.md)',
  '- [Foundations: accessibility](./markdown/foundations/accessibility.md)',
  '',
  '## Platforms',
  'Pick the target platform first. Each bundle contains the agent instructions,',
  'foundations, components and the complete platform guide in one file.',
  ...PLATFORMS.flatMap(platform => [
    `- ${platform.label}: [guide](./markdown/platforms/${platform.id}/index.md) · [context: llms-${platform.id}.txt](./llms-${platform.id}.txt) · [download: ${platform.zip}](./downloads/${platform.zip})`,
  ]),
  '',
  '## Complete documentation',
  ...docs.map(doc => `- [${titleFrom(doc.content, doc.relative)}](./markdown/${doc.relative})`),
  '',
  '## Download',
  '- [Complete Markdown bundle](./downloads/mxni-design-system-markdown.zip)',
  '',
  '## Agent usage',
  '1. Read `ai/agent-instructions.md`.',
  '2. Identify the target platform (web, desktop or mobile) and read its guide or `llms-<platform>.txt`.',
  '3. Read only the other documents relevant to the current task.',
  '4. Reuse documented tokens and patterns.',
  '5. Report the platform, deviations and proposed additions.',
  '',
]

// Publish the concise agent contract at a stable, easy-to-reference URL.
const agentSource = path.join(docsRoot, 'ai', 'agent-instructions.md')
const agentPublic = path.join(publicRoot, 'ai', 'agent-instructions.md')
await fs.mkdir(path.dirname(agentPublic), { recursive: true })
await fs.copyFile(agentSource, agentPublic)

await fs.writeFile(path.join(publicRoot, 'llms.txt'), indexLines.join('\n'))

const full = [
  '# MXNI Design System — Full AI context',
  '',
  '> Generated from canonical Markdown sources. Do not edit this file directly.',
  '',
  ...docs.map(doc => `\n\n---\n\n<!-- SOURCE: ${doc.relative} -->\n\n${doc.content}`),
  '',
].join('\n')
await fs.writeFile(path.join(publicRoot, 'llms-full.txt'), full)

const logoAssets = (await fs.readdir(path.join(publicRoot, 'brand')))
  .filter(name => name.startsWith('mxni-logo') && name.endsWith('.svg'))
  .sort()

function writeZip(zipFile, folder, entries) {
  return new Promise((resolve, reject) => {
    const output = createWriteStream(zipFile)
    const archive = archiver('zip', { zlib: { level: 9 } })
    output.on('close', resolve)
    archive.on('error', reject)
    archive.pipe(output)
    for (const entry of entries) {
      if (entry.file) archive.file(entry.file, { name: `${folder}/${entry.name}` })
      else archive.append(entry.content, { name: `${folder}/${entry.name}` })
    }
    archive.finalize()
  })
}

for (const platform of PLATFORMS) {
  const selected = platformDocs(platform)
  const context = [
    `# MXNI Design System — ${platform.label} AI context`,
    '',
    '> Generated from canonical Markdown sources. Do not edit this file directly.',
    `> Contains the agent instructions, the complete ${platform.label.toLowerCase()} guide, foundations, components, brand and guidelines.`,
    '',
    ...selected.map(doc => `\n\n---\n\n<!-- SOURCE: ${doc.relative} -->\n\n${doc.content}`),
    '',
  ].join('\n')
  const contextName = `llms-${platform.id}.txt`
  await fs.writeFile(path.join(publicRoot, contextName), context)

  await writeZip(path.join(downloadsOutput, platform.zip), `mxni-design-system-${platform.id}`, [
    { name: 'AGENTS.md', content: platformAgents(platform) },
    { name: contextName, content: context },
    ...selected.map(doc => ({ name: doc.relative, file: path.join(markdownOutput, doc.relative) })),
    ...logoAssets.map(name => ({ name: `brand/assets/${name}`, file: path.join(publicRoot, 'brand', name) })),
  ])
  console.log(`Generated ${contextName} and downloads/${platform.zip} (${selected.length} documents)`)
}

const zipPath = path.join(downloadsOutput, 'mxni-design-system-markdown.zip')
await new Promise((resolve, reject) => {
  const output = createWriteStream(zipPath)
  const archive = archiver('zip', { zlib: { level: 9 } })
  output.on('close', resolve)
  archive.on('error', reject)
  archive.pipe(output)
  for (const doc of docs) {
    archive.file(path.join(markdownOutput, doc.relative), { name: `mxni-design-system/${doc.relative}` })
  }
  archive.file(path.join(publicRoot, 'llms.txt'), { name: 'mxni-design-system/llms.txt' })
  archive.file(path.join(publicRoot, 'llms-full.txt'), { name: 'mxni-design-system/llms-full.txt' })
  for (const platform of PLATFORMS) {
    archive.file(path.join(publicRoot, `llms-${platform.id}.txt`), { name: `mxni-design-system/llms-${platform.id}.txt` })
  }
  for (const name of logoAssets) {
    archive.file(path.join(publicRoot, 'brand', name), { name: `mxni-design-system/brand/assets/${name}` })
  }
  archive.file(path.join(root, 'AGENTS.md'), { name: 'mxni-design-system/AGENTS.md' })
  archive.finalize()
})

console.log(`Prepared ${docs.length} Markdown documents.`)
console.log(`Generated ${path.relative(root, path.join(publicRoot, 'llms.txt'))}`)
console.log(`Generated ${path.relative(root, path.join(publicRoot, 'llms-full.txt'))}`)
console.log(`Generated ${path.relative(root, zipPath)}`)