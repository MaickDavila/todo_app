<script setup lang="ts">
import AppBadge from '@/components/common/AppBadge.vue';
import { EBadgeStates } from '@/types/commonTypes.ts';

const testList = [
  {
    id: 1,
    title: 'SuperApp',
    description: 'Redesign the home screen',
    dueDate: '12th August 2021',
  },
  {
    id: 2,
    title: 'Internal',
    description: 'Update the profile page',
    dueDate: '15th August 2021',
  },
  {
    id: 3,
    title: 'New feature',
    description: 'Add a new feature',
    dueDate: '20th August 2021',
  },
  {
    id: 4,
    title: 'Fix bugs',
    description: 'Fix all the bugs',
    dueDate: '25th August 2021',
  },
  {
    id: 5,
    title: 'Update documentation',
    description: 'Update the documentation',
    dueDate: '30th August 2021',
  },
];
</script>

<template>
  <section class="flex flex-col gap-3 w-full">
    <div class="section-title">
      <h2>Todo List</h2>
      <app-badge :count="20" :state="EBadgeStates.DANGER" />
    </div>

    <div class="w-full flex gap-3 overflow-x-auto overscroll-x-none py-2 px-3">
      <div class="todo-list-item" v-for="(todo, i) in testList" :key="i">
        <div class="text-xs text-gray-500 font-light">
          <h3>{{ todo.title }}</h3>
        </div>

        <div class="font-bold text-base py-3 line-clamp-2 overflow-hidden">
          <p>{{ todo.description }}n</p>
        </div>

        <div class="text-xs text-gray-500 font-light">
          <p>{{ todo.dueDate }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.todo-list-item {
  @apply bg-slate-100 rounded-3xl min-w-[152px] p-4 flex flex-col items-start justify-between shadow-sm cursor-pointer
  hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-slate-200;
}

::-webkit-scrollbar {
  display: none;
}
</style>
