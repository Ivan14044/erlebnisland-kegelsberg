<script setup>
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const attractions = [
  'Stadt Chemnitz (Kulturhauptstadt 2025)',
  'Augustusburg / Burg Scharfenstein',
  'Greifensteine mit Greifenbachstauweiher',
  'Clubkino',
  'Strumpfmuseum',
  'Depot Pohl-Ströher',
  'Rastplatz Tisch’l mit geschnitzten Figuren',
  'Liegewiese Eisenstraße „Eichelbämel“',
  '„Fliegenpilz“',
  'Abenteuerspielplatz „Schmetterlingswiese“',
  'Schnitzfiguren an der Schüllermühle',
]

const dining = [
  { name: 'Imbiss im Freibad', note: 'direkt vor Ort' },
  { name: '„Toros-Döner“', note: 'mit Lieferservice' },
  { name: '„Milano-Pizza“', note: 'mit Lieferservice' },
  { name: 'Gaststätte „Waldhof“', note: '3,5 km entfernt' },
]
</script>

<template>
  <section class="relative bg-cream py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <!-- Intro -->
      <div class="mb-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <ScrollReveal><p class="eyebrow text-gold-600">Direkt vor Ort</p></ScrollReveal>
          <AnimatedHeading
            text="Freizeit und Erholung im Erzgebirge"
            as="h2"
            class="mt-4 font-display text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.06] text-forest-900"
          />
        </div>
        <ScrollReveal :y="34" class="lg:col-span-7">
          <p class="text-lg leading-relaxed text-charcoal/75">
            Das Erlebnisland Kegelsberg bietet eine Vielzahl an Freizeitmöglichkeiten direkt vor Ort.
            Entspannen Sie sich auf unserem Grillplatz oder an der Lagerfeuerstelle, während die Kinder
            sich auf den zwei Spielplätzen oder dem Trampolin austoben. Für sportliche Aktivitäten
            stehen Ihnen ein Tennisplatz und eine Tischtennisanlage zur Verfügung. Unser
            Gemeinschaftsraum ist ideal für gemütliche Spielabende. Auch das Erlebnisbad lädt zu einem
            Besuch ein.
          </p>
          <p class="mt-5 leading-relaxed text-charcoal/70">
            Zahlreiche Rad- und Wanderwege laden zu Erkundungstouren in die Umgebung ein. Auch ein
            Ausflug in die nahe gelegene Stadt Chemnitz (Kulturhauptstadt 2025) lohnt sich auf jeden Fall.
          </p>
        </ScrollReveal>
      </div>

      <div class="grid gap-8 lg:grid-cols-5">
        <!-- Attractions -->
        <ScrollReveal as="div" :y="40" class="lg:col-span-3">
          <div class="h-full rounded-3xl border border-forest-900/10 bg-white/60 p-8 shadow-soft sm:p-10">
            <div class="mb-7 flex items-center gap-3">
              <span class="grid h-11 w-11 place-items-center rounded-xl bg-forest-900 text-gold-300">
                <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 7 6-3 6 3 6-3v13l-6 3-6-3-6 3z"/><path d="M9 4v13M15 7v13"/></svg>
              </span>
              <h3 class="font-display text-2xl font-semibold text-forest-900">Sehenswertes in der Umgebung</h3>
            </div>
            <ul class="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              <li v-for="a in attractions" :key="a" class="flex items-start gap-2.5 text-sm text-charcoal/75">
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {{ a }}
              </li>
            </ul>
          </div>
        </ScrollReveal>

        <!-- Dining -->
        <ScrollReveal as="div" :y="40" :delay="0.1" class="lg:col-span-2">
          <div class="h-full rounded-3xl bg-forest-900 p-8 text-cream shadow-card sm:p-10">
            <div class="mb-7 flex items-center gap-3">
              <span class="grid h-11 w-11 place-items-center rounded-xl bg-gold-500/15 text-gold-300 ring-1 ring-gold-400/25">
                <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v8a3 3 0 0 0 6 0V3M7 3v18M17 3c-1.5 0-3 1.5-3 5s1.5 5 3 5"/><path d="M17 3v18"/></svg>
              </span>
              <h3 class="font-display text-2xl font-semibold">Essen & Trinken</h3>
            </div>
            <ul class="space-y-4">
              <li v-for="d in dining" :key="d.name" class="border-b border-cream/10 pb-4 last:border-0 last:pb-0">
                <p class="font-medium text-cream">{{ d.name }}</p>
                <p class="text-sm text-cream/55">{{ d.note }}</p>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
