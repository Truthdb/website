<script setup lang="ts">
</script>

<template>
  <section class="closing">
    <div class="wrap">
      <span class="eyebrow eyebrow--plain" style="color:var(--datum); justify-content:center; display:flex">{{ $t('closing.eyebrow') }}</span>
      <h2 class="h-display balance" style="margin-top:22px">{{ $t('closing.heading') }}</h2>
      <p class="lead pretty" style="max-width:520px; margin:22px auto 0">{{ $t('closing.lede') }}</p>
      <div style="display:flex; gap:12px; justify-content:center; margin-top:34px; flex-wrap:wrap">
        <a class="btn btn--primary" href="#install">{{ $t('closing.ctaDownload') }}</a>
        <a class="btn btn--ghost" href="#">{{ $t('closing.ctaContact') }}</a>
      </div>
    </div>
  </section>
</template>
