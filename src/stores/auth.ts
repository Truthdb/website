import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface User {
  uid: string
  email: string | null
  displayName: string | null
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  /** False until the first Firebase auth state resolves (used to avoid a gate flash). */
  const initialized = ref(false)

  function setUser(value: User | null) {
    user.value = value
    initialized.value = true
  }

  return { user, initialized, setUser }
})
