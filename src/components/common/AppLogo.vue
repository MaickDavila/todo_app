<script setup lang="ts">
import { useRouter } from 'vue-router';
import routerConfig from '@/router/router-config.ts';

const props = defineProps({
  preventDefault: Boolean,
});

const router = useRouter();

const goToHome = () => {
  if (props.preventDefault) {
    return;
  }

  router.push(routerConfig.HomePage);
};
</script>

<template>
  <button @click="goToHome">
    <div class="text-primary font-agbalumo flex items-end justify-center">
      <p>Organiz</p>
      <p class="text-4xl">App</p>
    </div>
  </button>
</template>
