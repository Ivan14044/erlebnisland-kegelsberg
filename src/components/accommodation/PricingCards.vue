<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

defineProps({
  plans: { type: Array, required: true },
})

const root = ref(null)

useScrollAnimation(({ stagger }) => {
  if (!root.value) return
  stagger(root.value.querySelectorAll('.pricing-card'), {
    trigger: root.value,
    start: 'top 82%',
    stagger: 0.12,
    y: 46,
  })
  stagger(root.value.querySelectorAll('.feature-item'), {
    trigger: root.value,
    start: 'top 72%',
    stagger: 0.045,
    y: 14,
    duration: 0.6,
  })
}, root)
</script>

<template>
  <div ref="root" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    <div
      v-for="plan in plans"
      :key="plan.name"
      class="pricing-card group relative flex flex-col rounded-3xl border p-7 backdrop-blur-md transition-transform duration-500 hover:-translate-y-2"
      :class="
        plan.featured
          ? 'border-gold-400/60 bg-white/80 shadow-[var(--shadow-glow)] lg:-translate-y-3'
          : 'border-forest-900/10 bg-white/55 shadow-soft'
      "
    >
      <span
        v-if="plan.featured"
        class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-forest-950"
      >
        Beliebt
      </span>

      <p class="eyebrow text-gold-600">{{ plan.name }}</p>
      <p class="mt-4 flex items-baseline gap-1">
        <span class="font-display text-5xl font-semibold text-forest-900">{{ plan.price }}</span>
        <span class="text-lg font-medium text-charcoal/60">€</span>
      </p>
      <p class="mt-1 text-sm text-charcoal/55">{{ plan.unit }}</p>

      <div class="my-6 h-px w-full bg-forest-900/10" />

      <ul class="flex-1 space-y-3">
        <li v-for="f in plan.features" :key="f" class="feature-item flex items-start gap-3 text-sm text-charcoal/75">
          <svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 shrink-0 text-forest-600" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>
          {{ f }}
        </li>
      </ul>

      <RouterLink
        to="/uebernachtung#anfrage"
        class="mt-7 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-colors duration-300"
        :class="
          plan.featured
            ? 'bg-forest-900 text-cream hover:bg-forest-800'
            : 'border border-forest-900/20 text-forest-900 hover:border-forest-900 hover:bg-forest-900 hover:text-cream'
        "
      >
        Anfragen
      </RouterLink>
    </div>
  </div>
</template>
