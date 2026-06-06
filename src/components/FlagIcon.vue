<script setup lang="ts">
import type { SupportedLanguage } from '../i18n'

defineProps<{ lang: SupportedLanguage }>()
</script>

<template>
  <svg v-if="lang === 'da'" viewBox="0 0 18 12" aria-hidden="true">
    <rect width="18" height="12" fill="#c8102e" />
    <rect x="0" y="5" width="18" height="2" fill="#fff" />
    <rect x="6" y="0" width="2" height="12" fill="#fff" />
  </svg>
  <svg v-else-if="lang === 'fr'" viewBox="0 0 18 12" aria-hidden="true">
    <rect x="0" width="6" height="12" fill="#0055a4" />
    <rect x="6" width="6" height="12" fill="#fff" />
    <rect x="12" width="6" height="12" fill="#ef4135" />
  </svg>
  <svg v-else-if="lang === 'es'" viewBox="0 0 18 12" aria-hidden="true">
    <rect width="18" height="12" fill="#aa151b" />
    <rect y="3" width="18" height="6" fill="#f1bf00" />
  </svg>
  <svg v-else viewBox="0 0 18 12" aria-hidden="true">
    <rect width="18" height="12" fill="#012169" />
    <path d="M0 0 L18 12 M18 0 L0 12" stroke="#fff" stroke-width="2" />
    <path d="M0 0 L18 12 M18 0 L0 12" stroke="#c8102e" stroke-width="1" />
    <rect x="0" y="5" width="18" height="2" fill="#fff" />
    <rect x="8" y="0" width="2" height="12" fill="#fff" />
    <rect x="0" y="5.5" width="18" height="1" fill="#c8102e" />
    <rect x="8.5" y="0" width="1" height="12" fill="#c8102e" />
  </svg>
</template>
