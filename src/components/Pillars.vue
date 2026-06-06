<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { tm, rt } = useI18n()

const items = ['performance', 'security', 'integrity'] as const

</script>

<template>
  <section class="section bp" id="pillars" style="background-size:32px 32px; background-color:var(--steel-2)">
    <div class="wrap" v-reveal>
      <span class="eyebrow">{{ $t('pillars.eyebrow') }}</span>
      <h2 class="h1 balance" style="margin-top:20px; max-width:680px">{{ $t('pillars.heading') }}</h2>
      <p class="lead pretty" style="max-width:600px; margin-top:18px">{{ $t('pillars.lede') }}</p>

      <div class="pillars">
        <div class="pillar" v-for="item in items" :key="item">
          <div class="pillar__no">{{ $t(`pillars.items.${item}.no`) }}</div>
          <div class="pillar__big">{{ $t(`pillars.items.${item}.title`) }}</div>
          <p class="muted pretty" style="margin:12px 0 0; font-size:15px">{{ $t(`pillars.items.${item}.body`) }}</p>
          <div class="pillar__stat">{{ $t(`pillars.items.${item}.stat`) }}</div>
        </div>
      </div>

      <!-- tech credibility band (for the engineers) -->
      <div style="margin-top:46px">
        <span class="eyebrow eyebrow--plain" style="color:var(--dim)">{{ $t('pillars.underHood') }}</span>
        <div class="band">
          <span class="chip" v-for="(chip, i) in tm('pillars.chips')" :key="i">{{ rt(chip) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
