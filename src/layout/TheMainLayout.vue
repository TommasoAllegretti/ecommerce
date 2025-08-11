<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="flex justify-center min-h-screen">
    <section class="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-6">
      <slot></slot>
    </section>
  </main>
</template>
