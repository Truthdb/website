<script setup lang="ts">
import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

import NavBar from '../components/NavBar.vue'
import Hero from '../components/Hero.vue'
import OneSystem from '../components/OneSystem.vue'
import Capabilities from '../components/Capabilities.vue'
import Pillars from '../components/Pillars.vue'
import Install from '../components/Install.vue'
import ClosingCta from '../components/ClosingCta.vue'
import Footer from '../components/Footer.vue'

const { t } = useI18n()

// Keep the document title + meta description in sync with the active locale.
watchEffect(() => {
  document.title = t('meta.title')
  let meta = document.querySelector('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', t('meta.description'))
})
</script>

<template>
  <NavBar />
  <main>
    <Hero />
    <hr class="divider" />
    <OneSystem />
    <hr class="divider" />
    <Capabilities />
    <hr class="divider" />
    <Pillars />
    <hr class="divider" />
    <Install />
    <ClosingCta />
  </main>
  <Footer />
</template>
