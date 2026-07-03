<script setup lang="ts">
import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

import LogoMark from './LogoMark.vue'

const { t } = useI18n()

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
</style>
