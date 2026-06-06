<script setup lang="ts">
import { ref } from 'vue'

import { getConsent, setConsent, loadGA, trackPageView } from '../analytics/analytics'

const visible = ref(getConsent() === null)

const accept = () => {
  setConsent('granted')
  loadGA()
  trackPageView(window.location.pathname)
  visible.value = false
}

const reject = () => {
  setConsent('denied')
  visible.value = false
}
</script>

<template>
  <div v-if="visible" class="cookie panel" role="dialog" :aria-label="$t('cookies.message')">
    <p class="cookie-message">{{ $t('cookies.message') }}</p>
    <div class="cookie-actions">
      <button type="button" class="cookie-reject" @click="reject">{{ $t('cookies.reject') }}</button>
      <button type="button" class="cookie-accept" @click="accept">{{ $t('cookies.accept') }}</button>
    </div>
  </div>
</template>

<style scoped>
.cookie {
  position: fixed;
  bottom: clamp(12px, 2vh, 20px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: min(620px, calc(100vw - 24px));
  padding: 14px 18px;
  background: rgba(19, 26, 33, 0.92);
  backdrop-filter: blur(8px);
}
.cookie-message {
  margin: 0;
  font-size: 13px;
  line-height: 1.45;
  color: var(--chalk);
}
.cookie-actions {
  display: flex;
  flex-shrink: 0;
  gap: 8px;
}
.cookie-reject,
.cookie-accept {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 8px 14px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease;
}
.cookie-reject {
  border-color: var(--rule-hi);
  background: transparent;
  color: var(--gauge);
}
.cookie-reject:hover,
.cookie-reject:focus-visible {
  color: var(--chalk);
  border-color: var(--datum);
  outline: none;
}
.cookie-accept {
  border-color: var(--signal);
  background: var(--signal);
  color: #06080d;
}
.cookie-accept:hover,
.cookie-accept:focus-visible {
  background: var(--signal-2);
  border-color: var(--signal-2);
  outline: none;
}
@media (max-width: 540px) {
  .cookie {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  .cookie-actions {
    justify-content: flex-end;
  }
}
</style>
