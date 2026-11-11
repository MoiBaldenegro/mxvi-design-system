<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { withBase } from 'vitepress'

// Live preview of a catalog component. The markup is rendered inside an
// isolated iframe with the real mxvi.css and mxvi.js, so documentation styles
// never leak into it. With `wide`, the iframe is laid out at a real device
// width (desktop, tablet or phone) and scaled down to fit the column, so
// responsive rules behave exactly as on that device.
const props = defineProps<{ code: string; flush?: boolean; wide?: boolean; height?: string }>()

const VIEWPORTS = [
  { id: 'desktop', label: 'Escritorio', width: 1440 },
  { id: 'tablet', label: 'Tablet', width: 768 },
  { id: 'mobile', label: 'Móvil', width: 390 },
] as const

const host = ref<HTMLDivElement | null>(null)
const frame = ref<HTMLIFrameElement | null>(null)
const viewport = ref<(typeof VIEWPORTS)[number]>(VIEWPORTS[0])
const hostWidth = ref(0)
const contentHeight = ref(120)
let frameObserver: ResizeObserver | undefined
let hostObserver: ResizeObserver | undefined

function decode(value: string): string {
  const bytes = Uint8Array.from(atob(value), c => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

const srcdoc = computed(() => {
  const css = withBase('/mxvi/mxvi.css')
  const js = withBase('/mxvi/mxvi.js')
  const padding = props.flush ? '0' : '32px 24px'
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="${css}">
<style>
  html { scrollbar-gutter: auto; }
  body { min-height: 0; padding: ${padding};
    background-image: radial-gradient(color-mix(in srgb, var(--color-text) 3%, transparent) 1px, transparent 1px);
    background-size: 14px 14px; }
  .mx-row { display: flex; flex-wrap: wrap; align-items: center; gap: 14px; }
  .mx-navbar { position: relative; }
</style>
</head>
<body>
${decode(props.code)}
<script src="${js}"><\/script>
</body>
</html>`
})

// Device width in wide mode; otherwise the column width.
const frameWidth = computed(() => (props.wide ? viewport.value.width : hostWidth.value))
const scale = computed(() =>
  props.wide && hostWidth.value > 0 ? Math.min(1, hostWidth.value / frameWidth.value) : 1,
)
const frameStyle = computed(() => ({
  width: props.wide ? `${frameWidth.value}px` : '100%',
  height: props.height ?? `${contentHeight.value}px`,
  transform: scale.value < 1 ? `scale(${scale.value})` : undefined,
}))
const stageStyle = computed(() => ({
  height: `${(props.height ? parseFloat(props.height) : contentHeight.value) * scale.value}px`,
}))

function resize() {
  const doc = frame.value?.contentDocument
  if (!doc?.body) return
  // body height, not scrollHeight: scrollHeight never shrinks below the frame.
  contentHeight.value = Math.ceil(doc.body.getBoundingClientRect().height)
}

function onLoad() {
  const doc = frame.value?.contentDocument
  if (!doc) return
  resize()
  frameObserver?.disconnect()
  frameObserver = new ResizeObserver(resize)
  frameObserver.observe(doc.body)
  doc.fonts?.ready.then(resize)
}

watch(viewport, () => requestAnimationFrame(resize))

onMounted(() => {
  if (host.value) {
    hostWidth.value = host.value.clientWidth
    hostObserver = new ResizeObserver(() => {
      if (host.value) hostWidth.value = host.value.clientWidth
    })
    hostObserver.observe(host.value)
  }
  if (frame.value?.contentDocument?.readyState === 'complete') onLoad()
})

onBeforeUnmount(() => {
  frameObserver?.disconnect()
  hostObserver?.disconnect()
})
</script>

<template>
  <div class="mx-demo">
    <div v-if="wide" class="mx-demo__toolbar" role="group" aria-label="Ancho de la vista previa">
      <button
        v-for="item in VIEWPORTS"
        :key="item.id"
        type="button"
        class="mx-demo__viewport"
        :aria-pressed="viewport.id === item.id"
        @click="viewport = item"
      >
        {{ item.label }} <span>{{ item.width }}px</span>
      </button>
    </div>
    <div ref="host" class="mx-demo__stage" :style="stageStyle">
      <iframe
        ref="frame"
        class="mx-demo__frame"
        title="Vista previa del componente"
        loading="lazy"
        :srcdoc="srcdoc"
        :style="frameStyle"
        @load="onLoad"
      />
    </div>
  </div>
</template>
