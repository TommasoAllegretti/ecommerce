import { ref, onMounted } from 'vue'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth } from '@/firebase'
import type { User } from 'firebase/auth'
import { useRouter } from 'vue-router'

const provider = new GoogleAuthProvider()

const user = ref<User | null>(auth.currentUser)
const loading = ref<boolean>(true)

export function useAuth() {
  const router = useRouter()
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      user.value = result.user
      router.push('/')
    } catch (error) {
      console.error('Google sign-in error:', error)
      throw error
    }
  }

  const signOutUser = async () => {
    try {
      await signOut(auth)
      user.value = null
    } catch (error) {
      console.error('Sign-out error:', error)
      throw error
    }
  }

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
