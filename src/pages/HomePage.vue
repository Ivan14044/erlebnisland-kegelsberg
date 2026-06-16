<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import ActivityCards from '@/components/home/ActivityCards.vue'
import FeatureHighlights from '@/components/home/FeatureHighlights.vue'
import CtaBanner from '@/components/home/CtaBanner.vue'
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const stats = [
  { value: '10', label: 'Erlebnisse vor Ort' },
  { value: '40', label: 'Betten in Blockhütten' },
  { value: 'Apr–Okt', label: 'Rodelbahn-Saison' },
]
</script>

<template>
  <div>
    <HeroSection />

    <!-- Intro -->
    <section class="relative bg-cream py-24 sm:py-32">
      <div class="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <ScrollReveal><p class="eyebrow text-gold-600">Willkommen am Kegelsberg</p></ScrollReveal>
          <AnimatedHeading
            text="Ihre Adresse für familienfreundliche Erlebnisurlaube im Erzgebirge"
            as="h2"
            class="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.08] text-forest-900"
          />
          <ScrollReveal :delay="0.15">
            <div class="mt-8 h-[2px] w-24 bg-gold-500" />
          </ScrollReveal>
        </div>

        <div class="lg:col-span-7">
          <ScrollReveal :y="36">
            <p class="font-display text-2xl font-light leading-relaxed text-charcoal-soft sm:text-[1.7rem]">
              Inmitten der malerischen Gemeinde Gelenau im Erzgebirge liegt unser Ferienpark
              „Erlebnisland am Kegelsberg". Hier erwartet Sie eine vielfältige Auswahl an
              Übernachtungsmöglichkeiten und Freizeitaktivitäten für Jung und Alt.
            </p>
          </ScrollReveal>
          <ScrollReveal :delay="0.1" :y="30">
            <p class="mt-6 max-w-2xl leading-relaxed text-charcoal/70">
              Ob rasante Fahrten auf der Alpine-Coasterbahn, entspannende Stunden im Freibad oder
              spannende Wanderungen entlang des Naturlehrpfades – bei uns gibt es für jeden etwas
              zu entdecken.
            </p>
          </ScrollReveal>

          <!-- Stats -->
          <ScrollReveal as="div" stagger :stagger-amount="0.12" :y="28" class="mt-12 grid grid-cols-3 gap-6 border-t border-charcoal/10 pt-10">
            <div v-for="s in stats" :key="s.label">
              <p class="font-display text-4xl font-semibold text-forest-700 sm:text-5xl">{{ s.value }}</p>
              <p class="mt-2 text-xs uppercase tracking-[0.16em] text-charcoal/55 sm:text-sm sm:tracking-[0.12em]">{{ s.label }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <ActivityCards />
    <FeatureHighlights />
    <CtaBanner />
  </div>
</template>
