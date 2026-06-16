<script setup>
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import ParallaxImage from '@/components/ui/ParallaxImage.vue'
import PricingCards from './PricingCards.vue'

const plans = [
  { name: '2 Personen', price: '45,00', unit: 'pro Tag', features: ['2 Schlafplätze', 'Direkt im Freibadgelände', 'Gemütliche Ausstattung'] },
  { name: '3 Personen', price: '53,00', unit: 'pro Tag', features: ['3 Schlafplätze', 'Direkt im Freibadgelände', 'Gemütliche Ausstattung'] },
  { name: '4 Personen', price: '61,00', unit: 'pro Tag', featured: true, features: ['4 Schlafplätze', 'Direkt im Freibadgelände', 'Ideal für Familien'] },
  { name: '5 Personen', price: '69,00', unit: 'pro Tag', features: ['5 Schlafplätze', 'Direkt im Freibadgelände', 'Ideal für Gruppen'] },
]
</script>

<template>
  <section id="blockhuetten" class="relative bg-cream py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <!-- Image -->
        <ScrollReveal :y="50">
          <div class="relative">
            <ParallaxImage
              src="/images/blockhuetten.jpg"
              alt="Rustikale Blockhütten im Freibadgelände"
              :speed="10"
              class="aspect-[5/4] rounded-3xl shadow-card"
            />
            <div class="absolute -right-5 -top-5 hidden rounded-2xl bg-gold-500 px-6 py-4 text-forest-950 shadow-card sm:block">
              <p class="font-display text-3xl font-semibold leading-none">10</p>
              <p class="text-xs uppercase tracking-[0.12em]">Blockhütten</p>
            </div>
          </div>
        </ScrollReveal>

        <!-- Text -->
        <div>
          <ScrollReveal><p class="eyebrow text-gold-600">Rustikal & gemütlich</p></ScrollReveal>
          <AnimatedHeading
            text="Rustikale Blockhütten: Ihr Zuhause im Urlaub"
            as="h2"
            class="mt-4 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.06] text-forest-900"
          />
          <ScrollReveal :y="30" :delay="0.05">
            <p class="mt-6 text-lg leading-relaxed text-charcoal/75">
              Direkt im Freibadgelände stehen 10 coole Blockhütten mit insgesamt 40 Betten für
              Übernachtungen zur Verfügung. Für Schulklassen und Vereine bestens geeignet, aber
              auch Familien können es sich hier gemütlich machen.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <!-- Pricing -->
      <div class="mt-20">
        <ScrollReveal class="mb-10 text-center">
          <p class="eyebrow text-gold-600">Preise pro Tag</p>
          <h3 class="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            Wählen Sie Ihre Hütte
          </h3>
        </ScrollReveal>
        <PricingCards :plans="plans" />
      </div>
    </div>
  </section>
</template>
