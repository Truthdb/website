<script setup lang="ts">
const steps = ['boot', 'disks', 'live'] as const
</script>

<template>
  <section class="section" id="install">
    <div class="wrap" v-reveal>
      <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:24px">
        <div style="flex:1 1 460px">
          <span class="eyebrow">{{ $t('install.eyebrow') }}</span>
          <h2 class="h1 balance" style="margin-top:20px; max-width:560px">{{ $t('install.headingLine1') }}<br>{{ $t('install.headingLine2') }}</h2>
        </div>
        <p class="muted pretty" style="flex:0 0 380px; max-width:380px; font-size:15.5px">{{ $t('install.intro') }}</p>
      </div>

      <div class="steps">
        <div class="step ticked" v-for="step in steps" :key="step">
          <div class="step__no">{{ $t(`install.steps.${step}.no`) }}</div>
          <div class="step__t">{{ $t(`install.steps.${step}.title`) }}</div>
          <p class="muted" style="font-size:14.5px; margin:0">{{ $t(`install.steps.${step}.body`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
