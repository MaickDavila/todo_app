<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppMenuBar from '@/components/common/AppMenuBar.vue';
import { useRouter } from 'vue-router';
import projectStore from '@/components/projects/store/project.store.ts';
import routerConfig from '@/router/router-config.ts';
import { IProject } from '@/types/commonTypes.ts';
import ProjectDetailContent from '@/components/projects/project-detail/ProjectDetailContent.vue';
import PlusFloatingButton from '@/components/projects/components/PlusFloatingButton.vue';
import taskStore from '@/components/projects/store/task.store.ts';
import TaskForm from '@/components/projects/project-detail/TaskForm.vue';

const router = useRouter();

function loadingPage() {
  const params = router.currentRoute.value.params;
  const id = params.id as string | undefined;

  if (!id) {
    if (!router.currentRoute.value.name) {
      router.push(routerConfig.HomePage);
      return;
    }

    const name = (params.previus_page_name as string) || 'Home';
    router.push({ name });
    return;
  }

  if (!projectStore.existProject(Number(id))) {
    router.push(routerConfig.ProjectsPage);
    return;
  }

  projectStore.setProjectSelected(projectStore.getProject(Number(id)) as IProject);
}

loadingPage();
</script>

<template>
  <div class="app-container">
    <app-header />
    <project-detail-content />

    <plus-floating-button @click="taskStore.setIsOpenFormModal(true)" />
    <task-form />
    <app-menu-bar />
  </div>
</template>
