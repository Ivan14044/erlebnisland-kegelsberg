<script setup>
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
</script>

<template>
  <div>
    <!-- Compact header -->
    <header class="relative overflow-hidden bg-forest-950 pb-16 pt-36 text-cream grain sm:pb-20 sm:pt-44">
      <div
        class="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full opacity-15 blur-3xl"
        style="background: radial-gradient(circle, var(--color-gold-400), transparent 70%);"
      />
      <div class="relative mx-auto max-w-3xl px-5 sm:px-8">
        <p class="eyebrow text-gold-300">Rechtliches</p>
        <h1 class="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold">Impressum</h1>
      </div>
    </header>

    <section class="bg-cream py-16 sm:py-24">
      <ScrollReveal as="div" :y="30" class="legal mx-auto max-w-3xl px-5 sm:px-8">
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Gelenauer Wohnungsgesellschaft GmbH (GEWO)<br />
          Werner-Seelenbinder-Weg 12<br />
          09423 Gelenau/Erzgeb.<br />
          Deutschland
        </p>

        <h2>Vertreten durch</h2>
        <p>Geschäftsführer: Sebastian Haustein</p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+49372977900">037297 / 7900</a> (Mo–Fr 10–14 Uhr)<br />
          E-Mail: <a href="mailto:info@gewo-gmbh.de">info@gewo-gmbh.de</a> · <a href="mailto:fewo@gewo-gmbh.de">fewo@gewo-gmbh.de</a>
        </p>

        <h2>Registereintrag</h2>
        <p>
          Eintragung im Handelsregister<br />
          Registergericht: Amtsgericht Chemnitz<br />
          Registernummer: HRB 12122
        </p>

        <h2>Umsatzsteuer-Identifikationsnummer</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE 345147968
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>Gelenauer Wohnungsgesellschaft GmbH, Werner-Seelenbinder-Weg 12, 09423 Gelenau/Erzgeb.</p>

        <h2>Standort des Ferienparks</h2>
        <p>Erlebnisland Kegelsberg, Kemtauer Straße 27, 09423 Gelenau/Erzgeb.</p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
          oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>

        <h2>Urheberrecht und Bildnachweise</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
          deutschen Urheberrecht. Die in diesem Premium-Redesign verwendeten Fotografien stammen aus
          frei lizenzierten Quellen (Unsplash, kostenlos auch für kommerzielle Nutzung) und dienen der
          gestalterischen Darstellung. Das Logo ist Eigentum der Gelenauer Wohnungsgesellschaft GmbH.
        </p>

        <router-link to="/" class="mt-10 inline-flex items-center gap-2 font-medium text-forest-700 hover:text-gold-600">
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Zurück zur Startseite
        </router-link>
      </ScrollReveal>
    </section>
  </div>
</template>

<style scoped>
.legal :deep(h2) {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-forest-900);
  margin-top: 2.25rem;
  margin-bottom: 0.5rem;
}
.legal :deep(p) {
  color: rgba(26, 26, 26, 0.75);
  line-height: 1.7;
  margin-bottom: 0.75rem;
}
.legal :deep(a) {
  color: var(--color-forest-700);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.legal :deep(a:hover) {
  color: var(--color-gold-600);
}
</style>
