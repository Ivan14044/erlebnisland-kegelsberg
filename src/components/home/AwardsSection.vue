<script setup>
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const scores = [
  { value: '8,2', label: 'Booking.com 2025' },
  { value: '8,4', label: 'Hotel.social 2025' },
]

const badges = [
  { src: '/images/awards/booking-award.png', alt: 'Booking.com Traveller Review Award 2025 — 8,2 von 10' },
  { src: '/images/awards/auszeichnung.jpg', alt: 'Hotel.social Certificate of Excellence 2025 — Reviewscore 8,4 von 10' },
  { src: '/images/awards/beyondcamping-2024.png', alt: 'BEYOND CAMPING — Top Campingplätze 2024' },
  { src: '/images/awards/alpaca-2023.jpeg', alt: 'Alpacacamping — Top Campingplatz 2023' },
]
</script>

<template>
  <section class="relative bg-cream py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-5 text-center sm:px-8">
      <ScrollReveal><p class="eyebrow text-gold-600">Ausgezeichnet & weiterempfohlen</p></ScrollReveal>
      <AnimatedHeading
        text="Das sagen unsere Gäste"
        as="h2"
        class="mx-auto mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-forest-900"
      />
      <ScrollReveal :y="24" :delay="0.1">
        <p class="mx-auto mt-5 max-w-2xl leading-relaxed text-charcoal/70">
          Unsere „Blockhütte am Kegelsberg" wird Jahr für Jahr von unseren Gästen und von
          renommierten Fachportalen ausgezeichnet – ein Versprechen für Ihren Aufenthalt.
        </p>
      </ScrollReveal>

      <!-- Review scores -->
      <ScrollReveal as="div" stagger :stagger-amount="0.12" :y="26" class="mt-10 flex flex-wrap justify-center gap-4">
        <div v-for="s in scores" :key="s.label" class="flex items-center gap-4 rounded-2xl bg-forest-900 px-7 py-5 text-left text-cream">
          <span class="font-display text-5xl font-semibold leading-none text-gold-300">{{ s.value }}</span>
          <span class="text-sm leading-tight">
            <span class="block text-cream/55">von 10</span>
            <span class="mt-1 block text-xs uppercase tracking-[0.12em] text-cream/80">{{ s.label }}</span>
          </span>
        </div>
      </ScrollReveal>

      <!-- Award badges -->
      <ScrollReveal as="div" stagger :stagger-amount="0.1" :y="30" class="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
        <div
          v-for="b in badges"
          :key="b.src"
          class="flex h-36 items-center justify-center rounded-2xl border border-forest-900/10 bg-white/70 p-6 shadow-soft transition-transform duration-500 hover:-translate-y-1"
        >
          <img :src="b.src" :alt="b.alt" loading="lazy" class="max-h-full max-w-full object-contain" />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
