import { defineConfig } from 'vitepress'

const repository = process.env.GITHUB_REPOSITORY ?? ''
const [owner, repo] = repository.split('/')
const isUserOrOrgSite = repo === `${owner}.github.io`
const base = process.env.GITHUB_ACTIONS
  ? (isUserOrOrgSite ? '/' : `/${repo}/`)
  : '/'

export default defineConfig({
  lang: 'es-MX',
  title: 'MXNI Design System',
  description: 'Sistema de diseño para el ecosistema MXNI: fundamentos, componentes, patrones y documentación para humanos y agentes de IA.',
  base,
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',
  sitemap: {
    hostname: 'https://YOUR-USER.github.io',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#09070D' }],
    ['meta', { name: 'color-scheme', content: 'dark' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'MXNI Design System' }],
    ['meta', { property: 'og:description', content: 'One identity. Multiple products. A consistent experience.' }],
  ],
  themeConfig: {
    logo: {
      light: '/brand/mxni-mark.svg',
      dark: '/brand/mxni-mark.svg',
    },
    siteTitle: 'MXNI_',
    outline: {
      label: 'En esta página',
      level: [2, 3],
    },
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Fundamentos', link: '/foundations/colors' },
      { text: 'Componentes', link: '/components/overview' },
      { text: 'Guidelines', link: '/guidelines/overview' },
      {
        text: 'AI resources',
        items: [
          { text: 'llms.txt', link: '/llms.txt' },
          { text: 'llms-full.txt', link: '/llms-full.txt' },
          { text: 'Agent instructions', link: '/ai/agent-instructions.md' },
          { text: 'Descargar Markdown', link: '/downloads/mxni-design-system-markdown.zip' },
        ],
      },
    ],
    sidebar: {
      '/brand/': [
        { text: 'Brand', items: [
          { text: 'Identidad', link: '/brand/identity' },
          { text: 'Logo', link: '/brand/logo' },
          { text: 'Expresión visual', link: '/brand/visual-language' },
        ] },
      ],
      '/foundations/': [
        { text: 'Foundations', items: [
          { text: 'Color', link: '/foundations/colors' },
          { text: 'Typography', link: '/foundations/typography' },
          { text: 'Spacing & layout', link: '/foundations/spacing-layout' },
          { text: 'Geometry & effects', link: '/foundations/geometry-effects' },
          { text: 'Motion', link: '/foundations/motion' },
          { text: 'Accessibility', link: '/foundations/accessibility' },
        ] },
      ],
      '/components/': [
        { text: 'Components', items: [
          { text: 'Overview', link: '/components/overview' },
          { text: 'Buttons', link: '/components/buttons' },
          { text: 'Inputs', link: '/components/inputs' },
          { text: 'Cards & panels', link: '/components/cards-panels' },
          { text: 'Navigation', link: '/components/navigation' },
          { text: 'Feedback', link: '/components/feedback' },
        ] },
      ],
      '/guidelines/': [
        { text: 'Guidelines', items: [
          { text: 'Overview', link: '/guidelines/overview' },
          { text: 'Bento composition', link: '/guidelines/bento-composition' },
          { text: 'Product expression', link: '/guidelines/product-expression' },
          { text: 'Thumbnail overlays', link: '/guidelines/thumbnail-overlays' },
          { text: 'Content & data visualization', link: '/guidelines/content-data' },
        ] },
      ],
      '/implementation/': [
        { text: 'Implementation', items: [
          { text: 'Overview', link: '/implementation/overview' },
          { text: 'CSS tokens', link: '/implementation/css-tokens' },
          { text: 'React integration', link: '/implementation/react' },
          { text: 'Versioning & contribution', link: '/implementation/versioning' },
        ] },
      ],
      '/ai/': [
        { text: 'AI resources', items: [
          { text: 'Agent instructions', link: '/ai/agent-instructions' },
          { text: 'Context strategy', link: '/ai/context-strategy' },
          { text: 'MCP / RAG integration', link: '/ai/mcp-rag' },
        ] },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUR-USER/mxni-design-system-docs' },
    ],
    footer: {
      message: 'MXNI Design System · Initial specification v1.0',
      copyright: 'Built for a consistent technology ecosystem.',
    },
    editLink: {
      pattern: 'https://github.com/YOUR-USER/mxni-design-system-docs/edit/main/docs/:path',
      text: 'Editar esta página en GitHub',
    },
    docFooter: {
      prev: 'Página anterior',
      next: 'Siguiente página',
    },
  },
})