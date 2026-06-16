<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import { useTilt } from '@/composables/useTilt'

const section = ref(null)
useTilt(section, { max: 5 })

// Verbatim texts from the live client website.
const activities = [
  {
    title: 'Alpine Coaster Bahn',
    text: 'Erleben Sie Nervenkitzel pur auf unserer Alpine Coaster Bahn! Rasen Sie in rasanter Geschwindigkeit durch die atemberaubende Landschaft des Erzgebirges und spüren Sie den Adrenalinkick bei jeder Kurve.',
    img: 'https://images.unsplash.com/photo-1567714608682-71e2e1506f4a?w=1100&q=80',
    to: '/sommerrodelbahn',
    wide: true,
  },
  {
    title: 'Freibad',
    text: 'Tauchen Sie ein in unser erfrischendes Freibad mit mehreren Schwimmbecken! Egal ob zum Bahnen ziehen oder zum Planschen mit den Kindern – hier findet jeder seinen perfekten Platz im kühlen Nass.',
    img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
  },
  {
    title: 'Aussichtsturm',
    text: 'Genießen Sie einen atemberaubenden Panoramablick vom Aussichtsturm! Von hier aus haben Sie eine fantastische Aussicht über das Erzgebirge und können die Schönheit der Natur in vollen Zügen bewundern.',
    img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
  },
  {
    title: 'Wildgehege',
    text: 'Entdecken Sie heimische Wildtiere hautnah in unserem Wildgehege! Ein besonderes Erlebnis für Groß und Klein, das Einblicke in die faszinierende Tierwelt des Erzgebirges bietet.',
    img: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&q=80',
  },
  {
    title: 'Lehrpfad, Rad- und Wanderwege',
    text: 'Erkunden Sie die Natur auf unserem Naturlehrpfad und den zahlreichen Rad- und Wanderwegen! Lernen Sie Interessantes über die heimische Flora und Fauna und genießen Sie dabei die frische Luft und die herrliche Landschaft.',
    img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
  },
  {
    title: 'Tennisplatz',
    text: 'Schlagen Sie ein paar Bälle auf unserem gut gepflegten Tennisplatz! Ob Anfänger oder Profi, hier können Sie in idyllischer Umgebung Ihr Können unter Beweis stellen.',
    img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
  },
  {
    title: 'Blockhütten & Zinipi Lodges',
    text: 'Erleben Sie gemütliche Nächte in unseren rustikalen Blockhütten und modernen Zinipi Lodges! Ideal für Familien, Paare oder Gruppen, die das Abenteuer suchen und dennoch Komfort genießen möchten.',
    img: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1100&q=80',
    to: '/uebernachtung',
    wide: true,
  },
  {
    title: 'Wohnmobilstellplatz',
    text: 'Für alle, die mit dem Wohnmobil unterwegs sind, bieten wir großzügige Stellplätze mit allen notwendigen Annehmlichkeiten! Genießen Sie die Freiheit und Flexibilität Ihres mobilen Zuhauses im Herzen des Erzgebirges.',
    img: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80',
    to: '/uebernachtung#wohnmobil',
  },
  {
    title: 'Spielplatz',
    text: 'Kinder können sich auf unserem großen Spielplatz so richtig austoben! Mit Schaukeln, Rutschen und Klettergerüsten ist für jede Menge Spaß und Bewegung gesorgt.',
    img: 'https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?w=800&q=80',
  },
  {
    title: 'Grillplatz & Lagerfeuerstelle',
    text: 'Lassen Sie den Tag gemütlich an unserer Grillplatz-Lagerfeuerstelle ausklingen! Perfekt für gesellige Abende mit Familie und Freunden, umgeben von der idyllischen Natur des Erzgebirges. Grillplätze können auch gemietet werden.',
    img: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=800&q=80',
  },
]
</script>

<template>
  <section id="abenteuer" ref="section" class="relative bg-cream py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <!-- Section header -->
      <div class="mb-14 max-w-2xl">
        <ScrollReveal>
          <p class="eyebrow text-gold-600">Alles an einem Ort</p>
        </ScrollReveal>
        <AnimatedHeading
          text="Abenteuer und Erholung im Erzgebirge"
          as="h2"
          class="mt-4 font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold text-forest-900"
        />
      </div>

      <!-- Asymmetric card grid -->
      <ScrollReveal
        as="div"
        stagger
        :stagger-amount="0.09"
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <component
          :is="a.to ? RouterLink : 'article'"
          v-for="(a, i) in activities"
          :key="a.title"
          :to="a.to"
          data-tilt
          data-cursor
          class="activity-card group relative block h-[380px] overflow-hidden rounded-3xl shadow-soft sm:h-[440px]"
          :class="a.wide ? 'lg:col-span-2' : ''"
        >
          <!-- Image -->
          <img
            :src="a.img"
            :alt="a.title"
            loading="lazy"
            class="absolute inset-0 h-full w-full object-cover transition-[transform,filter] duration-[900ms] ease-out group-hover:scale-105 group-hover:saturate-[1.15]"
          />
          <!-- Gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent transition-opacity duration-500 group-hover:from-forest-950"
          />
          <!-- Cursor spotlight -->
          <span class="card-spotlight" />
          <!-- Index -->
          <span class="absolute left-6 top-6 font-display text-sm text-cream/60">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <!-- Link arrow -->
          <span
            v-if="a.to"
            class="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-cream/30 text-cream transition-all duration-500 group-hover:border-gold-300 group-hover:bg-gold-300 group-hover:text-forest-950"
          >
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </span>

          <!-- Body -->
          <div class="absolute inset-x-0 bottom-0 p-6 sm:p-7">
            <h3 class="font-display text-2xl font-semibold text-cream sm:text-[1.7rem]">
              {{ a.title }}
            </h3>
            <p
              class="mt-2 max-h-72 overflow-hidden text-sm leading-relaxed text-cream/80 opacity-90 transition-all duration-500 ease-out lg:max-h-0 lg:translate-y-2 lg:opacity-0 lg:group-hover:max-h-72 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
            >
              {{ a.text }}
            </p>
            <span
              v-if="a.to"
              class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100"
            >
              Mehr erfahren
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </component>
      </ScrollReveal>
    </div>
  </section>
</template>
