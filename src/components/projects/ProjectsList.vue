<script setup lang="ts">
import AppBadge from '@/components/common/AppBadge.vue';
import { EBadgeStates } from '@/types/commonTypes.ts';
import { computed } from 'vue';
import projectStore from '@/components/projects/project.store.ts';

const projectsList = computed(() => projectStore.getProjects());
</script>

<template>
  <section class="flex flex-col gap-3 w-full pb-24">
    <div class="section-title">
      <h2>All Projects</h2>
      <app-badge :count="projectsList.length" :state="EBadgeStates.WARNING" />
    </div>

    <div class="w-full flex flex-col gap-3 h-auto">
      <div
        class="flex p-3 items-center justify-between rounded-2xl bg-white"
        v-for="(todo, i) in projectsList"
        :key="i"
      >
        <div class="flex flex-col">
          <div class="text-xs text-gray-500 font-light">
            <h3>{{ todo.name }}</h3>
          </div>

          <div class="font-bold text-base line-clamp-2">
            <p>{{ todo.description }}</p>
          </div>

          <div class="text-xs text-gray-500 font-light mt-3">
            <p>{{ todo.url }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
