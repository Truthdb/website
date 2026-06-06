import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import { vReveal } from './directives/reveal'
import { getConsent, loadGA } from './analytics/analytics'
import './config/firebase'
import './styles/truthdb.css'
import './styles/sections.css'

// Returning visitors who already accepted consent get GA loaded up front.
if (getConsent() === 'granted') loadGA()

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.directive('reveal', vReveal)
app.mount('#app')
