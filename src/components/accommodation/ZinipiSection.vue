<script setup>
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import ParallaxImage from '@/components/ui/ParallaxImage.vue'

const features = [
  'Bequeme Betten für erholsamen Schlaf',
  'Eigenes Bad',
  'Kleine Küchenzeile',
  'Ideal für Paare oder kleine Familien',
]
</script>

<template>
  <section id="zinipi" class="relative overflow-hidden bg-forest-900 py-24 text-cream sm:py-32 grain">
    <div
      class="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full opacity-10 blur-3xl"
      style="background: radial-gradient(circle, var(--color-gold-400), transparent 70%);"
    />
    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <!-- Text (left) -->
        <div class="order-2 lg:order-1">
          <ScrollReveal><p class="eyebrow text-gold-300">Natur trifft Luxus</p></ScrollReveal>
          <AnimatedHeading
            text="Zinipi Lodges: Natur pur und Komfort"
            as="h2"
            class="mt-4 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.06]"
          />
          <ScrollReveal :y="30" :delay="0.05">
            <p class="mt-6 text-lg leading-relaxed text-cream/75">
              Erleben Sie einzigartigen Komfort in unseren modernen Zinipi Lodges. Diese innovativen
              Unterkünfte bieten eine perfekte Mischung aus Natur und Luxus – ideal für Paare oder
              kleine Familien.
            </p>
          </ScrollReveal>

          <ScrollReveal as="ul" stagger :stagger-amount="0.08" :y="20" class="mt-8 space-y-3">
            <li v-for="f in features" :key="f" class="flex items-center gap-3 text-cream/85">
              <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500/20 text-gold-300">
                <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>
              </span>
              {{ f }}
            </li>
          </ScrollReveal>

          <ScrollReveal :y="24" :delay="0.1">
            <div class="mt-9 inline-flex items-center gap-4 rounded-2xl border border-gold-400/30 bg-cream/[0.04] px-7 py-5">
              <div>
                <p class="text-xs uppercase tracking-[0.14em] text-cream/55">ab</p>
                <p class="font-display text-4xl font-semibold text-gold-300">80 €</p>
              </div>
              <span class="text-sm text-cream/70">pro Nacht</span>
              <RouterLink to="/uebernachtung#anfrage" class="btn-gold !py-2.5 !px-6 ml-2 text-sm">Anfragen</RouterLink>
            </div>
          </ScrollReveal>
        </div>

        <!-- Image (right) -->
        <ScrollReveal :y="50" class="order-1 lg:order-2">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=1100&q=80"
            alt="Moderne Zinipi Lodge im Grünen"
            :speed="10"
            class="aspect-[4/5] rounded-3xl shadow-card"
          />
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
