<script setup lang="ts">
import { EBadgeStates } from '@/types/commonTypes.ts';

defineProps({
  count: Number,
  state: {
    type: String,
    default: EBadgeStates.PRIMARY,
  },
});
</script>

<template>
  <div class="rounded-full text-xs text-gray-700 px-2 py-1" :class="`${state} text-white`">
    {{ count }}
  </div>
</template>

<style scoped>
.danger {
  background-color: rgba(255, 0, 0, 0.1);
  color: red;
}

.primary {
  background-color: #f0f0f0;
  color: #5f33e2;
}

.success {
  background-color: #34d399;
}

.warning {
  background-color: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}
</style>
