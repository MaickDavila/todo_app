<script setup lang="ts">
import AppMenuBar from '@/components/common/AppMenuBar.vue';
import AppHeader from '@/components/common/AppHeader.vue';
import ProjectsList from '@/components/projects/ProjectsList.vue';
import PlusFloatingButton from '@/components/projects/components/PlusFloatingButton.vue';
import ProjectForm from '@/components/projects/ProjectForm.vue';
import projectStore from '@/components/projects/project.store.ts';

const onClickPlusButton = () => {
  projectStore.setIsOpenFormModal(true);
};
</script>

<template>
  <div class="app-container">
    <app-header />
    <projects-list />
    <app-menu-bar />
    <plus-floating-button @click="onClickPlusButton" />

    <project-form />
  </div>
</template>
