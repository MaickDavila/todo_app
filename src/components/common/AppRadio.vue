<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['change']);

function changeValue() {
  emit('change', !props.modelValue);
}
</script>

<template>
  <div class="relative">
    <input type="radio" id="radio" class="hidden" :value="modelValue" />
    <label for="radio" class="flex items-center cursor-pointer" @click="changeValue">
      <div
        class="w-6 h-6 rounded-full border border-gray-100 shadow-lg flex items-center justify-center"
        :class="{ 'radio-selected': modelValue }"
      >
        <i v-if="modelValue" class="fas fa-check text-white check-icon"></i>
      </div>
    </label>
  </div>
</template>

<style scoped>
.radio-selected {
  background-color: #5f33e2;
  transition: background-color 0.3s;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    background-color: transparent;
  }
  to {
    background-color: #5f33e2;
  }
}

.check-icon {
  transition: transform 0.3s;
  animation: bounce 0.3s;
}

@keyframes bounce {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
