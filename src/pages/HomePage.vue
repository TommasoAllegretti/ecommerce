<script setup lang="ts">
import { getItems } from '@/firebase/GetItemsAction'
import { onMounted, ref } from 'vue'

const items = ref<any[]>([])

async function populateItemList() {
  items.value = await getItems()
}

onMounted(() => {
  populateItemList()
})
</script>

<template>
  <h1>home</h1>
  <div>
    <ul>
      <li v-for="item in items">{{ item.title }}</li>
    </ul>
  </div>
</template>
