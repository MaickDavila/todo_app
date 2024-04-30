<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  percentage: {
    type: Number,
    default: () => 20,
  },
});

const radius = 25;
const circumference = 2 * Math.PI * radius;

const offset = computed(() => {
  const progress = props.percentage / 100;
  return circumference * (1 - progress);
});
</script>

<template>
  <div class="flex items-center justify-center text-xs relative">
    <svg class="progress-ring" width="50" height="50">
      <circle
        class="progress-ring__circle"
        :stroke="props.percentage == 100 ? '#10B981' : '#5f33e2'"
        stroke-width="2"
        fill="transparent"
        r="20"
        cx="25"
        cy="25"
      />
    </svg>
    <span class="z-10 absolute">{{ percentage }}%</span>
  </div>
</template>

<style scoped>
.progress-ring__circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  border-radius: 50%;
}

.progress-ring__circle {
  stroke-dasharray: 157; /* 2 * Math.PI * 25 */
  stroke-dashoffset: v-bind(offset);
}
</style>
