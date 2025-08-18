<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { signOutUser } = useAuth()

const handleSignOut = async () => {
  try {
    await signOutUser()
  } catch (error) {
    console.error('Error signing out:', error)
  }
}
</script>

<template>
  <button
    @click="handleSignOut"
    class="px-4 py-2 text-white font-semibold rounded-xl shadow transition cursor-pointer bg-red-500 hover:bg-red-600 focus:outline-red-500 active:bg-red-700 dark:bg-red-800 dark:hover:bg-red-900 dark:focus:outline-red-800 dark:active:bg-red-950"
  >
    Logout
  </button>
</template>
