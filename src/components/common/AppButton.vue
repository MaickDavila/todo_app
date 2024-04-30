<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  outline: {
    type: Boolean,
    required: false,
    default: false,
  },
});

defineEmits({
  click: null,
});
</script>

<template>
  <button :class="`app-button ${outline ? 'app-button-outline' : ''}`" @click="$emit('click')" :disabled="loading">
    <div class="flex items-center justify-center gap-3 w-full">
      <slot></slot>
      <div
        v-if="loading"
        class="rounded-full h-3 w-3 border-2 border-t-0 animate-spin"
        :class="`border-${outline ? 'black' : 'white'}`"
      ></div>
    </div>
  </button>
</template>
