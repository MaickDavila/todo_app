<script setup lang="ts">
import AppBadge from '@/components/common/AppBadge.vue';
import { EBadgeStates, IProject } from '@/types/commonTypes.ts';
import { computed } from 'vue';
import projectStore from '@/components/projects/project.store.ts';

const projectsList = computed(() => projectStore.getProjects());

function setProject(project: IProject) {
  projectStore.setProjectSelected(project);
  projectStore.setIsOpenFormModal(true);
}
</script>

<template>
  <section class="flex flex-col gap-3 w-full pb-24">
    <div class="section-title">
      <h2>All Projects</h2>
      <app-badge :count="projectsList.length" :state="EBadgeStates.WARNING" />
    </div>

    <div class="w-full flex flex-col gap-3 h-auto">
      <div
        class="flex p-3 items-center justify-between rounded-2xl bg-white cursor-pointer hover:shadow transition duration-300 ease-in-out transform hover:-translate-y-1"
        v-for="(project, i) in projectsList"
        :key="i"
      >
        <div class="flex flex-col">
          <div class="font-bold text-base">
            <h3>{{ project.name }}</h3>
          </div>

          <div class="line-clamp-2 text-xs text-gray-500">
            <p>{{ project.description }}</p>
          </div>

          <div class="text-xs text-gray-500 font-light mt-3">
            <p>{{ project.url }}</p>
          </div>
        </div>

        <div class="flex flex-col items-end">
          <div class="flex items-center gap-3">
            <button class="app-icon-button" @click="setProject(project)">
              <i class="fas fa-edit"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
