// composables/useAuth.ts
import { ref, onMounted } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import type { User } from 'firebase/auth'

// Create a single auth instance (make sure Firebase is initialized in your project)
const auth = getAuth()
const provider = new GoogleAuthProvider()

// Global reactive state (so it's shared across components)
const user = ref<User | null>(auth.currentUser)
const loading = ref<boolean>(true)

export function useAuth() {
  // sign in with Google
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      user.value = result.user
    } catch (error) {
      console.error('Google sign-in error:', error)
      throw error
    }
  }

  // sign out
  const signOutUser = async () => {
    try {
      await signOut(auth)
      user.value = null
    } catch (error) {
      console.error('Sign-out error:', error)
      throw error
    }
  }

  // track auth state changes
  onMounted(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      user.value = firebaseUser
      loading.value = false
    })
    return () => unsubscribe()
  })

  return {
    user,
    loading,
    signInWithGoogle,
    signOutUser,
  }
}
