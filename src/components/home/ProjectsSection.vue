<script setup lang="ts">
import AppBadge from '@/components/common/AppBadge.vue';
import { EBadgeStates } from '@/types/commonTypes.ts';
import { computed } from 'vue';
import projectStore from '@/components/projects/store/project.store.ts';
import routerConfig from '@/router/router-config.ts';

const projectsList = computed(() => projectStore.getProjects());
</script>

<template>
  <section class="flex flex-col gap-3 w-full">
    <div class="section-title">
      <h2>Projects</h2>
      <app-badge :count="projectsList.length" :state="EBadgeStates.DANGER" />
    </div>

    <div class="w-full flex gap-3 overflow-x-auto overscroll-x-none py-2">
      <div
        class="todo-list-item"
        v-for="(todo, i) in projectsList"
        :key="i"
        @click="() => $router.push({ name: routerConfig.ProjectDetailPage.name, params: { id: todo.id } })"
      >
        <div class="text-xs text-gray-500 font-light">
          <h3>{{ todo.name }}</h3>
        </div>

        <div class="font-bold text-base py-3">
          <p>{{ todo.description || todo.name }}</p>
        </div>

        <div class="text-xs text-gray-500 font-light">
          <p>{{ todo.url }}</p>
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
