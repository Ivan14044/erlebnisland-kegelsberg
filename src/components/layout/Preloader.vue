<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import BrandCrest from '@/components/ui/BrandCrest.vue'
import { prefersReducedMotion } from '@/composables/useScrollAnimation'

const show = ref(true)
const letters = 'ERLEBNISLAND'.split('')

onMounted(() => {
  // Show the intro only once per browser session.
  if (sessionStorage.getItem('ek-intro-seen')) {
    show.value = false
    return
  }
  sessionStorage.setItem('ek-intro-seen', '1')
  document.body.style.overflow = 'hidden'

  let done = false
  const finish = () => {
    if (done) return
    done = true
    document.body.style.overflow = ''
    show.value = false
  }

  // Safety net: always lift the curtain even if rAF is throttled (background tab).
  window.setTimeout(finish, 5000)

  if (prefersReducedMotion()) {
    window.setTimeout(finish, 350)
    return
  }

  const tl = gsap.timeline({ onComplete: finish })
  tl.from('.pl-crest', { scale: 0.8, autoAlpha: 0, duration: 0.9, ease: 'power3.out' })
    .from('.pl-letter', { yPercent: 120, autoAlpha: 0, stagger: 0.045, duration: 0.7, ease: 'power3.out' }, '-=0.45')
    .from('.pl-sub', { autoAlpha: 0, y: 10, duration: 0.5 }, '-=0.3')
    .to('.pl-bar-fill', { scaleX: 1, duration: 1.0, ease: 'power2.inOut' }, '-=0.4')
    .to('.pl-content', { autoAlpha: 0, y: -24, duration: 0.5, ease: 'power2.in' }, '+=0.15')
    .to('.pl-panel', { yPercent: -100, duration: 0.9, ease: 'power4.inOut', stagger: 0.07 }, '-=0.15')
})
</script>

<template>
  <div v-if="show" class="preloader" aria-hidden="true">
    <div class="pl-panels">
      <span v-for="n in 5" :key="n" class="pl-panel" />
    </div>

    <div class="pl-content">
      <BrandCrest class="pl-crest h-20 w-20 text-gold-300" />
      <div class="pl-word">
        <span v-for="(l, i) in letters" :key="i" class="pl-letter">{{ l }}</span>
      </div>
      <p class="pl-sub eyebrow text-gold-400">Kegelsberg · Erzgebirge</p>
      <div class="pl-bar"><div class="pl-bar-fill" /></div>
    </div>
  </div>
</template>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.pl-panels {
  position: absolute;
  inset: 0;
  display: flex;
}
.pl-panel {
  flex: 1;
  height: 100%;
  background: var(--color-forest-950);
  border-right: 1px solid rgba(250, 248, 242, 0.03);
}
.pl-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.pl-crest {
  margin-bottom: 1.5rem;
}
.pl-word {
  display: flex;
  overflow: hidden;
  font-family: var(--font-display);
  font-size: clamp(2rem, 7vw, 3.6rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-cream);
}
.pl-letter {
  display: inline-block;
  will-change: transform, opacity;
}
.pl-sub {
  margin-top: 0.6rem;
}
.pl-bar {
  margin-top: 1.8rem;
  width: 180px;
  height: 2px;
  background: rgba(250, 248, 242, 0.15);
  overflow: hidden;
}
.pl-bar-fill {
  height: 100%;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left;
  background: linear-gradient(90deg, var(--color-gold-500), var(--color-gold-300));
}
</style>
