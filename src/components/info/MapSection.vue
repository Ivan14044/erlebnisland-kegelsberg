<script setup>
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const embedSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.0977931794496!2d12.976931276841794!3d50.718124868054296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a74f5bd4719037%3A0xf7804741a9b9bcf3!2sErlebnisland%20Kegelsberg!5e0!3m2!1sen!2str!4v1719223439265!5m2!1sen!2str'

const directionsHref =
  'https://www.google.com/maps/dir/?api=1&destination=Erlebnisland%20Kegelsberg%2C%20Kemtauer%20Stra%C3%9Fe%2027%2C%2009423%20Gelenau'
</script>

<template>
  <section class="bg-cream pb-24 sm:pb-32">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <ScrollReveal :y="40">
        <div class="relative overflow-hidden rounded-3xl shadow-card ring-1 ring-forest-900/10">
          <iframe
            :src="embedSrc"
            title="Standort Erlebnisland Kegelsberg auf Google Maps"
            class="block h-[360px] w-full sm:h-[520px]"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <!-- Floating address card -->
          <div class="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-auto sm:bottom-8 sm:left-8 sm:max-w-sm">
            <div class="pointer-events-auto rounded-2xl bg-forest-950/90 p-6 text-cream shadow-card backdrop-blur-md">
              <p class="eyebrow text-gold-300">Sie finden uns hier</p>
              <p class="mt-3 font-display text-2xl font-semibold leading-snug">
                Erlebnisland Kegelsberg
              </p>
              <p class="mt-1 text-sm text-cream/70">Kemtauer Straße 27 · 09423 Gelenau / Erzgeb.</p>
              <a
                :href="directionsHref"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-gold mt-5 !py-2.5 !px-6 text-sm"
              >
                Route planen
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 22 2l-9 19-2-8z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
