<script setup lang="ts">
import { computed } from 'vue';
import projectStore from '@/components/projects/project.store.ts';
import { EBadgeStates } from '@/types/commonTypes.ts';
import AppBadge from '@/components/common/AppBadge.vue';
import AppProgress from '@/components/common/AppProgress.vue';
import taskStore from '@/components/projects/task.store.ts';

const projectSelected = computed(() => projectStore.getProjectSelected());
const getTasksByProject = computed(() => taskStore.getTasksByProjectId(projectSelected.value?.id || 0));
</script>

<template>
  <section v-if="projectSelected" class="flex flex-col gap-6">
    <div class="flex flex-col gap-3 w-full">
      <div class="section-title">
        <h2>{{ projectSelected.name }}</h2>
      </div>

      <div class="text-xs text-gray-500">
        {{ projectSelected.description }}
      </div>
    </div>
  </section>

  <section class="flex flex-col gap-3 w-full pb-24">
    <div class="section-title">
      <h2>All Tasks</h2>
      <app-badge :count="getTasksByProject.length" :state="EBadgeStates.PRIMARY" />
    </div>

    <div class="w-full flex flex-col gap-3 h-auto">
      <div
        class="flex p-3 items-center justify-between rounded-2xl bg-white"
        v-for="(todo, i) in getTasksByProject"
        :key="i"
      >
        <div class="flex flex-col">
          <div class="text-xs text-gray-500 font-light">
            <h3>{{ todo.title }}</h3>
          </div>

          <div class="font-bold text-base line-clamp-2">
            <p>{{ todo.description }}</p>
          </div>
        </div>

        <app-progress :percentage="todo.progress" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
