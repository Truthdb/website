import { onMounted, onUnmounted } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '../config/firebase'
import { useAuthStore } from '../stores/auth'

/**
 * Mirrors Firebase auth state into the `auth` store. Renders nothing.
 * If Firebase isn't configured (`auth` is null), resolves immediately as anonymous
 * so the launch gate doesn't hang on its splash.
 */
export function useAuthListener() {
  const store = useAuthStore()
  let unsubscribe: (() => void) | undefined

  onMounted(() => {
    if (!auth) {
      store.setUser(null)
      return
    }
    unsubscribe = onAuthStateChanged(auth, (fbUser) => {
      store.setUser(
        fbUser
          ? { uid: fbUser.uid, email: fbUser.email, displayName: fbUser.displayName }
          : null
      )
    })
  })

  onUnmounted(() => unsubscribe?.())
}
