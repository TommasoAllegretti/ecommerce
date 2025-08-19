<script setup lang="ts">
defineProps<{
  tag: string
}>()
</script>

<template>
  <span
    class="inline-block bg-white text-blue-800 dark:bg-gray-950 dark:text-white dark:outline text-xs font-medium px-2 py-1 rounded-full"
  >
    {{ tag }}
  </span>
</template>
