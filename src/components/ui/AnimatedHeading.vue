<script setup>
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/composables/useScrollAnimation'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  text: { type: String, required: true },
  as: { type: String, default: 'h2' },
  // 'load' animates immediately on mount; 'scroll' waits for the viewport.
  trigger: { type: String, default: 'scroll' },
  delay: { type: Number, default: 0 },
  stagger: { type: Number, default: 0.07 },
})

const root = ref(null)
const words = computed(() => props.text.split(' '))

onMounted(() => {
  if (!root.value) return
  const inners = root.value.querySelectorAll('.word-inner')
  if (prefersReducedMotion()) {
    gsap.set(inners, { y: 0, opacity: 1, filter: 'blur(0px)' })
    return
  }

  gsap.set(inners, { y: '0.5em', opacity: 0, filter: 'blur(8px)' })

  const vars = {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 1.15,
    ease: 'power3.out',
    stagger: props.stagger,
    delay: props.delay,
  }

  if (props.trigger === 'load') {
    gsap.to(inners, vars)
  } else {
    gsap.to(inners, {
      ...vars,
      scrollTrigger: { trigger: root.value, start: 'top 85%', once: true },
    })
  }
})
</script>

<template>
  <component :is="as" ref="root">
    <template v-for="(word, i) in words" :key="i"><span class="word-mask"><span class="word-inner">{{ word }}</span></span>{{ ' ' }}</template>
  </component>
</template>

<style scoped>
.word-mask {
  display: inline-block;
}
.word-inner {
  display: inline-block;
  will-change: transform, opacity, filter;
}
</style>
