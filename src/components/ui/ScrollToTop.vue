<script setup>
import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const visible = computed(() => y.value > 640)

const toTop = () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
}
</script>

<template>
  <Transition name="stt">
    <button
      v-show="visible"
      type="button"
      class="fixed bottom-7 right-7 z-40 grid h-12 w-12 place-items-center rounded-full bg-forest-900 text-cream shadow-card ring-1 ring-gold-500/40 transition-transform duration-300 hover:-translate-y-1 hover:bg-forest-800"
      aria-label="Nach oben scrollen"
      @click="toTop"
    >
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.stt-enter-active,
.stt-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.stt-enter-from,
.stt-leave-to {
  opacity: 0;
  transform: translateY(18px) scale(0.85);
}
</style>
