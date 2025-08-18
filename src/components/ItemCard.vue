<script setup lang="ts">
import type { Item } from '@/firebase/types'
import type { PropType } from 'vue'
import TagBadge from './TagBadge.vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
})
</script>

<template>
  <div
    class="md:shadow-black/20 md:dark:shadow-white/20 bg-blue-100 dark:bg-gray-900 rounded-2xl overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-150"
  >
    <div class="w-full aspect-[3/3]">
      <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
    </div>

    <div class="p-4">
      <h2 class="text-lg font-semibold truncate">
        {{ item.title }}
      </h2>
      <p class="truncate">{{ item.description }}</p>
      <div class="mt-2 flex flex-wrap gap-2">
        <tag-badge v-for="(tag, index) in item.tags" :key="index" :tag />
      </div>
    </div>
  </div>
</template>
