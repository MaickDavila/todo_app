<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  percentage: {
    type: Number,
    default: () => 0,
  },
});

const radius = 20;
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
        stroke-width="3"
        fill="transparent"
        r="20"
        cx="25"
        cy="25"
        :style="{ strokeDashoffset: offset }"
      />
    </svg>
    <span class="z-auto absolute">{{ percentage || '0' }}%</span>
  </div>
</template>

<style scoped>
.progress-ring__circle {
  transition: stroke-dashoffset 1s ease-in-out;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-dasharray: 125.66370614359172;
  animation: dash 1s linear;
}

@keyframes dash {
  to {
    stroke-dashoffset: v-bind(offset);
  }

  from {
    stroke-dashoffset: 157;
  }
}
</style>
