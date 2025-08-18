<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { signInWithGoogle } = useAuth()
</script>

<template>
  <button
    @click="signInWithGoogle"
    type="button"
    class="flex h-8 justify-center py-2 border border-gray-300 bg-white rounded-md hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900 cursor-pointer"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" />
  </button>
</template>
