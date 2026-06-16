<script setup>
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const features = [
  {
    title: 'Vielfältige Freizeitmöglichkeiten',
    text: 'Von aufregenden Fahrten auf der Alpine Coaster Bahn bis hin zu entspannenden Stunden im Freibad.',
    icon: 'compass',
  },
  {
    title: 'Naturerlebnis und Erholung',
    text: 'Idyllische Rad- und Wanderwege, Aussichtsturm und Wildgehege – Natur pur im Erzgebirge.',
    icon: 'leaf',
  },
  {
    title: 'Komfortable Unterkünfte',
    text: 'Gemütliche Blockhütten, moderne Zinipi Lodges und gut ausgestattete Wohnmobilstellplätze.',
    icon: 'cabin',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-forest-900 py-24 text-cream sm:py-32 grain">
    <!-- subtle topographic glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-[1px] w-3/4 -translate-x-1/2 divider-leaf opacity-60"
    />
    <div
      class="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full opacity-10 blur-3xl"
      style="background: radial-gradient(circle, var(--color-gold-400), transparent 70%);"
    />

    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <div class="mb-16 text-center">
        <ScrollReveal><p class="eyebrow text-gold-300">Warum Kegelsberg</p></ScrollReveal>
        <AnimatedHeading
          text="Drei gute Gründe für Ihren Besuch"
          as="h2"
          class="mx-auto mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold"
        />
      </div>

      <ScrollReveal as="div" stagger :stagger-amount="0.15" class="grid gap-10 md:grid-cols-3">
        <div
          v-for="f in features"
          :key="f.title"
          class="group relative rounded-3xl border border-cream/10 bg-cream/[0.03] p-8 transition-colors duration-500 hover:border-gold-400/40 hover:bg-cream/[0.06]"
        >
          <div
            class="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gold-500/15 text-gold-300 ring-1 ring-gold-400/30 transition-transform duration-500 group-hover:-translate-y-1"
          >
            <!-- Compass -->
            <svg v-if="f.icon === 'compass'" viewBox="0 0 24 24" class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>
            <!-- Leaf -->
            <svg v-else-if="f.icon === 'leaf'" viewBox="0 0 24 24" class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13C4 8 8 4 18 4c0 10-4 14-9 14a7 7 0 0 1-3-1z"/><path d="M8 16c2-5 5-7 9-8"/></svg>
            <!-- Cabin -->
            <svg v-else viewBox="0 0 24 24" class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-5h6v5"/></svg>
          </div>

          <h3 class="font-display text-2xl font-semibold text-cream">{{ f.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-cream/65">{{ f.text }}</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
