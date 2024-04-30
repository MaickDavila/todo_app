<script setup lang="ts">
defineEmits({
  click: null,
});
</script>

<template>
  <button class="app-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
