<script setup lang="ts">
import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

import LogoMark from './LogoMark.vue'
import { useUiStore } from '../stores/ui'

const { t } = useI18n()
const ui = useUiStore()

watchEffect(() => {
  document.title = t('comingSoon.title')
})
</script>

<template>
  <main class="coming-soon bp">
    <div class="coming-soon-inner">
      <LogoMark :width="80" :height="84" rails class="coming-soon-mark" />
      <div class="coming-soon-wordmark">Truth<b>DB</b></div>
      <h1 class="h1 balance">{{ $t('comingSoon.headline') }}</h1>
      <p class="coming-soon-sub pretty">{{ $t('comingSoon.subtitle') }}</p>
      <button type="button" class="coming-soon-preview" @click="ui.openAuthModal()">
        {{ $t('comingSoon.previewLink') }}
      </button>
    </div>
  </main>
</template>

<style scoped>
.coming-soon {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 48px 24px;
  background-size: 32px 32px;
}
.coming-soon-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.coming-soon-mark {
  filter: drop-shadow(0 18px 40px rgba(0, 0, 0, 0.4));
}
.coming-soon-wordmark {
  margin-top: 20px;
  font-family: var(--display);
  font-weight: 800;
  font-size: 26px;
  letter-spacing: -0.025em;
  color: var(--chalk);
}
.coming-soon-wordmark b {
  color: var(--signal);
}
.coming-soon h1 {
  margin: 28px 0 0;
}
.coming-soon-sub {
  margin: 16px auto 0;
  max-width: 46ch;
  font-size: 16px;
  color: var(--gauge);
  line-height: 1.55;
}
.coming-soon-preview {
  margin-top: 28px;
  background: none;
  border: 0;
  cursor: pointer;
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dim);
  transition: color 0.15s ease;
}
.coming-soon-preview:hover {
  color: var(--signal-2);
}
</style>
