<script setup lang="ts">
import AppModal from '@/components/common/AppModal.vue';
import { computed, ref, watch } from 'vue';
import taskStore from '@/components/projects/store/task.store.ts';
import AppButton from '@/components/common/AppButton.vue';
import { ITask } from '@/types/commonTypes.ts';
import projectStore from '@/components/projects/store/project.store.ts';

const isLoading = ref(false);
const txtTitleRef = ref<HTMLInputElement | null>(null);
const projectSelected = computed(() => projectStore.getProjectSelected());

const form = ref({
  title: '',
  projectId: projectSelected.value?.id,
} as ITask);

const isOpenTaskModal = computed({
  get: () => taskStore.getIsOpenFormModal(),
  set: (value) => taskStore.setIsOpenFormModal(value),
});

const taskSelected = computed(() => taskStore.getTaskSelected());

function isValidForm() {
  return form.value.title.trim();
}

function clearForm() {
  form.value.title = '';
}

function submitTask() {
  if (!isValidForm()) {
    alert('Please fill in the name field');
    return;
  }

  isLoading.value = true;

  setTimeout(() => {
    if (taskSelected.value) taskStore.updateTask(form.value);
    else taskStore.createTask(form.value);

    isLoading.value = false;
    isOpenTaskModal.value = false;
  }, 700);
}

function onMountedEvent() {
  setTimeout(() => {
    if (!txtTitleRef.value) return;

    txtTitleRef.value?.focus();
  }, 100);

  if (taskSelected.value) {
    form.value.id = taskSelected.value.id || 0;
    form.value.title = taskSelected.value?.title;
    form.value.created_at = taskSelected.value?.created_at || '';
    form.value.projectId = taskSelected.value?.projectId;
  }
}

watch(
  () => isOpenTaskModal.value,
  (value) => {
    if (!value) {
      taskStore.setTaskSelected(null);
      return;
    }
    clearForm();
    onMountedEvent();
  },
);
</script>

<template>
  <app-modal v-model="isOpenTaskModal">
    <form class="flex flex-col gap-3" @submit.prevent>
      <div class="form-group">
        <label class="block text-gray-700 text-sm font-bold" for="name"> Title </label>
        <input
          v-model="form.title"
          class="app-input"
          id="name"
          type="text"
          placeholder="Titulo"
          ref="txtTitleRef"
          autocomplete="off"
        />
      </div>

      <div class="flex flex-col gap-2 items center justify-between">
        <app-button @click="submitTask" :loading="isLoading">{{ !taskSelected ? 'Create' : 'Update' }} Task</app-button>
      </div>
    </form>
  </app-modal>
</template>
