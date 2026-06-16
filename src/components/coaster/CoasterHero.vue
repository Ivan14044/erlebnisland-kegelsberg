<script setup>
import ParallaxImage from '@/components/ui/ParallaxImage.vue'
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
</script>

<template>
  <section class="relative flex h-[82vh] min-h-[560px] items-end overflow-hidden grain">
    <div class="absolute inset-0">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1536768139911-e290a59011f4?w=2000&q=80"
        alt="Rasante Fahrt auf der Alpine Coaster Bahn"
        :speed="12"
        eager
        class="h-full w-full"
      />
    </div>
    <div class="absolute inset-0 hero-gradient" />

    <div class="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24">
      <p class="eyebrow hero-fade text-gold-300" style="--d: 0.1s">Alpine Coaster · Adrenalin pur</p>
      <AnimatedHeading
        text="Ihre Sommerrodelbahn im Herzen des Erzgebirges"
        as="h1"
        trigger="load"
        :delay="0.3"
        class="mt-5 max-w-4xl font-display text-[clamp(2.4rem,6.5vw,5.5rem)] font-semibold leading-[1.0] text-cream text-shadow-lux"
      />
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
