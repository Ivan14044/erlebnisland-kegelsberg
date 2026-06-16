<script setup>
import { computed } from 'vue'
import { useWindowScroll, useWindowSize } from '@vueuse/core'

const { y } = useWindowScroll()
const { height } = useWindowSize()

const progress = computed(() => {
  if (typeof document === 'undefined') return 0
  const max = document.documentElement.scrollHeight - height.value
  return max > 0 ? Math.min(1, Math.max(0, y.value / max)) : 0
})
</script>

<template>
  <div
    class="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
    :style="{
      transform: `scaleX(${progress})`,
      background: 'linear-gradient(90deg, var(--color-gold-600), var(--color-gold-300))',
    }"
    aria-hidden="true"
  />
</template>
