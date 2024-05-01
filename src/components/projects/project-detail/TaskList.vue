<script setup lang="ts">
import { EBadgeStates, ITask } from '@/types/commonTypes.ts';
import AppBadge from '@/components/common/AppBadge.vue';
import { computed, ref } from 'vue';
import taskStore from '@/components/projects/store/task.store.ts';
import projectStore from '@/components/projects/store/project.store.ts';
import AppRadio from '@/components/common/AppRadio.vue';
import TaskFilter from '@/components/projects/project-detail/TaskFilter.vue';
import AppModal from '@/components/common/AppModal.vue';

const filter = ref<string>('all');
const isDeleteModalOpen = ref(false);
const isDeletingLoading = ref(false);
const localTaskSelected = ref<ITask | null>(null);
const projectSelected = computed(() => projectStore.getProjectSelected());
const getTasksByProject = computed(() => {
  const taskList = taskStore.getTasksByProjectId(projectSelected.value?.id || 0);
  if (filter.value === 'all') return taskList;

  return filter.value === 'completed'
    ? taskList.filter((todo) => todo.isCompleted)
    : filter.value === 'pending'
      ? taskList.filter((todo) => !todo.isCompleted)
      : taskList;
});

function changeStatus(status: boolean, todo: ITask) {
  todo.isCompleted = status;
  todo.progress = status ? 100 : 0;
  todo.completed_at = status ? new Date().toLocaleString() : null;
  taskStore.updateTask(todo);
}

function deleteTask(task: ITask | null) {
  if (!task) return;

  isDeletingLoading.value = true;

  setTimeout(() => {
    taskStore.deleteTask(task.id);
    isDeleteModalOpen.value = false;
    isDeletingLoading.value = false;
  }, 1000);
}

function setTask(task: ITask) {
  taskStore.setTaskSelected(task);
  taskStore.setIsOpenFormModal(true);
}
</script>

<template>
  <section class="flex flex-col gap-3 w-full pb-24">
    <div class="flex items-center justify-between flex-wrap">
      <div class="section-title">
        <h2>All Tasks</h2>
        <app-badge :count="getTasksByProject.length" :state="EBadgeStates.PRIMARY" />
      </div>

      <task-filter @completed="filter = 'completed'" @pending="filter = 'pending'" @all="filter = 'all'" />
    </div>

    <div class="w-full flex flex-col gap-3 h-auto">
      <div class="main-card" v-for="(task, i) in getTasksByProject" :key="i">
        <div class="flex flex-col w-1/3">
          <div class="flex flex-col">
            <div class="text-base font-bold">
              <h3>{{ task.title }}</h3>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <div class="text-xs text-gray-500">
              {{ task.created_at }}
            </div>
          </div>
        </div>

        <app-radio v-model="task.isCompleted" @change="changeStatus($event, task)" />
        <div class="flex gap-2">
          <button
            class="app-icon-button-outline"
            @click="
              isDeleteModalOpen = true;
              localTaskSelected = task;
            "
          >
            <i class="fas fa-trash-alt"></i>
          </button>

          <button class="app-icon-button" @click="setTask(task)">
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </div>
    </div>
  </section>

  <app-modal v-model="isDeleteModalOpen">
    <div class="flex flex-col gap-6 pt-5">
      <div><p>¿Estas seguro de eliminar la tarea?</p></div>
      <div class="flex justify-end gap-3">
        <button class="app-button-outline" @click="deleteTask(localTaskSelected)">
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
