<script setup>
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
</script>

<template>
  <div>
    <header class="relative overflow-hidden bg-forest-950 pb-16 pt-36 text-cream grain sm:pb-20 sm:pt-44">
      <div
        class="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full opacity-15 blur-3xl"
        style="background: radial-gradient(circle, var(--color-gold-400), transparent 70%);"
      />
      <div class="relative mx-auto max-w-3xl px-5 sm:px-8">
        <p class="eyebrow text-gold-300">Rechtliches</p>
        <h1 class="mt-4 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold">Datenschutzerklärung</h1>
      </div>
    </header>

    <section class="bg-cream py-16 sm:py-24">
      <ScrollReveal as="div" :y="30" class="legal mx-auto max-w-3xl px-5 sm:px-8">
        <p class="rounded-2xl border border-gold-500/30 bg-gold-500/10 p-4 text-sm text-charcoal/70">
          Hinweis: Diese Datenschutzerklärung ist ein Muster im Rahmen des Redesigns und sollte vor
          der Veröffentlichung rechtlich geprüft und an die tatsächliche Datenverarbeitung angepasst
          werden.
        </p>

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
          Gelenauer Wohnungsgesellschaft GmbH (GEWO)<br />
          Werner-Seelenbinder-Weg 12, 09423 Gelenau/Erzgeb.<br />
          Telefon: <a href="tel:+49372977900">037297 / 7900</a> · E-Mail:
          <a href="mailto:info@gewo-gmbh.de">info@gewo-gmbh.de</a>
        </p>

        <h2>2. Allgemeines zur Datenverarbeitung</h2>
        <p>
          Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
          Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
          erforderlich ist. Die Verarbeitung erfolgt im Einklang mit der Datenschutz-Grundverordnung
          (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).
        </p>

        <h2>3. Zugriffsdaten / Server-Logfiles</h2>
        <p>
          Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch Informationen in
          sogenannten Server-Logfiles gespeichert (z. B. Browsertyp, Betriebssystem, Referrer-URL,
          Datum und Uhrzeit des Zugriffs sowie die IP-Adresse). Rechtsgrundlage ist unser berechtigtes
          Interesse an einem sicheren und stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2>4. Kontaktformular und Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns über das Anfrageformular oder per E-Mail kontaktieren, werden Ihre Angaben
          (Name, E-Mail-Adresse, Telefonnummer sowie Ihre Nachricht) zur Bearbeitung Ihrer Anfrage
          gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines Vertrags) bzw.
          Art. 6 Abs. 1 lit. f DSGVO. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>

        <h2>5. Google Maps</h2>
        <p>
          Zur Darstellung unseres Standortes nutzen wir den Kartendienst Google Maps der Google
          Ireland Limited. Beim Laden der Karte können Daten an Google übertragen werden. Weitere
          Informationen finden Sie in der Datenschutzerklärung von Google.
        </p>

        <h2>6. Google Fonts</h2>
        <p>
          Diese Website verwendet zur einheitlichen Darstellung von Schriftarten Schriftbibliotheken
          (Google Fonts). Beim Aufruf werden die benötigten Schriften von Google-Servern geladen,
          wodurch Ihre IP-Adresse übertragen werden kann.
        </p>

        <h2>7. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit sowie ein Widerspruchsrecht. Zudem steht Ihnen ein Beschwerderecht bei
          einer Datenschutz-Aufsichtsbehörde zu.
        </p>

        <h2>8. Speicherdauer</h2>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie dies für die genannten Zwecke
          erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorsehen.
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
