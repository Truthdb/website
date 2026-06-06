import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import da from './locales/da.json'
import fr from './locales/fr.json'
import es from './locales/es.json'

export const SUPPORTED_LANGUAGES = ['en', 'da', 'fr', 'es'] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export const isSupportedLanguage = (value: string): value is SupportedLanguage =>
  (SUPPORTED_LANGUAGES as readonly string[]).includes(value)

const STORAGE_KEY = 'lang'

/** Detection order (mirrors workinabox's i18next config): localStorage → navigator → fallback. */
export const detectLanguage = (): SupportedLanguage => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && isSupportedLanguage(stored)) return stored
  const nav = navigator.language?.slice(0, 2).toLowerCase()
  if (nav && isSupportedLanguage(nav)) return nav
  return 'en'
}

export const persistLanguage = (lang: SupportedLanguage): void => {
  localStorage.setItem(STORAGE_KEY, lang)
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: detectLanguage(),
  fallbackLocale: 'en',
  messages: { en, da, fr, es },
})
