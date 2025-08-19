<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isOpen = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val
  },
)

const close = () => {
  isOpen.value = false
  emit('update:modelValue', false)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/50" @click="close"></div>

    <div
      class="relative w-full h-full md:w-2/3 md:h-auto md:max-w-4xl bg-white dark:bg-gray-950 rounded-none md:rounded-2xl shadow-md md:shadow-black/20 md:dark:shadow-white/20 overflow-auto"
    >
      <button
        @click="close"
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
      >
        ✕
      </button>

      <div class="p-12">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
