import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import { getConsent, trackPageView } from '../analytics/analytics'
import { detectLanguage, isSupportedLanguage, persistLanguage, i18n } from '../i18n'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/:lang',
      children: [
        { path: '', name: 'home', component: Home },
        // Unknown sub-path under a valid locale → back to that locale's home.
        { path: ':pathMatch(.*)*', redirect: (to) => `/${to.params.lang as string}/` },
      ],
    },
    // Root and anything without a locale segment → detected locale.
    { path: '/:pathMatch(.*)*', redirect: () => `/${detectLanguage()}/` },
  ],
})

// Validate the locale segment and keep i18n + <html lang> in sync (mirrors LangGate).
router.beforeEach((to) => {
  const lang = to.params.lang
  if (typeof lang !== 'string' || !isSupportedLanguage(lang)) {
    return `/${detectLanguage()}/`
  }
  if (i18n.global.locale.value !== lang) i18n.global.locale.value = lang
  persistLanguage(lang)
  document.documentElement.lang = lang
  return true
})

// Page tracking, gated on consent (mirrors AnalyticsListener).
router.afterEach((to) => {
  if (getConsent() === 'granted') trackPageView(to.fullPath)
})

export default router
