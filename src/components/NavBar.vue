<script setup lang="ts">
import LogoMark from './LogoMark.vue'
import LangSwitch from './LangSwitch.vue'
</script>

<template>
  <header class="nav">
    <div class="wrap nav__row">
      <a class="lockup" href="#top" aria-label="TruthDB">
        <LogoMark :width="30" :height="32" rails ticks />
        <span class="lockup__wm" style="font-size:21px">Truth<b>DB</b></span>
      </a>
      <nav class="nav__links">
        <a href="#how">{{ $t('nav.whatItIs') }}</a>
        <a href="#capabilities">{{ $t('nav.capabilities') }}</a>
        <a href="#pillars">{{ $t('nav.whyDifferent') }}</a>
        <a href="#install">{{ $t('nav.install') }}</a>
        <LangSwitch />
        <a class="btn btn--primary" href="#install" style="padding:9px 16px">{{ $t('nav.download') }}</a>
      </nav>
    </div>
  </header>
</template>
