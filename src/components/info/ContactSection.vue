<script setup>
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const cards = [
  {
    icon: 'pin',
    label: 'Adresse',
    lines: ['Kemtauer Straße 27', '09423 Gelenau / Erzgeb.'],
    href: 'https://www.google.com/maps/dir/?api=1&destination=Erlebnisland%20Kegelsberg%2C%20Kemtauer%20Stra%C3%9Fe%2027%2C%2009423%20Gelenau',
    action: 'Route planen',
  },
  {
    icon: 'phone',
    label: 'Telefon',
    lines: ['037297 / 7900', 'Mo–Fr 10–14 Uhr'],
    href: 'tel:+49372977900',
    action: 'Jetzt anrufen',
  },
  {
    icon: 'mail',
    label: 'E-Mail',
    lines: ['fewo@gewo-gmbh.de'],
    href: 'mailto:fewo@gewo-gmbh.de',
    action: 'E-Mail schreiben',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-forest-950 py-24 text-cream sm:py-32 grain">
    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <div class="mb-14 max-w-2xl">
        <ScrollReveal><p class="eyebrow text-gold-300">Kontakt</p></ScrollReveal>
        <AnimatedHeading
          text="So erreichen Sie uns"
          as="h2"
          class="mt-4 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-semibold"
        />
      </div>

      <ScrollReveal as="div" stagger :stagger-amount="0.12" class="grid gap-6 md:grid-cols-3">
        <a
          v-for="c in cards"
          :key="c.label"
          :href="c.href"
          :target="c.icon === 'pin' ? '_blank' : undefined"
          :rel="c.icon === 'pin' ? 'noopener noreferrer' : undefined"
          class="group flex flex-col rounded-3xl border border-cream/10 bg-cream/[0.04] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-cream/[0.07]"
        >
          <span class="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gold-500/15 text-gold-300 ring-1 ring-gold-400/25 transition-transform duration-500 group-hover:-translate-y-1">
            <svg v-if="c.icon === 'pin'" viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>
            <svg v-else-if="c.icon === 'phone'" viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 4h3l2 5-2 1c1 2 2 3 4 4l1-2 5 2v3c0 1-1 2-2 2A16 16 0 0 1 3 6c0-1 1-2 2-2z"/></svg>
            <svg v-else viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          </span>

          <p class="eyebrow text-cream/45">{{ c.label }}</p>
          <div class="mt-2 flex-1">
            <p v-for="line in c.lines" :key="line" class="text-lg leading-snug text-cream/90">{{ line }}</p>
          </div>
          <span class="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300">
            {{ c.action }}
            <svg viewBox="0 0 24 24" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </a>
      </ScrollReveal>
    </div>
  </section>
</template>
