<script setup lang="ts">
import { getItems } from '@/firebase/GetItemsAction'
import type { Item } from '@/firebase/types'
import { onMounted, ref } from 'vue'
import ItemCard from '@/components/ItemCard.vue'
import SignOutButton from '@/components/SignOutButton.vue'
import BaseModal from '@/components/BaseModal.vue'
import ItemDetail from '@/components/ItemDetail.vue'

const items = ref<Item[]>([])
const isLoading = ref(true)

const showModal = ref(false)

const selectedItem = ref<Item | null>(null)

function onItemClick(item: Item) {
  showModal.value = true
  selectedItem.value = item
}

async function populateItemList() {
  try {
    items.value = await getItems()
  } finally {
    isLoading.value = false
  }
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
      <!-- Skeleton -->
      <template v-if="isLoading">
        <div
          v-for="n in 6"
          :key="n"
          class="md:shadow-black/20 md:dark:shadow-white/20 bg-blue-100 dark:bg-gray-900 rounded-2xl overflow-hidden"
        >
          <div class="w-full aspect-[3/3] bg-gray-300 dark:bg-gray-700 animate-pulse"></div>

          <div class="p-4 space-y-2">
            <div class="h-6 w-3/4 rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <div class="h-4 w-1/2 rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <div class="flex gap-2 mt-2">
              <div
                v-for="n in 2"
                :key="n"
                class="h-6 w-12 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"
              ></div>
            </div>
          </div>
        </div>
      </template>
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        @click.prevent="onItemClick(item)"
      ></ItemCard>
    </div>
    <base-modal v-model="showModal">
      <item-detail :item="selectedItem!"></item-detail>
    </base-modal>
  </div>
</template>
