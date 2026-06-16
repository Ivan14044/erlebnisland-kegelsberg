<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const props = defineProps({
  as: { type: String, default: 'div' },
  y: { type: Number, default: 48 },
  delay: { type: Number, default: 0 },
  duration: { type: Number, default: 1.1 },
  start: { type: String, default: 'top 85%' },
  // When true, the component's direct children animate in sequence.
  stagger: { type: Boolean, default: false },
  staggerAmount: { type: Number, default: 0.12 },
})

const el = ref(null)

useScrollAnimation(({ reveal, stagger }) => {
  if (!el.value) return
  if (props.stagger) {
    stagger(el.value.children, {
      y: props.y,
      duration: props.duration,
      stagger: props.staggerAmount,
      start: props.start,
      trigger: el.value,
    })
  } else {
    reveal(el.value, {
      y: props.y,
      delay: props.delay,
      duration: props.duration,
      start: props.start,
    })
  }
}, el)
</script>

<template>
  <component :is="as" ref="el">
    <slot />
  </component>
</template>
