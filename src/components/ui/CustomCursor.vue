<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '@/composables/useScrollAnimation'

const dot = ref(null)
const ring = ref(null)
const enabled = ref(false)
let cleanups = []

onMounted(() => {
  if (prefersReducedMotion()) return
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

  enabled.value = true
  document.documentElement.classList.add('has-custom-cursor')

  // Wait a tick so refs exist after v-if flips
  requestAnimationFrame(() => {
    if (!dot.value || !ring.value) return
    const dx = gsap.quickTo(dot.value, 'x', { duration: 0.12, ease: 'power3' })
    const dy = gsap.quickTo(dot.value, 'y', { duration: 0.12, ease: 'power3' })
    const rx = gsap.quickTo(ring.value, 'x', { duration: 0.5, ease: 'power3' })
    const ry = gsap.quickTo(ring.value, 'y', { duration: 0.5, ease: 'power3' })

    const move = (e) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY) }
    window.addEventListener('mousemove', move, { passive: true })

    const sel = 'a, button, [data-cursor], input, textarea, select, [role="button"], label'
    const over = (e) => { if (e.target.closest && e.target.closest(sel)) ring.value?.classList.add('is-hover') }
    const out = (e) => { if (e.target.closest && e.target.closest(sel)) ring.value?.classList.remove('is-hover') }
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)

    const down = () => ring.value?.classList.add('is-down')
    const up = () => ring.value?.classList.remove('is-down')
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    cleanups = [
      () => window.removeEventListener('mousemove', move),
      () => document.removeEventListener('mouseover', over),
      () => document.removeEventListener('mouseout', out),
      () => window.removeEventListener('mousedown', down),
      () => window.removeEventListener('mouseup', up),
    ]
  })
})

onBeforeUnmount(() => {
  cleanups.forEach((fn) => fn())
  document.documentElement.classList.remove('has-custom-cursor')
})
</script>

<template>
  <div v-if="enabled" class="cursor-layer" aria-hidden="true">
    <div ref="ring" class="cursor-ring"></div>
    <div ref="dot" class="cursor-dot"></div>
  </div>
</template>

<style scoped>
.cursor-layer {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
}
.cursor-dot,
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 9999px;
  will-change: transform;
  pointer-events: none;
}
.cursor-dot {
  width: 7px;
  height: 7px;
  margin: -3.5px 0 0 -3.5px;
  background: var(--color-gold-300);
}
.cursor-ring {
  width: 40px;
  height: 40px;
  margin: -20px 0 0 -20px;
  border: 1.4px solid rgba(200, 164, 90, 0.55);
  mix-blend-mode: difference;
  transition: width 0.3s var(--ease-lux), height 0.3s var(--ease-lux),
    margin 0.3s var(--ease-lux), background 0.3s, border-color 0.3s;
}
.cursor-ring.is-hover {
  width: 64px;
  height: 64px;
  margin: -32px 0 0 -32px;
  background: rgba(200, 164, 90, 0.12);
  border-color: rgba(232, 197, 71, 0.9);
}
.cursor-ring.is-down {
  width: 30px;
  height: 30px;
  margin: -15px 0 0 -15px;
}
</style>
