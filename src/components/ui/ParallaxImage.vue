<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  // How far (in %) the image drifts across the full scroll range.
  speed: { type: Number, default: 14 },
  imgClass: { type: String, default: '' },
  eager: { type: Boolean, default: false },
})

const wrap = ref(null)
const img = ref(null)
const loaded = ref(false)

useScrollAnimation(({ parallax }) => {
  if (img.value) {
    parallax(img.value, { from: -props.speed, to: props.speed, trigger: wrap.value })
  }
}, wrap)
</script>

<template>
  <div ref="wrap" class="relative overflow-hidden">
    <img
      ref="img"
      :src="src"
      :alt="alt"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      @load="loaded = true"
      class="absolute -top-[14%] left-0 h-[128%] w-full object-cover transition-[filter,opacity,transform] duration-[900ms] ease-out"
      :class="[loaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-2xl scale-105', imgClass]"
    />
    <slot />
  </div>
</template>
