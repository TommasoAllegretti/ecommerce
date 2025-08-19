<script setup lang="ts">
import TagBadge from '@/components/TagBadge.vue'
import type { Item } from '@/firebase/types'
import type { PropType } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="w-full aspect-[4/3] rounded-xl overflow-hidden">
      <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
    </div>

    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
      {{ item.title }}
    </h2>

    <div v-if="item.tags?.length" class="flex flex-wrap gap-2">
      <tag-badge v-for="(tag, index) in item.tags" :key="index" :tag />
    </div>

    <p v-if="item.description" class="text-gray-700 dark:text-gray-200 leading-relaxed">
      {{ item.description }}
    </p>
  </div>
</template>
