<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import PageTransition from './components/layout/PageTransition.vue'
import ScrollToTop from './components/ui/ScrollToTop.vue'
</script>

<template>
  <Navbar />

  <main>
    <router-view v-slot="{ Component, route }">
      <PageTransition>
        <component :is="Component" :key="route.path" />
      </PageTransition>
    </router-view>
  </main>

  <Footer />
  <ScrollToTop />
</template>
