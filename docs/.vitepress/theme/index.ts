import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import MarkdownSource from './MarkdownSource.vue'
import MxPreview from './MxPreview.vue'
// The real MXVI stylesheet (fonts, tokens and components) powers both the
// catalog previews and the documentation theme. base.css is not imported:
// its global reset would fight VitePress.
import '../../../mxvi/fonts.css'
import '../../../mxvi/tokens.css'
import '../../../mxvi/components.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MxPreview', MxPreview)
  },
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-before': () => h(MarkdownSource),
    }),
} satisfies Theme
