<script setup>
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const notes = [
  {
    icon: 'calendar',
    text: 'Am Wochenende, an Feiertagen (außer Karfreitag) und täglich in den Ferien.',
  },
  {
    icon: 'group',
    text: 'Anmeldungen von Gruppen außerhalb der Öffnungszeiten sind möglich.',
  },
  {
    icon: 'snow',
    text: 'In den Wintermonaten bleibt die Bahn geschlossen!',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-forest-950 py-24 text-cream sm:py-32 grain">
    <div
      class="pointer-events-none absolute -top-32 right-10 h-96 w-96 rounded-full opacity-15 blur-3xl"
      style="background: radial-gradient(circle, var(--color-gold-400), transparent 70%);"
    />

    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <div class="mb-14 max-w-2xl">
        <ScrollReveal><p class="eyebrow text-gold-300">Gut zu wissen</p></ScrollReveal>
        <AnimatedHeading
          text="Öffnungszeiten der Rodelbahn"
          as="h2"
          class="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold"
        />
      </div>

      <div class="grid gap-8 lg:grid-cols-12">
        <!-- Hours hero panel -->
        <ScrollReveal as="div" :y="44" class="lg:col-span-5">
          <div class="glass-dark relative h-full overflow-hidden rounded-3xl p-9">
            <p class="eyebrow text-cream/55">Saison & Zeiten</p>
            <p class="mt-6 font-display text-6xl font-semibold leading-none text-cream">
              13<span class="text-gold-300">–</span>18<span class="ml-2 text-2xl font-light">Uhr</span>
            </p>
            <p class="mt-4 text-lg text-cream/75">April bis Oktober</p>
            <div class="my-8 divider-leaf w-full opacity-50" />
            <a
              href="tel:+4901786206057"
              class="btn-gold w-full justify-center"
            >
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3l2 5-2 1c1 2 2 3 4 4l1-2 5 2v3c0 1-1 2-2 2A16 16 0 0 1 3 6c0-1 1-2 2-2z"/></svg>
              Info-Telefon: 0178 6206057
            </a>
          </div>
        </ScrollReveal>

        <!-- Notes + safety -->
        <div class="lg:col-span-7">
          <ScrollReveal as="ul" stagger :stagger-amount="0.1" class="space-y-4">
            <li
              v-for="n in notes"
              :key="n.text"
              class="flex items-start gap-4 rounded-2xl border border-cream/10 bg-cream/[0.03] p-5"
            >
              <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-300 ring-1 ring-gold-400/25">
                <svg v-if="n.icon === 'calendar'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>
                <svg v-else-if="n.icon === 'group'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6"/></svg>
                <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/></svg>
              </span>
              <p class="pt-1.5 text-cream/80">{{ n.text }}</p>
            </li>
          </ScrollReveal>

          <!-- Safety callout -->
          <ScrollReveal :y="30" :delay="0.1">
            <div class="mt-4 flex items-start gap-4 rounded-2xl border border-gold-400/30 bg-gold-500/10 p-5">
              <svg viewBox="0 0 24 24" class="mt-0.5 h-6 w-6 shrink-0 text-gold-300" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>
              <p class="text-sm leading-relaxed text-cream/85">
                <span class="font-semibold text-cream">Sicherheitshinweis:</span>
                Bei Dunkelheit, schlechten Witterungsverhältnissen, Feuchtigkeit und Gewitter muss die
                Bahn aus Sicherheitsgründen geschlossen bleiben.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
</template>
