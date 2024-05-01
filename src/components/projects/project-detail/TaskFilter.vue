<script setup lang="ts">
import { EBadgeStates } from '@/types/commonTypes.ts';
import AppBadge from '@/components/common/AppBadge.vue';
import { computed } from 'vue';
import taskStore from '@/components/projects/store/task.store.ts';
import projectStore from '@/components/projects/store/project.store.ts';

const projectSelected = computed(() => projectStore.getProjectSelected());
const getTasksByProject = computed(() => taskStore.getTasksByProjectId(projectSelected.value?.id || 0));
const getSuccessTasks = computed(() => getTasksByProject.value.filter((todo) => todo.isCompleted));
const getPendingTasks = computed(() => getTasksByProject.value.filter((todo) => !todo.isCompleted));
</script>

<template>
  <div class="filter-container">
    <div class="item" @click="$emit('completed')">
      <app-badge :count="getSuccessTasks.length" :state="EBadgeStates.SUCCESS" />
      <p class="text-xs text-gray-500">Completed</p>
    </div>

    <div class="item" @click="$emit('pending')">
      <app-badge :count="getPendingTasks.length" :state="EBadgeStates.DANGER" />
      <p class="text-xs text-gray-500">Pending</p>
    </div>

    <div class="item" @click="$emit('all')">
      <app-badge :count="getTasksByProject.length" :state="EBadgeStates.PRIMARY" />
      <p class="text-xs text-gray-500">All</p>
    </div>
  </div>
</template>

<style>
.filter-container {
  @apply flex gap-3;
}

.filter-container .item {
  @apply flex items-center gap-3 shadow p-2 rounded-2xl cursor-pointer;
}
</style>
