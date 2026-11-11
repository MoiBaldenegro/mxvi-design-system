/**
 * Catalog previews.
 *
 * A fenced block written as ```html preview is canonical HTML. At build time it
 * becomes a live preview (rendered with the real mxni.css) followed by a code
 * group with the same markup for HTML, React, Vue, Svelte, Angular and Astro.
 * The raw Markdown published for AI agents keeps the plain HTML block.
 */

const FENCE = /^```html preview([^\n]*)\n([\s\S]*?)^```[ \t]*$/gm

const REACT_ATTRIBUTES: Record<string, string> = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  fetchpriority: 'fetchPriority',
  enterkeyhint: 'enterKeyHint',
  autocomplete: 'autoComplete',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  viewbox: 'viewBox',
}

const VOID_TAGS = ['img', 'input', 'br', 'hr', 'source', 'meta', 'link']

function styleToObject(style: string): string {
  const entries = style
    .split(';')
    .map(rule => rule.trim())
    .filter(Boolean)
    .map(rule => {
      const [property, ...value] = rule.split(':')
      const key = property.trim().startsWith('--')
        ? `'${property.trim()}'`
        : property.trim().replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
      return `${key}: '${value.join(':').trim()}'`
    })
  return `{{ ${entries.join(', ')} }}`
}

export function toJsx(html: string): string {
  let jsx = html
    .replace(/<!--([\s\S]*?)-->/g, (_, text: string) => `{/*${text}*/}`)
    .replace(/\sstyle="([^"]*)"/g, (_, style: string) => ` style=${styleToObject(style)}`)
    .replace(/\s([a-zA-Z-]+)=/g, (match, name: string) => {
      const mapped = REACT_ATTRIBUTES[name.toLowerCase()]
      return mapped ? ` ${mapped}=` : match
    })
    .replace(/\s(hidden|disabled|checked|required|defer|download)(?=[\s>])/g, ' $1')
  for (const tag of VOID_TAGS) {
    jsx = jsx.replace(new RegExp(`<${tag}(\\s[^>]*?)?\\s*/?>`, 'g'), (match, attributes = '') =>
      `<${tag}${attributes.replace(/\s+$/, '')} />`,
    )
  }
  return jsx
}

function indent(text: string, spaces: number): string {
  const pad = ' '.repeat(spaces)
  return text.split('\n').map(line => (line ? pad + line : line)).join('\n')
}

function variants(html: string): Array<[string, string, string]> {
  const markup = html.replace(/\n+$/, '')
  return [
    ['html', 'HTML', `<!-- <link rel="stylesheet" href="/mxni/mxni.css"> -->\n${markup}`],
    ['jsx', 'React', `// import 'mxni/mxni.css'\nexport function Example() {\n  return (\n    <>\n${indent(toJsx(markup), 6)}\n    </>\n  )\n}`],
    ['vue', 'Vue', `<!-- main.ts: import 'mxni/mxni.css' -->\n<template>\n${indent(markup, 2)}\n</template>`],
    ['svelte', 'Svelte', `<!-- +layout.svelte: import 'mxni/mxni.css' -->\n${markup}`],
    ['ts', 'Angular', `// angular.json → styles: ["mxni/mxni.css"]\n@Component({\n  selector: 'app-example',\n  template: \`\n${indent(markup.replaceAll('`', '\\`'), 4)}\n  \`,\n})\nexport class ExampleComponent {}`],
    ['astro', 'Astro', `---\n// import 'mxni/mxni.css'\n---\n${markup}`],
  ]
}

export function transformPreviews(source: string, base = '/'): string {
  return source.replace(FENCE, (_, info: string, body: string) => {
    // Asset URLs in the live preview follow the site base (GitHub Pages).
    const preview = body.replace(/(["(])\/mxni\//g, `$1${base}mxni/`)
    const code = Buffer.from(preview, 'utf8').toString('base64')
    const flush = /\bflush\b/.test(info) ? ' flush' : ''
    const wide = /\bwide\b/.test(info) ? ' wide' : ''
    const height = /height=(\d+)/.exec(info)?.[1]
    const heightAttr = height ? ` height="${height}px"` : ''
    const tabs = variants(body)
      .map(([lang, label, code]) => `\`\`\`${lang} [${label}]\n${code}\n\`\`\``)
      .join('\n')
    return [
      `<MxPreview code="${code}"${flush}${wide}${heightAttr} />`,
      '',
      '::: code-group',
      tabs,
      ':::',
      '',
    ].join('\n')
  })
}
