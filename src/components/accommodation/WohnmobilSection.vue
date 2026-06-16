<script setup>
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import ParallaxImage from '@/components/ui/ParallaxImage.vue'

const features = [
  'Großzügige Stellplätze',
  'Alle notwendigen Annehmlichkeiten',
  'Perfekt für einen erholsamen Zwischenstopp',
  'Auch für längere Aufenthalte geeignet',
]
</script>

<template>
  <section id="wohnmobil" class="relative bg-cream py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <!-- Image (left) -->
        <ScrollReveal :y="50">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1100&q=80"
            alt="Wohnmobil-Stellplatz in der Natur des Erzgebirges"
            :speed="10"
            class="aspect-[5/4] rounded-3xl shadow-card"
          />
        </ScrollReveal>

        <!-- Text (right) -->
        <div>
          <ScrollReveal><p class="eyebrow text-gold-600">Freiheit & Komfort</p></ScrollReveal>
          <AnimatedHeading
            text="Wohnmobilstellplatz im Erzgebirge"
            as="h2"
            class="mt-4 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.06] text-forest-900"
          />
          <ScrollReveal :y="30" :delay="0.05">
            <p class="mt-6 text-lg leading-relaxed text-charcoal/75">
              Für alle, die mit dem Wohnmobil unterwegs sind, bieten wir großzügige Stellplätze mit
              allen notwendigen Annehmlichkeiten. Die Stellplätze sind perfekt für einen erholsamen
              Zwischenstopp oder einen längeren Aufenthalt.
            </p>
          </ScrollReveal>

          <ScrollReveal as="ul" stagger :stagger-amount="0.08" :y="20" class="mt-8 grid gap-3 sm:grid-cols-2">
            <li v-for="f in features" :key="f" class="flex items-center gap-3 text-charcoal/75">
              <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-600/15 text-forest-600">
                <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>
              </span>
              {{ f }}
            </li>
          </ScrollReveal>

          <ScrollReveal :y="24" :delay="0.1">
            <div class="mt-9 inline-flex items-center gap-4 rounded-2xl border border-forest-900/15 bg-white/70 px-7 py-5 shadow-soft">
              <div>
                <p class="text-xs uppercase tracking-[0.14em] text-charcoal/50">ab</p>
                <p class="font-display text-4xl font-semibold text-forest-700">16 €</p>
              </div>
              <span class="text-sm text-charcoal/65">pro Nacht</span>
              <RouterLink to="/uebernachtung#anfrage" class="btn-gold !py-2.5 !px-6 ml-2 text-sm">Anfragen</RouterLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
</template>
