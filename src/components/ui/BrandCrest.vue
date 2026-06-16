<script setup>
// Bespoke emblem — a layered fir on a horizon inside a double roundel.
// Uses currentColor so it adapts to light/dark contexts.
defineProps({ title: { type: String, default: 'Erlebnisland Kegelsberg' } })
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" :aria-label="title">
    <circle cx="32" cy="32" r="29.6" stroke="currentColor" stroke-width="1.2" />
    <circle cx="32" cy="32" r="25" stroke="currentColor" stroke-width="0.55" opacity="0.45" />
    <!-- rising sun behind the horizon -->
    <path d="M23 39a9 9 0 0 1 18 0" stroke="currentColor" stroke-width="0.9" opacity="0.5" stroke-linecap="round" />
    <!-- layered fir -->
    <path d="M32 13 L27 24 L37 24 Z" fill="currentColor" />
    <path d="M32 19.5 L24.5 31 L39.5 31 Z" fill="currentColor" />
    <path d="M32 26 L21.5 39 L42.5 39 Z" fill="currentColor" />
    <rect x="30.4" y="38.5" width="3.2" height="5" rx="0.4" fill="currentColor" />
    <!-- horizon -->
    <path d="M15 43.5 H49" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" />
  </svg>
</template>
