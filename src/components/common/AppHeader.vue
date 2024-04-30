<script setup lang="ts">
import { computed } from 'vue';
import mainStore from '@/store/main.store.ts';
import AppLogo from '@/components/common/AppLogo.vue';

const getUserName = computed(() => mainStore.getUserName());
</script>

<template>
  <div class="flex items-end justify-between p-3 px-6 rounded-3xl bg-white">
    <div class="text-lg">
      <h1>
        Hello, <b>{{ getUserName }}</b>
      </h1>
    </div>

    <app-logo />
  </div>
</template>
