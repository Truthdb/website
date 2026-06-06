<script setup lang="ts">
// Hero with the "Fig.01" spec panel visual. The stacked-DB art is a one-off SVG
// (four ledger rows + datum annotations), kept inline here rather than in LogoMark.
</script>

<template>
  <section class="hero bp" id="top" style="background-size:32px 32px">
    <div class="wrap hero__grid" v-reveal>
      <div>
        <span class="eyebrow">{{ $t('hero.eyebrow') }}</span>
        <h1 class="h-display balance" style="margin-top:22px">{{ $t('hero.headlineLine1') }}<br>{{ $t('hero.headlineLine2') }}</h1>
        <p class="lead pretty" style="max-width:480px; margin-top:24px">
          {{ $t('hero.ledePre') }}<span style="color:var(--chalk)">{{ $t('hero.ledeEmphasis') }}</span>
        </p>
        <div class="hero__cta">
          <a class="btn btn--primary" href="#install">{{ $t('hero.ctaDownload') }}</a>
          <a class="btn btn--ghost" href="#how">{{ $t('hero.ctaHow') }}</a>
        </div>
        <div class="hero__meta">
          <span class="chip"><span class="dot"></span>{{ $t('hero.chip') }}</span>
          <span class="measure">{{ $t('hero.measure') }}</span>
        </div>
      </div>

      <!-- spec panel -->
      <div class="panel panel--bp spec ticked" style="background-size:26px 26px">
        <div class="spec__head">
          <span class="label">{{ $t('hero.specLabel') }}</span>
          <span class="measure">{{ $t('hero.specVersion') }}</span>
        </div>
        <div class="spec__art">
          <svg width="150" height="170" viewBox="0 0 42 48" fill="none" aria-hidden="true">
            <line x1="21" y1="3" x2="21" y2="45" stroke="#5A6A78" stroke-width="0.8" />
            <line x1="6" y1="12" x2="6" y2="38" stroke="#2C3D49" stroke-width="1.4" />
            <line x1="36" y1="12" x2="36" y2="38" stroke="#2C3D49" stroke-width="1.4" />
            <ellipse cx="21" cy="38" rx="15" ry="5" stroke="#2C3D49" stroke-width="1.4" />
            <ellipse cx="21" cy="29.5" rx="15" ry="5" stroke="#2C3D49" stroke-width="1.4" />
            <ellipse cx="21" cy="21" rx="15" ry="5" stroke="#2C3D49" stroke-width="1.4" />
            <ellipse cx="21" cy="12" rx="15" ry="5" fill="rgba(59,130,246,.16)" stroke="#3B82F6" stroke-width="1.6" />
            <circle cx="21" cy="12" r="1.7" fill="#5B9BFF" />
          </svg>
          <span class="spec__ann" style="top:30px; right:18px">{{ $t('hero.annNewest') }}</span>
          <span class="spec__ann" style="bottom:54px; left:16px; color:var(--dim)">{{ $t('hero.annHistory') }}</span>
        </div>
        <div class="spec__foot">
          <div class="spec__stat"><div class="label">{{ $t('hero.statSpeed') }}</div><div class="spec__num" style="color:var(--chalk)">180K<span style="font-size:12px;color:var(--gauge);font-family:var(--mono);font-weight:400">/s</span></div></div>
          <div class="spec__stat"><div class="label">{{ $t('hero.statVerified') }}</div><div class="spec__num" style="color:var(--ok)">100%</div></div>
          <div class="spec__stat"><div class="label">{{ $t('hero.statDataLost') }}</div><div class="spec__num" style="color:var(--chalk)">0</div></div>
        </div>
      </div>
    </div>
  </section>
</template>
