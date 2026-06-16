<script setup>
import { reactive, ref } from 'vue'
import AnimatedHeading from '@/components/ui/AnimatedHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import { useMagnetic } from '@/composables/useMagnetic'

const root = ref(null)
useMagnetic(root)

const form = reactive({ name: '', email: '', phone: '', message: '' })
const errors = reactive({ name: '', email: '', phone: '' })
const submitted = ref(false)
const success = ref(false)

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  errors.name = form.name.trim() ? '' : 'Bitte geben Sie Ihren Namen ein.'
  errors.email = !form.email.trim()
    ? 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
    : emailRe.test(form.email.trim())
      ? ''
      : 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
  errors.phone = form.phone.trim() ? '' : 'Bitte geben Sie Ihre Telefonnummer ein.'
  return !errors.name && !errors.email && !errors.phone
}

function onSubmit() {
  submitted.value = true
  if (!validate()) return
  // No backend required — we confirm receipt on the frontend.
  success.value = true
}

function reset() {
  form.name = form.email = form.phone = form.message = ''
  submitted.value = false
  success.value = false
}

// Re-validate a single field once the form has been submitted at least once.
function revalidate() {
  if (submitted.value) validate()
}
</script>

<template>
  <section id="anfrage" ref="root" class="relative scroll-mt-24 overflow-hidden bg-forest-950 py-24 text-cream sm:py-32 grain">
    <div
      class="pointer-events-none absolute -right-32 -top-20 h-[28rem] w-[28rem] rounded-full opacity-15 blur-3xl"
      style="background: radial-gradient(circle, var(--color-gold-400), transparent 70%);"
    />

    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <div class="mb-14 max-w-2xl">
        <ScrollReveal><p class="eyebrow text-gold-300">Unverbindlich anfragen</p></ScrollReveal>
        <AnimatedHeading
          text="Planen Sie Ihren Aufenthalt"
          as="h2"
          class="mt-4 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-semibold"
        />
        <ScrollReveal :y="24" :delay="0.1">
          <p class="mt-5 text-cream/70">
            Senden Sie uns Ihre Wünsche – wir melden uns persönlich bei Ihnen zurück.
          </p>
        </ScrollReveal>
      </div>

      <div class="grid gap-10 lg:grid-cols-5">
        <!-- Form -->
        <ScrollReveal as="div" :y="40" class="lg:col-span-3">
          <div class="relative rounded-3xl border border-cream/10 bg-cream/[0.04] p-7 backdrop-blur-md sm:p-10">
            <!-- Success overlay -->
            <Transition name="success">
              <div
                v-if="success"
                class="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-3xl bg-forest-950/95 p-8 text-center"
              >
                <span class="mb-6 grid h-20 w-20 place-items-center rounded-full bg-gold-500 text-forest-950">
                  <svg viewBox="0 0 24 24" class="check-draw h-10 w-10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>
                </span>
                <h3 class="font-display text-3xl font-semibold text-cream">Vielen Dank!</h3>
                <p class="mt-3 max-w-sm text-cream/70">
                  Danke, dass Sie uns kontaktiert haben. Wir werden uns schnellstmöglich bei Ihnen melden.
                </p>
                <button class="btn-outline mt-8" @click="reset">Neue Anfrage</button>
              </div>
            </Transition>

            <form novalidate class="space-y-6" @submit.prevent="onSubmit">
              <!-- Name -->
              <div>
                <div class="relative">
                  <input
                    id="cf-name"
                    v-model="form.name"
                    type="text"
                    placeholder=" "
                    autocomplete="name"
                    class="peer w-full rounded-xl border border-cream/15 bg-transparent px-4 pb-2 pt-6 text-cream transition-colors placeholder-transparent focus:border-gold-400 focus:outline-none"
                    :class="submitted && errors.name ? '!border-red-400/70' : ''"
                    @input="revalidate"
                  />
                  <label for="cf-name" class="floating-label">Name *</label>
                </div>
                <p v-if="submitted && errors.name" class="mt-1.5 text-xs text-red-300">{{ errors.name }}</p>
              </div>

              <!-- Email + Phone -->
              <div class="grid gap-6 sm:grid-cols-2">
                <div>
                  <div class="relative">
                    <input
                      id="cf-email"
                      v-model="form.email"
                      type="email"
                      placeholder=" "
                      autocomplete="email"
                      class="peer w-full rounded-xl border border-cream/15 bg-transparent px-4 pb-2 pt-6 text-cream transition-colors placeholder-transparent focus:border-gold-400 focus:outline-none"
                      :class="submitted && errors.email ? '!border-red-400/70' : ''"
                      @input="revalidate"
                    />
                    <label for="cf-email" class="floating-label">E-Mail *</label>
                  </div>
                  <p v-if="submitted && errors.email" class="mt-1.5 text-xs text-red-300">{{ errors.email }}</p>
                </div>

                <div>
                  <div class="relative">
                    <input
                      id="cf-phone"
                      v-model="form.phone"
                      type="tel"
                      placeholder=" "
                      autocomplete="tel"
                      class="peer w-full rounded-xl border border-cream/15 bg-transparent px-4 pb-2 pt-6 text-cream transition-colors placeholder-transparent focus:border-gold-400 focus:outline-none"
                      :class="submitted && errors.phone ? '!border-red-400/70' : ''"
                      @input="revalidate"
                    />
                    <label for="cf-phone" class="floating-label">Telefon *</label>
                  </div>
                  <p v-if="submitted && errors.phone" class="mt-1.5 text-xs text-red-300">{{ errors.phone }}</p>
                </div>
              </div>

              <!-- Message -->
              <div class="relative">
                <textarea
                  id="cf-message"
                  v-model="form.message"
                  rows="4"
                  placeholder=" "
                  class="peer w-full resize-none rounded-xl border border-cream/15 bg-transparent px-4 pb-2 pt-6 text-cream transition-colors placeholder-transparent focus:border-gold-400 focus:outline-none"
                ></textarea>
                <label for="cf-message" class="floating-label">Nachricht</label>
              </div>

              <button type="submit" data-magnetic data-cursor class="btn-gold w-full justify-center sm:w-auto">
                Anfrage senden
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>
              </button>
              <p class="text-xs text-cream/45">* Pflichtfelder</p>
            </form>
          </div>
        </ScrollReveal>

        <!-- Contact info panel -->
        <ScrollReveal as="div" :y="40" :delay="0.1" class="lg:col-span-2">
          <div class="flex h-full flex-col justify-between rounded-3xl bg-forest-800/60 p-8 ring-1 ring-cream/10">
            <div>
              <h3 class="font-display text-2xl font-semibold text-cream">Direkt erreichen</h3>
              <p class="mt-3 text-sm text-cream/65">
                Lieber persönlich? Wir beraten Sie gern zu Verfügbarkeit und Preisen.
              </p>

              <ul class="mt-8 space-y-5 text-sm">
                <li class="flex gap-3">
                  <svg viewBox="0 0 24 24" class="mt-0.5 h-5 w-5 shrink-0 text-gold-300" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>
                  <span class="text-cream/80">Kemtauer Straße 27<br />09423 Gelenau / Erzgeb.</span>
                </li>
                <li class="flex gap-3">
                  <svg viewBox="0 0 24 24" class="mt-0.5 h-5 w-5 shrink-0 text-gold-300" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h3l2 5-2 1c1 2 2 3 4 4l1-2 5 2v3c0 1-1 2-2 2A16 16 0 0 1 3 6c0-1 1-2 2-2z"/></svg>
                  <a href="tel:+49372977900" class="text-cream/80 hover:text-gold-300">037297 / 7900 <span class="text-cream/45">(Mo–Fr 10–14 Uhr)</span></a>
                </li>
                <li class="flex gap-3">
                  <svg viewBox="0 0 24 24" class="mt-0.5 h-5 w-5 shrink-0 text-gold-300" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                  <span class="text-cream/80">
                    <a href="mailto:fewo@gewo-gmbh.de" class="hover:text-gold-300">fewo@gewo-gmbh.de</a> ·
                    <a href="mailto:info@gewo-gmbh.de" class="hover:text-gold-300">info@gewo-gmbh.de</a>
                  </span>
                </li>
              </ul>
            </div>

            <div class="mt-10 rounded-2xl bg-forest-950/50 p-5">
              <p class="text-sm text-cream/70">
                <span class="font-semibold text-gold-300">Tipp:</span> Schulklassen und Vereine
                übernachten besonders günstig in unseren Blockhütten.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.floating-label {
  position: absolute;
  left: 1rem;
  top: 1.05rem;
  pointer-events: none;
  color: rgba(250, 248, 242, 0.5);
  transition: all 0.2s ease;
}
/* Float when focused or filled (placeholder hidden) */
.peer:focus ~ .floating-label,
.peer:not(:placeholder-shown) ~ .floating-label {
  top: 0.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  color: var(--color-gold-300);
}

.success-enter-active {
  transition: opacity 0.4s ease;
}
.success-enter-from {
  opacity: 0;
}
.check-draw {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: draw 0.6s 0.15s ease forwards;
}
@keyframes draw {
  to { stroke-dashoffset: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .check-draw { animation: none; stroke-dashoffset: 0; }
}
</style>
