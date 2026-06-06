<script setup lang="ts">
import { ref, computed, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import FlagIcon from './FlagIcon.vue'
import { SUPPORTED_LANGUAGES, isSupportedLanguage, type SupportedLanguage } from '../i18n'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()

const open = ref(false)
const wrapper = ref<HTMLElement | null>(null)

const current = computed<SupportedLanguage>(() =>
  isSupportedLanguage(locale.value) ? locale.value : 'en'
)

const switchTo = (lang: SupportedLanguage) => {
  open.value = false
  if (lang === current.value) return
  const rest = route.path.replace(/^\/[a-z]{2}(\/|$)/, '/')
  router.push(`/${lang}${rest === '/' ? '/' : rest}${route.hash}`)
}

const onMouseDown = (e: MouseEvent) => {
  if (wrapper.value && !wrapper.value.contains(e.target as Node)) open.value = false
}
const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') open.value = false
}

watch(open, (isOpen) => {
  if (isOpen) {
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('keydown', onKeyDown)
  } else {
    document.removeEventListener('mousedown', onMouseDown)
    document.removeEventListener('keydown', onKeyDown)
  }
})

onUnmounted(() => {
  document.removeEventListener('mousedown', onMouseDown)
  document.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
  <div class="lang" ref="wrapper">
    <button
      type="button"
      class="lang-trigger"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-label="t(`lang.${current}`)"
      @click="open = !open"
    >
      <FlagIcon :lang="current" />
      <span class="lang-caret" aria-hidden="true">▾</span>
    </button>
    <ul v-if="open" class="lang-menu" role="listbox">
      <li v-for="lang in SUPPORTED_LANGUAGES" :key="lang" role="option" :aria-selected="lang === current">
        <button
          type="button"
          :class="['lang-option', { active: lang === current }]"
          @click="switchTo(lang)"
        >
          <FlagIcon :lang="lang" />
          <span>{{ t(`lang.${lang}`) }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.lang {
  position: relative;
  display: inline-block;
}
.lang-trigger {
  background: none;
  border: 0;
  padding: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--gauge);
  transition: color 0.15s ease;
}
.lang-trigger:hover,
.lang-trigger:focus-visible {
  color: var(--chalk);
  outline: none;
}
.lang-trigger svg {
  width: 22px;
  height: 14px;
  display: block;
}
.lang-caret {
  font-size: 10px;
  line-height: 1;
}
.lang-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  margin: 0;
  padding: 4px;
  list-style: none;
  background: var(--plate-2);
  border: 1px solid var(--rule-hi);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  z-index: 60;
  min-width: 150px;
}
.lang-option {
  width: 100%;
  background: none;
  border: 0;
  padding: 6px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--gauge);
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.lang-option svg {
  width: 22px;
  height: 14px;
  display: block;
  flex-shrink: 0;
}
.lang-option:hover,
.lang-option:focus-visible {
  background: var(--rule);
  color: var(--chalk);
  outline: none;
}
.lang-option.active {
  color: var(--signal-2);
}
</style>
