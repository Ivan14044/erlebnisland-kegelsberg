import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue'),
    meta: {
      title: 'Erlebnisland Kegelsberg — Familienurlaub im Erzgebirge',
      description:
        'Ferienpark im Erzgebirge mit Alpine-Coaster-Bahn, Freibad, Blockhütten, Zinipi Lodges und Wohnmobilstellplatz. Wo Spaß und Natur Hand in Hand gehen.',
    },
  },
  {
    path: '/sommerrodelbahn',
    name: 'Coaster',
    component: () => import('../pages/CoasterPage.vue'),
    meta: {
      title: 'Sommerrodelbahn — Erlebnisland Kegelsberg',
      description:
        'Rasanter Nervenkitzel auf der Alpine-Coaster-Bahn im Erlebnisland Kegelsberg. Öffnungszeiten, Infos und Adrenalin pur im Erzgebirge.',
    },
  },
  {
    path: '/uebernachtung',
    name: 'Accommodation',
    component: () => import('../pages/AccommodationPage.vue'),
    meta: {
      title: 'Übernachtung & Buchung — Erlebnisland Kegelsberg',
      description:
        'Rustikale Blockhütten, moderne Zinipi Lodges und großzügige Wohnmobilstellplätze im Erzgebirge. Jetzt Ihren Aufenthalt anfragen.',
    },
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../pages/InfoPage.vue'),
    meta: {
      title: 'Aktuelles & Anfahrt — Erlebnisland Kegelsberg',
      description:
        'Wissenswertes, Freizeittipps in der Umgebung, Kontakt und Anfahrt zum Erlebnisland Kegelsberg in Gelenau im Erzgebirge.',
    },
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../pages/ImpressumPage.vue'),
    meta: { title: 'Impressum — Erlebnisland Kegelsberg' },
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: () => import('../pages/DatenschutzPage.vue'),
    meta: { title: 'Datenschutzerklärung — Erlebnisland Kegelsberg' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 90 }
    return { top: 0, behavior: 'smooth' }
  },
})

// Per-page document title + meta description
router.afterEach((to) => {
  const title = to.meta?.title || 'Erlebnisland Kegelsberg'
  document.title = title
  const desc = to.meta?.description
  if (desc) {
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', desc)
  }
})

export default router
