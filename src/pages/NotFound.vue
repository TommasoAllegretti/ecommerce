<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
</script>

<template>
  <div class="h-full">
    <base-card class="h-full">
      <h2 class="font-bold text-2xl">Error 404</h2>
      <h4 class="mt-6">Page not found :(</h4>
      <RouterLink to="/" class="mt-12 text-blue-500 underline hover:no-underline"
        >Click here to go back to home.</RouterLink
      >
    </base-card>
  </div>
</template>
