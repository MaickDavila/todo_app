<script setup lang="ts">
import AppBadge from '@/components/common/AppBadge.vue';
import { EBadgeStates, IProject } from '@/types/commonTypes.ts';
import { computed, onMounted, ref } from 'vue';
import projectStore from '@/components/projects/project.store.ts';
import AppModal from '@/components/common/AppModal.vue';
import { useRouter } from 'vue-router';
import routerConfig from '@/router/router-config.ts';

const isDeleteModalOpen = ref(false);
const localProjectSelected = ref<IProject | null>(null);
const isDeletingLoading = ref(false);
const router = useRouter();

const projectsList = computed(() => projectStore.getProjects());

function setProject(project: IProject) {
  projectStore.setProjectSelected(project);
  projectStore.setIsOpenFormModal(true);
}

function deleteProject(project?: IProject | null) {
  if (!project) return;
  isDeletingLoading.value = true;

  setTimeout(() => {
    projectStore.deleteProject(project.id);
    isDeleteModalOpen.value = false;
    isDeletingLoading.value = false;
  }, 1000);
}

function goToProjectDetail(project: IProject) {
  router.push({
    name: routerConfig.ProjectDetailPage.name,
    params: { id: project.id },
  });
}

onMounted(() => {
  projectStore.setProjectSelected(null);
});
</script>

<template>
  <section class="flex flex-col gap-3 w-full pb-24">
    <div class="section-title">
      <h2>All Projects</h2>
      <app-badge :count="projectsList.length" :state="EBadgeStates.WARNING" />
    </div>

    <div class="w-full flex flex-col gap-3 h-auto">
      <div
        class="flex p-3 items-center justify-between rounded-2xl bg-white hover:shadow transition duration-300 ease-in-out transform hover:-translate-y-1"
        v-for="(project, i) in projectsList"
        :key="i"
      >
        <div class="flex flex-col gap-2 w-1/2">
          <button
            class="font-bold text-base capitalize flex items-center gap-3 hover:underline"
            @click="goToProjectDetail(project)"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <h3 class="text-left">{{ project.name }}</h3>
          </button>

          <div class="text-xs text-gray-500">
            <p class="truncate">{{ project.description }}</p>
          </div>

          <div class="text-xs text-gray-500 font-light mt-3">
            <p>{{ project.url }}</p>
          </div>
        </div>

        <div class="flex flex-col items-end w-1/2">
          <div class="flex items-center gap-3">
            <button
              class="app-icon-button-outline"
              @click="
                isDeleteModalOpen = true;
                localProjectSelected = project;
              "
            >
              <i class="fas fa-trash-alt"></i>
            </button>

            <button class="app-icon-button" @click="setProject(project)">
              <i class="fas fa-edit"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <app-modal v-model="isDeleteModalOpen">
    <div class="flex flex-col gap-6 pt-5">
      <div><p>¿Estas seguro de eliminar el proyecto?</p></div>
      <div class="flex justify-end gap-3">
        <button class="app-button-outline" @click="deleteProject(localProjectSelected)">
          <span v-if="isDeletingLoading">
            <i class="fas fa-spinner fa-spin"></i>
          </span>
          <span v-else>Eliminar</span>
        </button>
        <button class="app-button" @click="isDeleteModalOpen = false">Cancelar</button>
      </div>
    </div>
  </app-modal>
</template>
