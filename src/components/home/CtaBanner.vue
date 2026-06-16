<script setup>
import { RouterLink } from 'vue-router'
import ParallaxImage from '@/components/ui/ParallaxImage.vue'
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
</script>

<template>
  <section class="relative flex min-h-[70vh] items-center overflow-hidden grain">
    <div class="absolute inset-0">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1800&q=80"
        alt="Grüner Wald im Erzgebirge im Abendlicht"
        :speed="16"
        class="h-full w-full"
      />
    </div>
    <div class="absolute inset-0 bg-forest-950/70" />
    <div
      class="absolute inset-0"
      style="background: linear-gradient(115deg, rgba(12,24,16,0.85) 0%, rgba(12,24,16,0.25) 60%, transparent 100%);"
    />

    <div class="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
      <div class="max-w-2xl">
        <ScrollReveal><p class="eyebrow text-gold-300">Jetzt planen</p></ScrollReveal>
        <AnimatedHeading
          text="Buchen Sie Ihren unvergesslichen Urlaub im Erzgebirge"
          as="h2"
          class="mt-5 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] text-cream text-shadow-lux"
        />
        <ScrollReveal :delay="0.2">
          <div class="mt-9 flex flex-wrap gap-4">
            <RouterLink to="/uebernachtung#anfrage" class="btn-gold">
              Aufenthalt anfragen
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </RouterLink>
            <RouterLink to="/sommerrodelbahn" class="btn-outline">Sommerrodelbahn entdecken</RouterLink>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
