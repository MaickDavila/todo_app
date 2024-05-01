<script setup lang="ts">
import summaryCoverPng from '@/assets/home/summary-cover.png';
import { computed } from 'vue';
import taskStore from '@/components/projects/store/task.store.ts';

const todayTasks = computed(() => taskStore.getTodayTasks());
const todayCompletedTasks = computed(() => taskStore.getTodayCompletedTasks());
</script>

<template>
  <section class="flex items-center justify-between w-full bg-primary opacity-90 rounded-3xl p-6 h-[118px] text-white">
    <div class="flex flex-col w-1/2 items-start justify-between h-full">
      <h3 class="text-xs font-light">Today</h3>
      <p class="text-lg">
        <b>{{ todayCompletedTasks.length }}/{{ todayTasks.length }} task</b>
      </p>
    </div>

    <div class="flex items-center justify-center w-1/2">
      <img :src="summaryCoverPng" alt="Summary Cover" class="w-36 md:w-40" />
    </div>
  </section>
</template>
