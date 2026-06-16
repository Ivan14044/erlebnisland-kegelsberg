<script setup>
import ParallaxImage from '@/components/ui/ParallaxImage.vue'
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
</script>

<template>
  <section class="relative flex h-[82vh] min-h-[560px] items-end overflow-hidden grain">
    <div class="absolute inset-0">
      <ParallaxImage
        src="/images/blockhuetten.jpg"
        alt="Gemütliche Blockhütten im Freibadgelände des Erlebnislandes Kegelsberg"
        :speed="12"
        eager
        class="h-full w-full"
      />
    </div>
    <div class="absolute inset-0 hero-gradient" />

    <div class="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24">
      <p class="eyebrow hero-fade text-gold-300" style="--d: 0.1s">Ihr Aufenthalt im Erlebnisland Kegelsberg</p>
      <AnimatedHeading
        text="Übernachtungen im Erzgebirge"
        as="h1"
        trigger="load"
        :delay="0.3"
        class="mt-5 font-display text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.98] text-cream text-shadow-lux"
      />
      <p class="hero-fade mt-6 max-w-xl text-lg text-cream/85" style="--d: 0.9s">
        Vom rustikalen Blockhaus über moderne Zinipi Lodges bis zum großzügigen Stellplatz –
        finden Sie Ihr Zuhause auf Zeit.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero-fade {
  opacity: 0;
  transform: translateY(24px);
  animation: heroFade 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--d, 0s);
}
@keyframes heroFade {
  to { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-fade { opacity: 1; transform: none; animation: none; }
}
</style>
