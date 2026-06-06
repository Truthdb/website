<script setup lang="ts">
import LogoMark from './LogoMark.vue'
</script>

<template>
  <footer class="footer">
    <div class="wrap">
      <div class="footer__grid">
        <div class="footer__col">
          <a class="lockup" href="#top" style="margin-bottom:16px">
            <LogoMark :width="28" :height="30" />
            <span class="lockup__wm" style="font-size:20px">Truth<b>DB</b></span>
          </a>
          <p class="muted" style="font-size:14px; max-width:280px; margin:0">{{ $t('footer.tagline') }}</p>
        </div>
        <div class="footer__col">
          <h4>{{ $t('footer.productHeading') }}</h4>
          <a href="#how">{{ $t('footer.links.whatItIs') }}</a>
          <a href="#capabilities">{{ $t('footer.links.capabilities') }}</a>
          <a href="#pillars">{{ $t('footer.links.whyDifferent') }}</a>
          <a href="#install">{{ $t('footer.links.install') }}</a>
        </div>
        <div class="footer__col">
          <h4>{{ $t('footer.resourcesHeading') }}</h4>
          <a href="#">{{ $t('footer.links.documentation') }}</a>
          <a href="#">{{ $t('footer.links.architecture') }}</a>
          <a href="#">{{ $t('footer.links.changelog') }}</a>
          <a href="#">{{ $t('footer.links.github') }}</a>
        </div>
        <div class="footer__col">
          <h4>{{ $t('footer.companyHeading') }}</h4>
          <a href="#">{{ $t('footer.links.about') }}</a>
          <a href="#">{{ $t('footer.links.security') }}</a>
          <a href="#">{{ $t('footer.links.contact') }}</a>
        </div>
      </div>
      <div class="footer__bot">
        <span class="measure" style="color:var(--dim)">{{ $t('footer.copyright') }}</span>
        <span class="measure" style="color:var(--dim)">{{ $t('footer.builtOn') }}</span>
      </div>
    </div>
  </footer>
</template>
