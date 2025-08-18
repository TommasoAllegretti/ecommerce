<script setup lang="ts">
import { getItems } from '@/firebase/GetItemsAction'
import type { Item } from '@/firebase/types'
import { onMounted, ref } from 'vue'
import ItemCard from '@/components/ItemCard.vue'
import SignOutButton from '@/components/SignOutButton.vue'

const items = ref<Item[]>([])

async function populateItemList() {
  items.value = await getItems()
}

onMounted(() => {
  populateItemList()
})
</script>

<template>
  <div class="h-full w-full space-y-4">
    <div class="flex justify-between">
      <div></div>
      <sign-out-button></sign-out-button>
    </div>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ItemCard v-for="item in items" :key="item.id" :item="item"></ItemCard>
    </div>
  </div>
</template>
