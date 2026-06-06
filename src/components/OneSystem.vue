<script setup lang="ts">
import LogoMark from './LogoMark.vue'

const boxes = ['database', 'search', 'vector', 'activity', 'audit'] as const
</script>

<template>
  <section class="section" id="how">
    <div class="wrap" v-reveal>
      <span class="eyebrow">{{ $t('oneSystem.eyebrow') }}</span>
      <h2 class="h1 balance" style="margin-top:20px; max-width:760px">{{ $t('oneSystem.heading') }}</h2>
      <p class="lead pretty" style="max-width:620px; margin-top:20px">{{ $t('oneSystem.lede') }}</p>

      <div class="swap">
        <div>
          <div class="label" style="margin-bottom:14px">{{ $t('oneSystem.todayLabel') }}</div>
          <div class="stack">
            <div class="stackbox" v-for="(key, i) in boxes" :key="key">
              <span>{{ $t(`oneSystem.boxes.${key}`) }}</span>
              <span class="label">{{ $t('oneSystem.copy', { n: i + 1 }) }}</span>
            </div>
          </div>
          <div class="measure" style="margin-top:14px; color:var(--amber)">{{ $t('oneSystem.beforeMeasure') }}</div>
        </div>

        <div class="swap__arrow">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M7 17h20M20 10l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
          <span class="label" style="writing-mode:vertical-rl">{{ $t('oneSystem.consolidate') }}</span>
        </div>

        <div class="one ticked">
          <div class="lockup" style="margin-bottom:18px">
            <LogoMark :width="26" :height="28" />
            <span class="lockup__wm" style="font-size:19px">Truth<b>DB</b></span>
          </div>
          <div class="h3">{{ $t('oneSystem.afterTitle') }}</div>
          <p class="muted pretty" style="margin:10px 0 0; font-size:15px">{{ $t('oneSystem.afterBody') }}</p>
          <div class="measure" style="margin-top:18px; color:var(--ok)">{{ $t('oneSystem.afterMeasure') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
