<script setup>
import { ref } from 'vue'
import ParallaxImage from '@/components/ui/ParallaxImage.vue'
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import { useParallax } from '@/composables/useParallax'
import { useMagnetic } from '@/composables/useMagnetic'

const hero = ref(null)
useParallax(hero, { strength: 34 })
useMagnetic(hero)

const scrollToActivities = () => {
  const el = document.getElementById('abenteuer')
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
}
</script>

<template>
  <section ref="hero" class="relative flex h-svh min-h-[640px] items-center overflow-hidden grain">
    <!-- Cinematic parallax background -->
    <div class="absolute inset-0">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&q=80"
        alt="Sonnendurchflutete Wälder im Erzgebirge"
        :speed="12"
        eager
        class="h-full w-full"
      />
    </div>
    <div class="absolute inset-0 hero-gradient" />
    <div class="godrays pointer-events-none absolute inset-0 opacity-60" />

    <!-- Decorative mouse-parallax glow orbs -->
    <div
      class="pointer-events-none absolute left-[8%] top-[22%] h-40 w-40 rounded-full opacity-40 blur-3xl"
      style="background: radial-gradient(circle, var(--color-gold-400), transparent 70%);"
      data-parallax="0.5"
    />
    <div
      class="pointer-events-none absolute bottom-[18%] right-[12%] h-56 w-56 rounded-full opacity-25 blur-3xl"
      style="background: radial-gradient(circle, var(--color-sage-400), transparent 70%);"
      data-parallax="0.9"
    />

    <!-- Content -->
    <div class="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
      <div class="max-w-3xl">
        <p class="eyebrow hero-fade text-gold-300" style="--d: 0.1s">
          Ferienpark im Erzgebirge · Gelenau
        </p>

        <AnimatedHeading
          text="Erlebnisland Kegelsberg"
          as="h1"
          trigger="load"
          :delay="0.35"
          :stagger="0.09"
          class="mt-5 font-display text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.98] text-cream text-shadow-lux"
        />

        <p
          class="hero-fade mt-6 max-w-xl font-display text-2xl font-light italic text-cream/90 sm:text-3xl"
          style="--d: 1.1s"
        >
          Wo Spaß und Natur Hand in Hand gehen.
        </p>

        <div class="hero-fade mt-10 flex flex-wrap items-center gap-4" style="--d: 1.35s">
          <button data-magnetic data-cursor class="btn-gold" @click="scrollToActivities">
            Abenteuer entdecken
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </button>
          <RouterLink to="/uebernachtung#anfrage" data-magnetic data-cursor class="btn-outline">
            Aufenthalt anfragen
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <button
      class="hero-fade absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/70 transition-colors hover:text-cream"
      style="--d: 1.7s"
      aria-label="Nach unten scrollen"
      @click="scrollToActivities"
    >
      <span class="eyebrow text-[0.6rem]">Entdecken</span>
      <span class="relative flex h-12 w-[1px] overflow-hidden bg-cream/30">
        <span class="scroll-bead absolute left-0 top-0 h-4 w-full bg-gold-300" />
      </span>
    </button>
  </section>
</template>

<style scoped>
.hero-fade {
  opacity: 0;
  transform: translateY(26px);
  animation: heroFade 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--d, 0s);
}
@keyframes heroFade {
  to {
    opacity: 1;
    transform: none;
  }
}
.scroll-bead {
  animation: beadDrop 2.2s ease-in-out infinite;
}
@keyframes beadDrop {
  0% { transform: translateY(-100%); }
  60%, 100% { transform: translateY(300%); }
}
@media (prefers-reduced-motion: reduce) {
  .hero-fade { opacity: 1; transform: none; animation: none; }
  .scroll-bead { animation: none; }
}
</style>
