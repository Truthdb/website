# website

The TruthDB public marketing website — a Vue 3 + Vite + TypeScript single-page app,
built on the "Strata" visual identity (`assets/visual-identity/`).

## Development

```bash
# Install dependencies
npm install

# Copy env template and fill in values (Firebase, gate, analytics)
cp .env.example .env.local

# Start development server
npm run dev

# Build for production (type-check + bundle)
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Deploy to Firebase Hosting (needs the Firebase CLI + a configured project)
npm run deploy
```

## Technology Stack

- Vue.js 3 + Vite 6 + TypeScript 5
- Vue Router (locale-prefixed routing)
- Pinia (state management)
- Vue I18n (en / da / fr / es)
- Firebase Auth (pre-launch gate)
- Google Analytics 4, consent-gated behind a GDPR cookie banner

## Features

- **Pre-launch gate** — when `VITE_LAUNCHED=false`, the public sees a "Coming soon"
  page; allowlisted emails (`VITE_PREVIEW_ALLOWLIST`) can sign in via Firebase to
  preview the real site. See `src/lib/launch.ts` and `src/App.vue`. Note: this is a
  client-side UI guard, not a security boundary.
- **Cookie consent + analytics** — GA loads only after the visitor accepts the cookie
  banner. See `src/analytics/analytics.ts` and `src/components/CookieBanner.vue`.
- **Internationalization** — URL-prefixed locales (`/en/`, `/da/`, …) with browser
  detection and a language switcher. See `src/i18n/` and `src/router/`.

## Configuration

All build-time config is via `VITE_*` env vars — see `.env.example`. For CI deploys,
provide them as GitHub secrets/variables (see `.github/workflows/deploy.yml`).

## Project Structure

- `src/`
  - `components/` — page sections + UI (NavBar, Hero, CookieBanner, AuthModal, …)
  - `views/Home.vue` — the landing page composition
  - `stores/` — Pinia stores (`ui`, `auth`)
  - `i18n/` — Vue I18n setup + `locales/*.json`
  - `router/` — locale routing + analytics page tracking
  - `analytics/`, `lib/`, `config/` — GA, launch gate, Firebase (framework-agnostic)
  - `styles/` — `truthdb.css` (design system) + `sections.css` (page layout)
- `.github/workflows/` — CI (lint + build) and Firebase deploy
- `firebase.json`, `.firebaserc` — Firebase Hosting config
