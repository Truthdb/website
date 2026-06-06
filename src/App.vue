<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { LAUNCHED, isPreviewer } from './lib/launch'
import { useAuthStore } from './stores/auth'
import { useAuthListener } from './composables/useAuthListener'
import ComingSoon from './components/ComingSoon.vue'
import AuthModal from './components/AuthModal.vue'
import CookieBanner from './components/CookieBanner.vue'

useAuthListener()

const { user, initialized } = storeToRefs(useAuthStore())

/**
 * Pre-launch gate (mirrors workinabox's LaunchGate):
 * - LAUNCHED                       → show the site.
 * - pre-launch + allowed sign-in   → show the site (preview).
 * - pre-launch + anyone else       → show ComingSoon.
 * - auth still resolving           → render nothing (avoid a gate flash).
 */
const gate = computed<'site' | 'gate' | 'pending'>(() => {
  if (LAUNCHED) return 'site'
  if (!initialized.value) return 'pending'
  if (user.value && isPreviewer(user.value.email)) return 'site'
  return 'gate'
})
</script>

<template>
  <RouterView v-if="gate === 'site'" />
  <ComingSoon v-else-if="gate === 'gate'" />
  <AuthModal />
  <CookieBanner />
</template>
