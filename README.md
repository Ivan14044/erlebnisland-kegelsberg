# Erlebnisland Kegelsberg — Premium Redesign

Премиум-редизайн сайта семейного парка отдыха [Erlebnisland Kegelsberg](https://www.erlebnisland-kegelsberg.de/) в Геленау (Рудные горы, Саксония).

Кинематографичный, иммерсивный дизайн уровня премиальных горных эко-курортов: глубокие лесные зелёные тона, тёплое золото, кремовый фон, элегантная антиква Cormorant Garamond и чистый DM Sans, плавные scroll-анимации на GSAP.

## Стек
- **Vue 3** (Composition API, `<script setup>`)
- **Vue Router 4** (history mode, 6 маршрутов, smooth-scroll, мета-теги по страницам)
- **TailwindCSS v4** (тема через `@theme`, плагин `@tailwindcss/vite`)
- **GSAP + ScrollTrigger** (hero-stagger, scroll-reveal, параллакс)
- **@vueuse/core** (scroll-позиция)

## Быстрый старт

```bash
npm install
npm run dev      # http://localhost:5173
```

## Сборка и деплой на Vercel

```bash
npm run build    # → dist/
npm run preview  # локальный просмотр прод-сборки
npx vercel --prod
```

`vercel.json` уже настроен (SPA-rewrites для history-режима роутера).

## Страницы
| Маршрут | Страница |
|---|---|
| `/` | Главная — герой, интро, 10 активностей, 3 преимущества, CTA |
| `/sommerrodelbahn` | Sommerrodelbahn — описание, преимущества, часы работы |
| `/uebernachtung` | Übernachtung — Blockhütten (цены), Zinipi Lodges, Wohnmobil, форма-заявка |
| `/info` | Anfahrt & Info — окрестности, контакты, Google-карта |
| `/impressum`, `/datenschutz` | Юридические страницы |

## Ключевые элементы
- Кинематографичный full-screen герой с параллаксом и stagger-анимацией заголовка
- Прозрачная навигация → glass-morphism при скролле; полноэкранное мобильное меню
- Карточки активностей с hover-zoom и выезжающим описанием
- Стеклянные карточки цен с анимацией галочек
- Форма-заявка с floating-labels, валидацией и success-анимацией (без бэкенда)
- Встроенная Google-карта, scroll-to-top, плавные переходы между страницами
- Уважение к `prefers-reduced-motion`, адаптив (mobile/tablet/desktop)

## Структура
```
src/
├── pages/          # HomePage, CoasterPage, AccommodationPage, InfoPage, Impressum, Datenschutz
├── components/
│   ├── layout/     # Navbar, Footer, PageTransition
│   ├── home/ coaster/ accommodation/ info/   # секции страниц
│   └── ui/         # AnimatedHeading, ParallaxImage, ScrollReveal, ScrollToTop
├── composables/    # useScrollAnimation, useParallax
├── router/         # маршруты + scroll behavior + мета-теги
└── assets/css/     # main.css — тема Tailwind v4, дизайн-система
```

Полная документация и контент — в `CLAUDE.md`.

## Изображения
Логотип скачан в `public/logo.png` (он же favicon). Остальные фото — бесплатные с Unsplash CDN (hotlinking разрешён), подставляются по URL.
