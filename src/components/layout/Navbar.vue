<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 40)
const mobileOpen = ref(false)

const links = [
  { to: '/', label: 'Startseite' },
  { to: '/sommerrodelbahn', label: 'Sommerrodelbahn' },
  { to: '/uebernachtung', label: 'Übernachtung' },
  { to: '/info', label: 'Anfahrt & Info' },
]

// Lock background scroll while the mobile overlay is open.
watch(mobileOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

const closeMenu = () => (mobileOpen.value = false)

// Text/mark color: light over the transparent hero, dark once glass kicks in.
const darkText = computed(() => scrolled.value && !mobileOpen.value)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,padding] duration-500"
    :class="[
      scrolled ? 'glass py-3 shadow-soft' : 'bg-transparent py-5',
    ]"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
      <!-- Wordmark -->
      <RouterLink
        to="/"
        class="group flex flex-col leading-none transition-colors duration-500"
        :class="darkText ? 'text-forest-900' : 'text-cream'"
        @click="closeMenu"
        aria-label="Erlebnisland Kegelsberg — Startseite"
      >
        <span class="font-display text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
          Erlebnisland
        </span>
        <span
          class="eyebrow mt-0.5 text-[0.6rem] transition-colors duration-500"
          :class="darkText ? 'text-gold-600' : 'text-gold-300'"
        >
          Kegelsberg · Erzgebirge
        </span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-9 lg:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="link-underline text-sm font-medium tracking-wide transition-colors duration-500"
          :class="darkText ? 'text-forest-900/80 hover:text-forest-900' : 'text-cream/85 hover:text-cream'"
          active-class="!text-gold-500 after:scale-x-100"
        >
          {{ link.label }}
        </RouterLink>

        <RouterLink to="/uebernachtung#anfrage" class="btn-gold !py-2.5 !px-6 text-sm">
          Jetzt anfragen
        </RouterLink>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
        :class="darkText || mobileOpen ? 'text-forest-900' : 'text-cream'"
        :aria-expanded="mobileOpen"
        aria-label="Menü öffnen oder schließen"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="sr-only">Menü</span>
        <div class="flex w-7 flex-col gap-[6px]">
          <span
            class="h-[2px] w-full rounded-full bg-current transition-all duration-300"
            :class="mobileOpen ? 'translate-y-[8px] rotate-45' : ''"
          />
          <span
            class="h-[2px] w-full rounded-full bg-current transition-all duration-300"
            :class="mobileOpen ? 'opacity-0' : ''"
          />
          <span
            class="h-[2px] w-full rounded-full bg-current transition-all duration-300"
            :class="mobileOpen ? '-translate-y-[8px] -rotate-45' : ''"
          />
        </div>
      </button>
    </div>

    <!-- Mobile full-screen overlay -->
    <Transition name="overlay">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 z-40 flex flex-col bg-forest-950 lg:hidden grain"
      >
        <div
          class="absolute inset-0 opacity-30"
          style="background: radial-gradient(circle at 80% 15%, rgba(200,164,90,0.35), transparent 55%);"
        />
        <nav class="relative mt-28 flex flex-1 flex-col gap-2 px-8">
          <RouterLink
            v-for="(link, i) in links"
            :key="link.to"
            :to="link.to"
            class="overlay-link border-b border-cream/10 py-5 font-display text-4xl text-cream/90 transition-colors hover:text-gold-300"
            :style="{ '--i': i }"
            active-class="!text-gold-400"
            @click="closeMenu"
          >
            {{ link.label }}
          </RouterLink>

          <RouterLink
            to="/uebernachtung#anfrage"
            class="btn-gold overlay-link mt-8 justify-center"
            :style="{ '--i': links.length }"
            @click="closeMenu"
          >
            Jetzt anfragen
          </RouterLink>

          <div
            class="overlay-link mt-auto mb-10 space-y-1 text-sm text-cream/55"
            :style="{ '--i': links.length + 1 }"
          >
            <p>Kemtauer Straße 27, 09423 Gelenau/Erzgeb.</p>
            <a href="tel:+49372977900" class="block hover:text-gold-300">Tel. 037297 / 7900</a>
            <a href="mailto:fewo@gewo-gmbh.de" class="block hover:text-gold-300">fewo@gewo-gmbh.de</a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Overlay fade */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.45s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* Staggered link entrance */
.overlay-enter-active .overlay-link {
  opacity: 0;
  transform: translateY(26px);
  animation: overlayIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(0.12s + var(--i) * 0.07s);
}
@keyframes overlayIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (prefers-reduced-motion: reduce) {
  .overlay-enter-active .overlay-link {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
