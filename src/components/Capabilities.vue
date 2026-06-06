<script setup lang="ts">
const items = [
  { no: '01', key: 'records' },
  { no: '02', key: 'search' },
  { no: '03', key: 'ai' },
  { no: '04', key: 'history' },
] as const
</script>

<template>
  <section class="section" id="capabilities">
    <div class="wrap" v-reveal>
      <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:24px">
        <div style="flex:1 1 460px">
          <span class="eyebrow">{{ $t('capabilities.eyebrow') }}</span>
          <h2 class="h1 balance" style="margin-top:20px; max-width:620px">{{ $t('capabilities.headingLine1') }}<br>{{ $t('capabilities.headingLine2') }}</h2>
        </div>
        <p class="muted pretty" style="flex:0 0 380px; max-width:380px; font-size:15.5px">{{ $t('capabilities.intro') }}</p>
      </div>

      <div class="slices">
        <div class="slices__row">
          <div class="slice ticked" v-for="item in items" :key="item.key">
            <div class="slice__no">{{ item.no }}</div>
            <div class="slice__title">{{ $t(`capabilities.items.${item.key}.title`) }}</div>
            <p class="muted" style="font-size:14.5px; margin:0">{{ $t(`capabilities.items.${item.key}.body`) }}</p>
          </div>
        </div>
        <div class="slice__conn">
          <div class="slice__tick"></div><div class="slice__tick"></div><div class="slice__tick"></div><div class="slice__tick"></div>
        </div>
        <div class="slices__base">
          <span class="label" style="color:var(--signal-2)">{{ $t('capabilities.baseLabel') }}</span>
          <span class="measure">{{ $t('capabilities.baseMeasure') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
