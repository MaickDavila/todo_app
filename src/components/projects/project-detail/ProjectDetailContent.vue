<script setup lang="ts">
import { computed } from 'vue';
import projectStore from '@/components/projects/store/project.store.ts';
import TaskList from '@/components/projects/project-detail/TaskList.vue';
import AppProgress from '@/components/common/AppProgress.vue';
import taskStore from '@/components/projects/store/task.store.ts';

const projectSelected = computed(() => projectStore.getProjectSelected());
const getTasksByProject = computed(() => taskStore.getTasksByProjectId(projectSelected.value?.id || 0));

const getProjectPercentage = () => {
  const total = getTasksByProject.value.length;
  const completed = getTasksByProject.value.filter((task) => task.progress === 100).length;
  return Math.round((completed / total) * 100);
};
</script>

<template>
  <section v-if="projectSelected" class="flex flex-col gap-6">
    <button>
      <router-link to="/projects" class="flex items-center gap-3">
        <i class="fa-solid fa-arrow-left"></i>
        <span class="text-xs text-gray-500">Back to projects</span>
      </router-link>
    </button>

    <div class="flex flex-row items-start justify-between gap-3 w-full p-3 bg-white rounded-2xl">
      <div class="flex flex-col">
        <div class="flex flex-col gap-3">
          <div class="section-title">
            <h2>{{ projectSelected.name }}</h2>
          </div>
        </div>

        <div class="text-xs text-gray-500">
          {{ projectSelected.description }}
        </div>
      </div>

      <app-progress :percentage="getProjectPercentage()" />
    </div>
  </section>

  <task-list />
</template>

<style scoped></style>
