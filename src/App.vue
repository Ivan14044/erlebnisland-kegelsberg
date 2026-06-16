<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import PageTransition from './components/layout/PageTransition.vue'
import Preloader from './components/layout/Preloader.vue'
import ScrollToTop from './components/ui/ScrollToTop.vue'
import ScrollProgress from './components/ui/ScrollProgress.vue'
import CustomCursor from './components/ui/CustomCursor.vue'
</script>

<template>
  <Preloader />
  <CustomCursor />
  <ScrollProgress />
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
