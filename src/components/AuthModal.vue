<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { signInWithPopup, signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth'

import { auth, googleProvider } from '../config/firebase'
import { useUiStore } from '../stores/ui'

// Sign-in only. Email/password users are provisioned in the Firebase console for now;
// there is no public sign-up until "Request access" is built.
const { t } = useI18n()
const ui = useUiStore()
const { authModalOpen: open } = storeToRefs(ui)

const email = ref('')
const password = ref('')
const error = ref<string | null>(null)
const busy = ref(false)

const close = () => ui.closeAuthModal()

// Reset transient state whenever the modal closes.
watch(open, (isOpen) => {
  if (!isOpen) {
    email.value = ''
    password.value = ''
    error.value = null
    busy.value = false
  }
})

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && open.value) close()
}
onMounted(() => document.addEventListener('keydown', onKey))
onUnmounted(() => document.removeEventListener('keydown', onKey))

const guard = (): boolean => {
  if (!auth) {
    error.value = t('auth.unavailable')
    return false
  }
  return true
}

// Surface the real Firebase reason instead of a blanket "wrong password".
const describeAuthError = (err: unknown): string => {
  const code = (err as { code?: string })?.code ?? ''
  console.error('[auth] sign-in failed:', code || err, err)
  switch (code) {
    case AuthErrorCodes.OPERATION_NOT_ALLOWED:
      return t('auth.errorProviderDisabled')
    case AuthErrorCodes.USER_DELETED:
      return t('auth.errorNoAccount')
    case AuthErrorCodes.INVALID_PASSWORD:
    case 'auth/invalid-credential':
      return t('auth.errorEmail')
    case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
      return t('auth.errorTooMany')
    default:
      return `${t('auth.errorEmail')} (${code || 'unknown'})`
  }
}

const handleGoogle = async () => {
  if (!guard() || !auth) return
  busy.value = true
  error.value = null
  try {
    await signInWithPopup(auth, googleProvider)
    close()
  } catch (err) {
    console.error('[auth] Google sign-in failed:', (err as { code?: string })?.code, err)
    error.value = t('auth.errorGoogle')
  } finally {
    busy.value = false
  }
}

const handleEmail = async () => {
  if (!guard() || !auth) return
  busy.value = true
  error.value = null
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    close()
  } catch (err) {
    error.value = describeAuthError(err)
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <div v-if="open" class="auth-overlay" role="dialog" aria-modal="true" @mousedown.self="close">
    <div class="auth-modal panel">
      <button class="auth-close" type="button" :aria-label="$t('auth.close')" @click="close">×</button>
      <h2 class="auth-title">{{ $t('auth.title') }}</h2>

      <button class="btn btn--ghost auth-google" type="button" :disabled="busy" @click="handleGoogle">
        {{ $t('auth.google') }}
      </button>

      <div class="auth-divider"><span>{{ $t('auth.or') }}</span></div>

      <form class="auth-form" @submit.prevent="handleEmail">
        <label>
          {{ $t('auth.email') }}
          <input v-model="email" type="email" autocomplete="email" required />
        </label>
        <label>
          {{ $t('auth.password') }}
          <input v-model="password" type="password" autocomplete="current-password" required />
        </label>
        <p v-if="error" class="auth-error">{{ error }}</p>
        <button class="btn btn--primary auth-submit" type="submit" :disabled="busy">
          {{ $t('auth.signIn') }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.auth-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(6, 8, 13, 0.66);
  backdrop-filter: blur(4px);
  display: grid;
  place-items: center;
  padding: 24px;
}
.auth-modal {
  position: relative;
  width: 100%;
  max-width: 380px;
  padding: 32px 28px 28px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
}
.auth-close {
  position: absolute;
  top: 12px;
  right: 14px;
  background: none;
  border: 0;
  color: var(--dim);
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  padding: 4px;
}
.auth-close:hover {
  color: var(--chalk);
}
.auth-title {
  font-family: var(--display);
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
  color: var(--chalk);
}
.auth-google {
  width: 100%;
  justify-content: center;
}
.auth-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 18px 0;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dim);
}
.auth-divider::before,
.auth-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--rule);
}
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.auth-form label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gauge);
}
.auth-form input {
  font-family: var(--display);
  font-size: 14px;
  padding: 10px 12px;
  border: 1px solid var(--rule-hi);
  background: var(--steel);
  color: var(--chalk);
}
.auth-form input:focus {
  outline: none;
  border-color: var(--signal);
}
.auth-submit {
  width: 100%;
  justify-content: center;
  margin-top: 4px;
}
.auth-error {
  margin: 0;
  font-size: 13px;
  color: var(--amber);
}
</style>
