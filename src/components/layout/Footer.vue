<script setup>
import { RouterLink } from 'vue-router'
import BrandCrest from '@/components/ui/BrandCrest.vue'

const year = new Date().getFullYear()

const explore = [
  { to: '/', label: 'Startseite' },
  { to: '/sommerrodelbahn', label: 'Sommerrodelbahn' },
  { to: '/uebernachtung', label: 'Übernachtung' },
  { to: '/info', label: 'Anfahrt & Info' },
]

const stays = [
  { to: '/uebernachtung#blockhuetten', label: 'Blockhütten' },
  { to: '/uebernachtung#zinipi', label: 'Zinipi Lodges' },
  { to: '/uebernachtung#wohnmobil', label: 'Wohnmobilstellplatz' },
  { to: '/uebernachtung#anfrage', label: 'Anfrage senden' },
]
</script>

<template>
  <footer class="relative overflow-hidden bg-forest-950 text-cream/80 grain">
    <!-- Soft atmospheric glow -->
    <div
      class="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
      style="background: radial-gradient(circle, var(--color-gold-500), transparent 70%);"
    />
    <div class="divider-leaf w-full opacity-50" />

    <div class="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
      <!-- Brand -->
      <div class="lg:col-span-4">
        <div class="inline-flex items-center gap-4">
          <BrandCrest class="h-14 w-14 shrink-0 text-gold-300" />
          <div class="leading-none">
            <p class="font-display text-2xl font-semibold text-cream">Erlebnisland</p>
            <p class="eyebrow mt-1 text-[0.6rem] text-gold-400">Kegelsberg · Erzgebirge</p>
          </div>
        </div>

        <p class="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
          Ihr Ferienpark für familienfreundliche Erlebnisurlaube in Gelenau im Erzgebirge —
          wo Spaß und Natur Hand in Hand gehen.
        </p>

        <div class="mt-7 flex gap-3">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:text-gold-300"
          >
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor"><path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H18V.2C17.6.1 16.4 0 15.1 0 12.3 0 10.5 1.7 10.5 4.7V6H8v3h2.5v9H14V9z"/></svg>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:text-gold-300"
          >
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/></svg>
          </a>
        </div>
      </div>

      <!-- Explore -->
      <div class="lg:col-span-2">
        <h4 class="eyebrow mb-5 text-cream/45">Entdecken</h4>
        <ul class="space-y-3 text-sm">
          <li v-for="l in explore" :key="l.to">
            <RouterLink :to="l.to" class="link-underline text-cream/70 transition-colors hover:text-cream">
              {{ l.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Stays -->
      <div class="lg:col-span-2">
        <h4 class="eyebrow mb-5 text-cream/45">Unterkünfte</h4>
        <ul class="space-y-3 text-sm">
          <li v-for="l in stays" :key="l.to">
            <RouterLink :to="l.to" class="link-underline text-cream/70 transition-colors hover:text-cream">
              {{ l.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="lg:col-span-4">
        <h4 class="eyebrow mb-5 text-cream/45">Kontakt</h4>
        <ul class="space-y-4 text-sm">
          <li class="flex gap-3">
            <svg viewBox="0 0 24 24" class="mt-0.5 h-5 w-5 shrink-0 text-gold-400" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>
            <span class="text-cream/70">Kemtauer Straße 27<br />09423 Gelenau / Erzgeb.</span>
          </li>
          <li class="flex gap-3">
            <svg viewBox="0 0 24 24" class="mt-0.5 h-5 w-5 shrink-0 text-gold-400" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h3l2 5-2 1c1 2 2 3 4 4l1-2 5 2v3c0 1-1 2-2 2A16 16 0 0 1 3 6c0-1 1-2 2-2z"/></svg>
            <span class="text-cream/70">
              <a href="tel:+49372977900" class="hover:text-gold-300">037297 / 7900</a><br />
              <span class="text-cream/45">Mo–Fr 10–14 Uhr</span>
            </span>
          </li>
          <li class="flex gap-3">
            <svg viewBox="0 0 24 24" class="mt-0.5 h-5 w-5 shrink-0 text-gold-400" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            <span class="text-cream/70">
              <a href="mailto:fewo@gewo-gmbh.de" class="hover:text-gold-300">fewo@gewo-gmbh.de</a><br />
              <a href="mailto:info@gewo-gmbh.de" class="hover:text-gold-300">info@gewo-gmbh.de</a>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="relative border-t border-cream/10">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-cream/45 sm:flex-row sm:px-8">
        <p>© {{ year }} Erlebnisland Kegelsberg · GEWO GmbH</p>
        <div class="flex items-center gap-6">
          <RouterLink to="/impressum" class="link-underline hover:text-cream/80">Impressum</RouterLink>
          <RouterLink to="/datenschutz" class="link-underline hover:text-cream/80">Datenschutzerklärung</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
