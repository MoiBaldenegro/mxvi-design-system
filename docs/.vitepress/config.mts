import { defineConfig } from 'vitepress'
import { transformPreviews } from './mx-preview'

const repository = process.env.GITHUB_REPOSITORY ?? ''
const [owner, repo] = repository.split('/')
const isUserOrOrgSite = repo === `${owner}.github.io`
const base = process.env.GITHUB_ACTIONS
  ? (isUserOrOrgSite ? '/' : `/${repo}/`)
  : '/'

export default defineConfig({
  lang: 'es-MX',
  title: 'MXVI Design System',
  description: 'Sistema de diseño para el ecosistema MXVI: fundamentos, componentes, patrones y documentación para humanos y agentes de IA.',
  base,
  cleanUrls: true,
  markdown: {
    config(md) {
      // ```html preview blocks → live preview + framework tabs (see mx-preview.ts).
      md.core.ruler.before('normalize', 'mx-preview', state => {
        state.src = transformPreviews(state.src, base)
      })
    },
  },
  vue: {
    template: {
      compilerOptions: {
        // Native landmark used by the search component.
        isCustomElement: tag => tag === 'search',
      },
    },
  },
  lastUpdated: true,
  appearance: 'dark',
  sitemap: {
    hostname: 'https://moibaldenegro.github.io',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#070716' }],
    ['meta', { name: 'color-scheme', content: 'dark' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'MXVI Design System' }],
    ['meta', { property: 'og:description', content: 'One identity. Multiple products. A consistent experience.' }],
  ],
  themeConfig: {
    // Official MXVI logo (vectorized from moibaldenegro.com) in its original
    // colors. It already reads "MXVI", so the text title is hidden.
    logo: {
      light: '/brand/mxvi-logo.svg',
      dark: '/brand/mxvi-logo.svg',
      alt: 'MXVI',
    },
    siteTitle: false,
    outline: {
      label: 'En esta página',
      level: [2, 3],
    },
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Catálogo', link: '/catalog/' },
      {
        text: 'Plataformas',
        items: [
          { text: 'Elegir plataforma', link: '/platforms/' },
          { text: 'Web', link: '/platforms/web/' },
          { text: 'Escritorio', link: '/platforms/desktop/' },
          { text: 'Móvil', link: '/platforms/mobile/' },
        ],
      },
      { text: 'Fundamentos', link: '/foundations/colors' },
      { text: 'Componentes', link: '/components/overview' },
      { text: 'Guidelines', link: '/guidelines/overview' },
      {
        text: 'AI resources',
        items: [
          { text: 'llms.txt', link: '/llms.txt' },
          { text: 'llms-full.txt', link: '/llms-full.txt' },
          { text: 'llms-web.txt', link: '/llms-web.txt' },
          { text: 'llms-desktop.txt', link: '/llms-desktop.txt' },
          { text: 'llms-mobile.txt', link: '/llms-mobile.txt' },
          { text: 'Agent instructions', link: '/ai/agent-instructions.md' },
          { text: 'Descargar Markdown', link: '/downloads/mxvi-design-system-markdown.zip' },
        ],
      },
    ],
    sidebar: {
      '/catalog/': [
        { text: 'Catálogo', items: [
          { text: 'Inicio', link: '/catalog/' },
          { text: 'ADN visual', link: '/catalog/visual-dna' },
          { text: 'Prompt maestro', link: '/catalog/master-prompt' },
          { text: 'Usar en cualquier tecnología', link: '/catalog/install' },
        ] },
        { text: 'Átomos', collapsed: false, items: [
          { text: 'Botones', link: '/catalog/atoms/buttons' },
          { text: 'Tipografía y enlaces', link: '/catalog/atoms/typography' },
          { text: 'Tags, chips y badges', link: '/catalog/atoms/tags' },
          { text: 'Campos y botón de ícono', link: '/catalog/atoms/inputs' },
          { text: 'Logo, imágenes y divisor', link: '/catalog/atoms/media' },
        ] },
        { text: 'Moléculas', collapsed: false, items: [
          { text: 'Barra de búsqueda', link: '/catalog/molecules/search' },
          { text: 'Navegación y listas', link: '/catalog/molecules/navigation' },
          { text: 'Tarjetas', link: '/catalog/molecules/cards' },
          { text: 'Tarjeta de marca y perfil', link: '/catalog/molecules/brand-tile' },
          { text: 'Bloques de contenido', link: '/catalog/molecules/content' },
          { text: 'Fila de resultado', link: '/catalog/molecules/result-row' },
        ] },
        { text: 'Organismos', collapsed: false, items: [
          { text: 'Navbar', link: '/catalog/organisms/navbar' },
          { text: 'Footer', link: '/catalog/organisms/footer' },
          { text: 'Hero Bento', link: '/catalog/organisms/hero-bento' },
          { text: 'Perfil (About)', link: '/catalog/organisms/profile' },
          { text: 'Artículo', link: '/catalog/organisms/article' },
          { text: 'Promociones y banda de logo', link: '/catalog/organisms/promo' },
        ] },
        { text: 'Plantillas', collapsed: false, items: [
          { text: 'Plantillas de página', link: '/catalog/templates' },
        ] },
      ],
      '/platforms/': [
        { text: 'Plataformas', items: [
          { text: 'Elegir plataforma', link: '/platforms/' },
        ] },
        { text: 'Web', collapsed: false, items: [
          { text: 'Resumen', link: '/platforms/web/' },
          { text: 'Layout y responsive', link: '/platforms/web/layout' },
          { text: 'Navegación', link: '/platforms/web/navigation' },
          { text: 'Componentes', link: '/platforms/web/components' },
          { text: 'Interacción y accesibilidad', link: '/platforms/web/interaction' },
          { text: 'Checklist', link: '/platforms/web/checklist' },
        ] },
        { text: 'Escritorio', collapsed: false, items: [
          { text: 'Resumen', link: '/platforms/desktop/' },
          { text: 'Layout y ventanas', link: '/platforms/desktop/layout' },
          { text: 'Navegación', link: '/platforms/desktop/navigation' },
          { text: 'Componentes', link: '/platforms/desktop/components' },
          { text: 'Interacción y accesibilidad', link: '/platforms/desktop/interaction' },
          { text: 'Checklist', link: '/platforms/desktop/checklist' },
        ] },
        { text: 'Móvil', collapsed: false, items: [
          { text: 'Resumen', link: '/platforms/mobile/' },
          { text: 'Layout y pantallas', link: '/platforms/mobile/layout' },
          { text: 'Navegación', link: '/platforms/mobile/navigation' },
          { text: 'Componentes', link: '/platforms/mobile/components' },
          { text: 'Interacción y accesibilidad', link: '/platforms/mobile/interaction' },
          { text: 'Checklist', link: '/platforms/mobile/checklist' },
        ] },
      ],
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
          { text: 'Thumbnails', link: '/guidelines/thumbnails' },
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
  {
    icon: 'github',
    link: 'https://github.com/MoiBaldenegro/mxvi-design-system',
  },
],
    footer: {
      message: 'MXVI Design System v1.1 · El look de moisesbaldenegro.com',
      copyright: 'Built for a consistent technology ecosystem.',
    },
    editLink: {
  pattern: 'https://github.com/MoiBaldenegro/mxvi-design-system/edit/main/docs/:path',
  text: 'Editar esta página en GitHub',
},
    docFooter: {
      prev: 'Página anterior',
      next: 'Siguiente página',
    },
  },
})