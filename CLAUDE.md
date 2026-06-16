# CLAUDE.md — Erlebnisland Kegelsberg Premium Redesign

## Project Overview

Premium frontend redesign of **Erlebnisland Kegelsberg** (https://www.erlebnisland-kegelsberg.de/) — a family adventure park in Gelenau, Erzgebirge (Saxony, Germany). The current site is built on a cheap Sellwerk template. Our goal is to create a visually stunning, premium-quality frontend that dramatically outclasses the original — to present it to the owner as a ready upgrade.

**Stack:** Vue 3 + Vite + Vue Router + TailwindCSS  
**Deploy target:** Vercel (static SPA)  
**Language of content:** German (all UI and content in German)

---

## Design Philosophy

This is NOT a typical corporate website. This must look like a **€15,000+ custom-designed site** for a premium nature resort. Think: Swiss mountain lodge websites, Scandinavian glamping resorts, high-end outdoor experience brands.

### Core Aesthetic Direction
- **Mood:** Cinematic nature immersion meets modern luxury hospitality
- **Palette:** Deep forest greens (#1a2e1a, #2d5a27), warm amber/gold (#c8a45a, #e8c547), off-white cream (#faf8f2), charcoal (#1a1a1a), with muted sage accents (#8fa584)
- **Typography:** Elegant serif for headlines (use Google Fonts: "Playfair Display" or "Cormorant Garamond"), clean sans-serif for body ("Inter" or "DM Sans")
- **Overall feel:** The site should feel like you're stepping into a nature documentary — beautiful, calm, immersive, with moments of excitement (coaster section)

### Premium Design Elements to Implement

1. **Cinematic Full-Viewport Hero**
   - Full-screen hero with high-quality background image
   - Overlay gradient (dark-to-transparent from bottom)
   - Elegant headline with staggered text animation (GSAP)
   - Parallax scroll effect on the hero image
   - Subtle mouse-following parallax on decorative elements

2. **Smooth Scroll & Reveal Animations**
   - Use GSAP ScrollTrigger for scroll-based animations
   - Elements fade in and slide up as they enter viewport
   - Staggered animations for card groups
   - Parallax layers at different scroll speeds

3. **Navigation**
   - Transparent navbar that becomes solid/glass-morphism on scroll
   - Smooth transition between transparent and solid states
   - Mobile: full-screen overlay menu with elegant transitions
   - Active section highlighting based on scroll position

4. **Activity Cards (Homepage)**
   - Large image cards with hover zoom effect
   - Overlay that slides up on hover revealing description
   - Subtle border-radius and shadow elevation
   - Image filter transition on hover (slight saturation increase)

5. **Pricing Section (Übernachtung page)**
   - Elegant pricing cards with glass-morphism effect
   - Subtle glow/border animation
   - Feature checkmarks with staggered appear animation

6. **Image Galleries**
   - Lightbox viewer for galleries
   - Masonry or asymmetric grid layout
   - Lazy loading with blur-up placeholder effect

7. **Contact Form**
   - Floating label inputs
   - Micro-animations on focus
   - Success state animation
   - Side-by-side with Google Maps embed

8. **Footer**
   - Rich footer with multiple columns
   - Subtle background texture
   - Social links with hover animations

9. **Page Transitions**
   - Smooth fade/slide transitions between Vue Router pages
   - Loading state between pages

10. **Micro-interactions Throughout**
    - Button hover effects (fill, glow, or lift)
    - Link underline animations
    - Icon animations on hover
    - Scroll-to-top button with smooth appearance

---

## Technical Stack Details

### Dependencies to Install
```bash
npm create vite@latest . -- --template vue
npm install vue-router@4 @vueuse/core gsap
npm install -D tailwindcss @tailwindcss/vite autoprefixer
```

### Key Libraries
- **Vue 3** (Composition API, `<script setup>`)
- **Vue Router 4** — 4 pages + scroll behavior
- **TailwindCSS v4** — utility-first styling (import via `@import "tailwindcss"` in CSS, use `@tailwindcss/vite` plugin)
- **GSAP + ScrollTrigger** — all animations (register ScrollTrigger plugin)
- **@vueuse/core** — intersection observer, scroll position, etc.

### Project Structure
```
src/
├── App.vue
├── main.js
├── router/
│   └── index.js
├── assets/
│   ├── css/
│   │   └── main.css          # Tailwind imports + custom styles
│   └── images/               # Downloaded/placeholder images
├── components/
│   ├── layout/
│   │   ├── Navbar.vue         # Transparent→solid nav
│   │   ├── Footer.vue         # Rich footer
│   │   └── PageTransition.vue # Route transition wrapper
│   ├── home/
│   │   ├── HeroSection.vue    # Cinematic hero
│   │   ├── ActivityCards.vue   # Grid of activities
│   │   ├── FeatureHighlights.vue # 3 icon blocks
│   │   └── CtaBanner.vue      # Booking CTA
│   ├── coaster/
│   │   ├── CoasterHero.vue
│   │   ├── CoasterInfo.vue
│   │   └── CoasterSchedule.vue
│   ├── accommodation/
│   │   ├── AccommodationHero.vue
│   │   ├── BlockhuttenSection.vue
│   │   ├── ZinipiSection.vue
│   │   ├── WohnmobilSection.vue
│   │   ├── PricingCards.vue
│   │   └── ContactForm.vue
│   ├── info/
│   │   ├── InfoHero.vue
│   │   ├── ActivitiesNearby.vue
│   │   ├── ContactSection.vue
│   │   └── MapSection.vue
│   └── ui/
│       ├── AnimatedHeading.vue  # Reusable animated headline
│       ├── ParallaxImage.vue    # Parallax wrapper
│       ├── ScrollReveal.vue     # Scroll-triggered reveal wrapper
│       └── ScrollToTop.vue      # Scroll to top button
├── composables/
│   ├── useScrollAnimation.js   # GSAP ScrollTrigger setup
│   └── useParallax.js          # Parallax effect logic
└── pages/
    ├── HomePage.vue
    ├── CoasterPage.vue
    ├── AccommodationPage.vue
    └── InfoPage.vue
```

---

## Images Strategy

The original site uses **Adobe Stock licensed images** — we CANNOT copy them.

### Approach:
1. Download the logo from: `https://le-de.cdn-website.com/85e7f6737af74d6a829c3a3a36840818/dms3rep/multi/opt/Logo+Erlebnisland2-pdf-1920w.png`
2. For all other images, use **free high-quality images from Unsplash** via direct URLs.

### Image URLs to Use (Unsplash — free for commercial use):

**Hero / Nature / Erzgebirge landscape:**
- `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80` — mountain landscape
- `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80` — forest sunlight
- `https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1920&q=80` — green forest

**Alpine Coaster / Rodelbahn:**
- `https://images.unsplash.com/photo-1567714608682-71e2e1506f4a?w=800&q=80` — roller coaster / adventure
- `https://images.unsplash.com/photo-1536768139911-e290a59011f4?w=800&q=80` — outdoor adventure ride

**Swimming Pool / Freibad:**
- `https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80` — outdoor pool
- `https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80` — swimming pool

**Observation Tower / Aussichtsturm:**
- `https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80` — panoramic view from height

**Wildlife / Wildgehege:**
- `https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&q=80` — deer in nature

**Hiking / Wanderwege:**
- `https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80` — hiking trail forest

**Log Cabins / Blockhütten:**
- `https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80` — rustic cabin in woods
- `https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80` — cozy cabin lodge

**Glamping / Zinipi Lodges:**
- `https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=800&q=80` — glamping/luxury tent
- `https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80` — camping luxury

**Campervans / Wohnmobilstellplatz:**
- `https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80` — campervan nature

**Playground / Spielplatz:**
- `https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?w=800&q=80` — children playground

**Campfire / Grillplatz:**
- `https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=800&q=80` — campfire evening

**Tennis:**
- `https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80` — tennis court outdoor

NOTE: Use these as `<img :src="url">` directly from Unsplash CDN. No need to download — Unsplash allows hotlinking for free.

---

## Content (German) — Extracted from Original Site

### Page 1: Homepage (/)

**Hero:**
- Headline: `Erlebnisland Kegelsberg`
- Subheadline: `Wo Spaß und Natur Hand in Hand gehen`
- CTA Button: `Abenteuer entdecken`

**Intro Section:**
- Title: `Ihre Adresse für familienfreundliche Erlebnisurlaube im Erzgebirge`
- Text: `Inmitten der malerischen Gemeinde Gelenau im Erzgebirge liegt unser Ferienpark „Erlebnisland am Kegelsberg". Hier erwartet Sie eine vielfältige Auswahl an Übernachtungsmöglichkeiten und Freizeitaktivitäten für Jung und Alt. Ob rasante Fahrten auf der Alpine-Coasterbahn, entspannende Stunden im Freibad oder spannende Wanderungen entlang des Naturlehrpfades – bei uns gibt es für jeden etwas zu entdecken.`

**Activities Section Title:** `Abenteuer und Erholung im Erzgebirge`

**Activities (10 cards):**

1. **Alpine Coaster Bahn** — Erleben Sie Nervenkitzel pur auf unserer Alpine Coaster Bahn! Rasen Sie in rasanter Geschwindigkeit durch die atemberaubende Landschaft des Erzgebirges und spüren Sie den Adrenalinkick bei jeder Kurve.
2. **Freibad** — Tauchen Sie ein in unser erfrischendes Freibad mit mehreren Schwimmbecken! Egal ob zum Bahnen ziehen oder zum Planschen mit den Kindern – hier findet jeder seinen perfekten Platz im kühlen Nass.
3. **Aussichtsturm** — Genießen Sie einen atemberaubenden Panoramablick vom Aussichtsturm! Von hier aus haben Sie eine fantastische Aussicht über das Erzgebirge.
4. **Wildgehege** — Entdecken Sie heimische Wildtiere hautnah in unserem Wildgehege! Ein besonderes Erlebnis für Groß und Klein.
5. **Lehrpfad, Rad- und Wanderwege** — Erkunden Sie die Natur auf unserem Naturlehrpfad und den zahlreichen Rad- und Wanderwegen!
6. **Tennisplatz** — Schlagen Sie ein paar Bälle auf unserem gut gepflegten Tennisplatz!
7. **Blockhütten und Zinipi Lodges** — Erleben Sie gemütliche Nächte in unseren rustikalen Blockhütten und modernen Zinipi Lodges!
8. **Wohnmobilstellplatz** — Großzügige Stellplätze mit allen notwendigen Annehmlichkeiten im Herzen des Erzgebirges.
9. **Spielplatz** — Kinder können sich auf unserem großen Spielplatz so richtig austoben! Mit Schaukeln, Rutschen und Klettergerüsten.
10. **Grillplatz-Lagerfeuerstelle** — Lassen Sie den Tag gemütlich an unserer Grillplatz-Lagerfeuerstelle ausklingen! Grillplätze können auch gemietet werden.

**Feature Highlights (3 blocks with icons):**
1. 🎯 **Vielfältige Freizeitmöglichkeiten** — Von aufregenden Fahrten auf der Alpine Coaster Bahn bis hin zu entspannenden Stunden im Freibad.
2. 🌿 **Naturerlebnis und Erholung** — Idyllische Rad- und Wanderwege, Aussichtsturm und Wildgehege.
3. 🏠 **Komfortable Unterkünfte** — Gemütliche Blockhütten, moderne Zinipi Lodges und gut ausgestattete Wohnmobilstellplätze.

**CTA:** `Buchen Sie Ihren unvergesslichen Urlaub im Erzgebirge!`

---

### Page 2: Sommerrodelbahn (/sommerrodelbahn)

**Hero:**
- Title: `Ihre Sommerrodelbahn im Herzen des Erzgebirges`

**Content:**
- Title: `Sommerrodelbahn im Erlebnisland Kegelsberg`
- Paragraph 1: `Erleben Sie den ultimativen Nervenkitzel auf unserer Sommerrodelbahn im Erlebnisland Kegelsberg! Mit rasanter Geschwindigkeit sausen Sie die Hänge hinab und genießen dabei den Wind im Gesicht und die atemberaubende Aussicht auf das idyllische Erzgebirge. Die Strecke ist sowohl für Anfänger als auch für erfahrene Rodelbegeisterte bestens geeignet, sodass der Spaß für die ganze Familie garantiert ist.`
- Paragraph 2: `Unsere moderne Alpine Coaster Bahn bietet sichere und komfortable Schlitten, die Ihnen ein unvergessliches Fahrerlebnis ermöglichen. Ob Sie alleine oder im Doppelrodel unterwegs sind – hier erleben Sie ein Abenteuer, das Sie so schnell nicht vergessen werden. Die Strecke führt durch malerische Landschaften und bietet zahlreiche Kurven, Wellen und sogar Jumps, die für extra Adrenalin sorgen.`
- Paragraph 3: `Nach der aufregenden Abfahrt können Sie sich in unserem gemütlichen Café entspannen und bei einem erfrischenden Getränk die Eindrücke Revue passieren lassen. Für die kleinen Gäste gibt es zudem einen nahegelegenen Spielplatz.`

**Öffnungszeiten:**
- `Am Wochenende, an Feiertagen (außer Karfreitag) und täglich in den Ferien`
- `April bis Oktober von 13.00 bis 18.00 Uhr`
- `Anmeldungen von Gruppen außerhalb der Öffnungszeiten sind möglich`
- `In den Wintermonaten bleibt die Bahn geschlossen!`
- `Bei Dunkelheit, schlechten Witterungsverhältnissen, Feuchtigkeit und Gewitter muss die Bahn aus Sicherheitsgründen geschlossen bleiben.`
- `Info-Telefon: 0178 6206057`

---

### Page 3: Übernachtung / Buchung (/uebernachtung)

**Hero:**
- Title: `Übernachtungen im Erzgebirge`
- Subtitle: `Ihr Aufenthalt im Erlebnisland Kegelsberg`

**Blockhütten Section:**
- Title: `Rustikale Blockhütten im Erzgebirge: Ihr Zuhause im Urlaub`
- Text: `Direkt im Freibadgelände stehen 10 coole Blockhütten mit insgesamt 40 Betten für Übernachtungen zur Verfügung. Für Schulklassen und Vereine bestens geeignet, aber auch Familien können es sich hier gemütlich machen.`
- Prices:
  - 2 Personen / Tag: 45,00 €
  - 3 Personen / Tag: 53,00 €
  - 4 Personen / Tag: 61,00 €
  - 5 Personen / Tag: 69,00 €

**Zinipi Lodges Section:**
- Title: `Natur pur und Komfort: Zinipi Lodges im Erlebnisland Kegelsberg`
- Text: `Erleben Sie einzigartigen Komfort in unseren modernen Zinipi Lodges. Diese innovativen Unterkünfte bieten eine perfekte Mischung aus Natur und Luxus, ideal für Paare oder kleine Familien. Unsere Zinipis sind mit bequemen Betten, eigenem Bad und kleiner Küchenzeile ausgestattet.`
- Price: `ab 80 € pro Nacht`

**Wohnmobilstellplatz Section:**
- Title: `Wohnmobilstellplatz im Erzgebirge: Genießen Sie Freiheit und Komfort`
- Text: `Für alle, die mit dem Wohnmobil unterwegs sind, bieten wir großzügige Stellplätze mit allen notwendigen Annehmlichkeiten. Die Stellplätze sind perfekt für einen erholsamen Zwischenstopp oder einen längeren Aufenthalt.`
- Price: `ab 16 € pro Nacht`

**Contact Form Fields:**
- Name (required)
- E-Mail (required)
- Telefon (required)
- Nachricht

---

### Page 4: Aktuelles / Anfahrt / Lage (/info)

**Hero:**
- Title: `Aktuelle Informationen und Wissenswertes`

**Activities in Area:**
- Title: `Freizeit und Erholung im Erzgebirge`
- Text: `Das Erlebnisland Kegelsberg bietet eine Vielzahl an Freizeitmöglichkeiten direkt vor Ort. Entspannen Sie sich auf unserem Grillplatz oder an der Lagerfeuerstelle, während die Kinder sich auf den zwei Spielplätzen oder dem Trampolin austoben. Für sportliche Aktivitäten stehen Ihnen ein Tennisplatz und eine Tischtennisanlage zur Verfügung.`

**Nearby Attractions:**
- Stadt Chemnitz (Kulturhauptstadt 2025)
- Augustusburg / Burg Scharfenstein
- Greifensteine mit Greifenbachstauweiher
- Clubkino
- Strumpfmuseum
- Depot Pohl-Ströher
- Rastplatz Tisch'l mit geschnitzten Figuren
- Liegewiese Eisenstraße „Eichelbämel"
- „Fliegenpilz"
- Abenteuerspielplatz „Schmetterlingswiese"
- Schnitzfiguren an der Schüllermühle

**Nearby Dining:**
- Imbiss im Freibad
- „Toros-Döner" mit Lieferservice
- „Milano-Pizza" mit Lieferservice
- Gaststätte „Waldhof" (3,5 km entfernt)

**Contact Info:**
- Address: Kemtauer Straße 27, 09423 Gelenau/Erzgeb.
- Phone: 037297/7900 (Mo-Fr 10-14 Uhr)
- Email: fewo@gewo-gmbh.de
- Google Maps coordinates: 50.7181249, 12.9769313

**Google Maps Embed:**
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.0977931794496!2d12.976931276841794!3d50.718124868054296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a74f5bd4719037%3A0xf7804741a9b9bcf3!2sErlebnisland%20Kegelsberg!5e0!3m2!1sen!2str!4v1719223439265!5m2!1sen!2str
```

---

### Global Elements

**Footer (all pages):**
- Logo
- Address: Kemtauer Straße 27, 09423 Gelenau/Erzgeb.
- Phone: 037297/7900
- Email: fewo@gewo-gmbh.de
- Links: Impressum, Datenschutzerklärung
- Social: Facebook, Instagram (generic links for now)

**Logo URL:**
`https://le-de.cdn-website.com/85e7f6737af74d6a829c3a3a36840818/dms3rep/multi/opt/Logo+Erlebnisland2-pdf-1920w.png`

---

## Vue Router Configuration

```js
const routes = [
  { path: '/', name: 'Home', component: () => import('../pages/HomePage.vue') },
  { path: '/sommerrodelbahn', name: 'Coaster', component: () => import('../pages/CoasterPage.vue') },
  { path: '/uebernachtung', name: 'Accommodation', component: () => import('../pages/AccommodationPage.vue') },
  { path: '/info', name: 'Info', component: () => import('../pages/InfoPage.vue') },
]
```

Scroll behavior: smooth scroll to top on route change.

---

## Vercel Deployment

### vercel.json
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures Vue Router's history mode works with Vercel.

---

## GitHub Setup

1. Initialize git: `git init`
2. Create `.gitignore` with standard Vue/Node ignores
3. Create repo on GitHub: `gh repo create erlebnisland-kegelsberg --public --source=. --remote=origin`
4. Push: `git add . && git commit -m "Initial commit: Erlebnisland Kegelsberg premium redesign" && git push -u origin main`

---

## Quality Checklist

Before considering the project done:
- [ ] All 4 pages fully built with content
- [ ] Responsive (mobile, tablet, desktop)
- [ ] All animations smooth (60fps)
- [ ] No console errors
- [ ] All images loading
- [ ] Navigation works between all pages
- [ ] Contact form has proper validation UI
- [ ] Footer consistent across pages
- [ ] Page transitions smooth
- [ ] Scroll-to-top works
- [ ] Google Maps embed on info page
- [ ] Meta tags (title, description) per page
- [ ] Favicon set (use logo)
- [ ] vercel.json configured
- [ ] Clean git history
- [ ] Deployed to Vercel successfully

---

## IMPORTANT NOTES

- ALL text content must be in **German** — do not translate anything to English
- Use Unsplash image URLs directly (hotlinking allowed) — do NOT use placeholder services
- The design must look **dramatically better** than the original Sellwerk template site
- Prioritize visual impact: big images, smooth animations, elegant typography
- Every section should have scroll-triggered entrance animations
- The site should feel alive and responsive to user interaction
- Use CSS `scroll-behavior: smooth` globally
- Respect `prefers-reduced-motion` media query for accessibility
- The contact form does not need a real backend — just frontend validation and a success message
