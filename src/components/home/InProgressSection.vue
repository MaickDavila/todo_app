<script setup lang="ts">
import AppBadge from '@/components/common/AppBadge.vue';
import { EBadgeStates } from '@/types/commonTypes.ts';
import AppProgress from '@/components/common/AppProgress.vue';

const inProgressTestList = [
  {
    id: 1,
    title: 'Redesign home screen',
    description: 'Redesign the home screen',
    dueDate: '2 days left',
    progress: 20,
  },
  {
    id: 2,
    title: 'Update profile page',
    description: 'Update the profile page',
    dueDate: '3 days left',
    progress: 40,
  },
  {
    id: 3,
    title: 'Add new feature',
    description: 'Add a new feature',
    dueDate: '4 days left',
    progress: 70,
  },
  {
    id: 4,
    title: 'Fix bugs',
    description: 'Fix all the bugs',
    dueDate: '5 days left',
    progress: 80,
  },
  {
    id: 5,
    title: 'Update documentation',
    description: 'Update the documentation',
    dueDate: '6 days left',
    progress: 100,
  },
];
</script>

<template>
  <section class="flex flex-col gap-3 w-full pb-24">
    <div class="section-title">
      <h2>In Progress</h2>
      <app-badge :count="5" :state="EBadgeStates.WARNING" />
    </div>

    <div class="w-full flex flex-col gap-3 h-auto">
      <div
        class="flex p-3 items-center justify-between rounded-2xl bg-white"
        v-for="(todo, i) in inProgressTestList"
        :key="i"
      >
        <div class="flex flex-col">
          <div class="text-xs text-gray-500 font-light">
            <h3>{{ todo.title }}</h3>
          </div>

          <div class="font-bold text-base line-clamp-2">
            <p>{{ todo.description }}</p>
          </div>

          <div class="text-xs text-gray-500 font-light mt-3">
            <p>{{ todo.dueDate }}</p>
          </div>
        </div>

        <app-progress :percentage="todo.progress" />
      </div>
    </div>
  </section>
</template>
