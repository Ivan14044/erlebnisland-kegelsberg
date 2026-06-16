<script setup>
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import ParallaxImage from '@/components/ui/ParallaxImage.vue'

const highlights = [
  { title: 'Anfänger & Profis', text: 'Die Strecke ist für jedes Tempo bestens geeignet.', icon: 'gauge' },
  { title: 'Einzel- & Doppelrodel', text: 'Allein oder zu zweit – sichere, komfortable Schlitten.', icon: 'sled' },
  { title: 'Café & Spielplatz', text: 'Entspannen nach der Abfahrt, ganz in der Nähe.', icon: 'cup' },
]
</script>

<template>
  <section class="relative bg-cream py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
      <!-- Text -->
      <div>
        <ScrollReveal><p class="eyebrow text-gold-600">Nervenkitzel garantiert</p></ScrollReveal>
        <AnimatedHeading
          text="Sommerrodelbahn im Erlebnisland Kegelsberg"
          as="h2"
          class="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.06] text-forest-900"
        />

        <div class="mt-8 space-y-6 leading-relaxed text-charcoal/75">
          <ScrollReveal :y="30">
            <p class="font-display text-xl font-light leading-relaxed text-charcoal-soft sm:text-2xl">
              Erleben Sie den ultimativen Nervenkitzel auf unserer Sommerrodelbahn! Mit rasanter
              Geschwindigkeit sausen Sie die Hänge hinab und genießen dabei den Wind im Gesicht und
              die atemberaubende Aussicht auf das idyllische Erzgebirge. Die Strecke ist sowohl für
              Anfänger als auch für erfahrene Rodelbegeisterte bestens geeignet.
            </p>
          </ScrollReveal>
          <ScrollReveal :y="26" :delay="0.05">
            <p>
              Unsere moderne Alpine Coaster Bahn bietet sichere und komfortable Schlitten, die Ihnen
              ein unvergessliches Fahrerlebnis ermöglichen. Ob Sie alleine oder im Doppelrodel
              unterwegs sind – die Strecke führt durch malerische Landschaften und bietet zahlreiche
              Kurven, Wellen und sogar Jumps, die für extra Adrenalin sorgen.
            </p>
          </ScrollReveal>
          <ScrollReveal :y="26" :delay="0.1">
            <p>
              Nach der aufregenden Abfahrt können Sie sich in unserem gemütlichen Café entspannen
              und bei einem erfrischenden Getränk die Eindrücke Revue passieren lassen. Für die
              kleinen Gäste gibt es zudem einen nahegelegenen Spielplatz, auf dem sie sich weiter
              austoben können.
            </p>
          </ScrollReveal>
          <ScrollReveal :y="26" :delay="0.15">
            <p>
              Kommen Sie ins Erlebnisland Kegelsberg und entdecken Sie den Fahrspaß auf unserer
              Sommerrodelbahn – ein Highlight für Groß und Klein im schönen Erzgebirge!
            </p>
          </ScrollReveal>
        </div>
      </div>

      <!-- Image collage -->
      <ScrollReveal :y="50">
        <div class="relative">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1567714608682-71e2e1506f4a?w=1000&q=80"
            alt="Schlitten der Alpine Coaster Bahn in Fahrt"
            :speed="10"
            class="aspect-[4/5] rounded-3xl shadow-card"
          />
          <div
            class="absolute -bottom-8 -left-6 hidden w-44 rounded-2xl bg-forest-900 p-5 text-cream shadow-card sm:block"
          >
            <p class="font-display text-4xl font-semibold text-gold-300">13–18</p>
            <p class="mt-1 text-xs uppercase tracking-[0.14em] text-cream/70">Uhr · Apr–Okt</p>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <!-- Highlights -->
    <div class="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
      <ScrollReveal as="div" stagger :stagger-amount="0.12" class="grid gap-5 sm:grid-cols-3">
        <div
          v-for="h in highlights"
          :key="h.title"
          class="rounded-3xl border border-forest-900/10 bg-white/60 p-7 shadow-soft transition-transform duration-500 hover:-translate-y-1"
        >
          <div class="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-forest-900 text-gold-300">
            <svg v-if="h.icon === 'gauge'" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 13 16 9"/><path d="M5 18a9 9 0 1 1 14 0"/><circle cx="12" cy="13" r="1.4" fill="currentColor"/></svg>
            <svg v-else-if="h.icon === 'sled'" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h12a4 4 0 0 1 4 4v2H8a4 4 0 0 1-4-4z"/><path d="M4 17h15"/><path d="M7 17v2M16 17v2"/></svg>
            <svg v-else viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 9h2a2 2 0 0 1 0 4h-2"/><path d="M8 3v2M11 3v2"/></svg>
          </div>
          <h3 class="font-display text-xl font-semibold text-forest-900">{{ h.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-charcoal/65">{{ h.text }}</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
