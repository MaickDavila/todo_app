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
      <span v-if="loading">
        <i class="fas fa-spinner fa-spin" :class="`text-${outline ? 'black' : 'white'}`"></i>
      </span>
    </div>
  </button>
</template>
