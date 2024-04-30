<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import projectStore from '@/components/projects/project.store.ts';
import { IProject } from '@/types/commonTypes.ts';
import AppModal from '@/components/common/AppModal.vue';
import AppButton from '@/components/common/AppButton.vue';

const form = ref({
  name: '',
  description: '',
} as IProject);

const isLoading = ref(false);
const txtName = ref<HTMLInputElement | null>(null);
const projectSelected = computed(() => projectStore.getProjectSelected());

const isOpenFormModal = computed({
  get: () => projectStore.getIsOpenFormModal(),
  set: (value) => projectStore.setIsOpenFormModal(value),
});

function clearForm() {
  form.value.name = '';
  form.value.description = '';
}

function isFormValid() {
  return form.value.name.trim();
}

function submitProject() {
  if (!isFormValid()) {
    alert('Please fill in the name field');
    return;
  }

  isLoading.value = true;

  setTimeout(() => {
    if (projectSelected.value) projectStore.updateProject(form.value);
    else projectStore.createProject(form.value);

    isLoading.value = false;
    isOpenFormModal.value = false;
  }, 700);
}

function onMountedEvent() {
  setTimeout(() => {
    txtName.value?.focus();
  }, 100);

  if (projectSelected.value) {
    form.value.id = projectSelected.value.id || 0;
    form.value.name = projectSelected.value.name;
    form.value.description = projectSelected.value.description || '';
  }
}

watch(isOpenFormModal, (value) => {
  if (value) {
    clearForm();
    onMountedEvent();
    return;
  }

  projectStore.setProjectSelected(null);
});
</script>

<template>
  <app-modal v-model="isOpenFormModal">
    <form class="flex flex-col gap-3" @submit.prevent>
      <div class="form-group">
        <label class="block text-gray-700 text-sm font-bold" for="name"> Name </label>
        <input
          v-model="form.name"
          class="app-input"
          id="name"
          type="text"
          placeholder="Name"
          ref="txtName"
          autocomplete="off"
        />
      </div>

      <div class="form-group">
        <label class="block text-gray-700 text-sm font-bold" for="description"> Description </label>
        <textarea
          v-model="form.description"
          class="app-input-textarea"
          id="description"
          placeholder="Description"
        ></textarea>
      </div>

      <div class="flex flex-col gap-2 items center justify-between">
        <app-button @click="submitProject" :loading="isLoading"
          >{{ !projectSelected ? 'Create' : 'Update' }} Project</app-button
        >
      </div>
    </form>
  </app-modal>
</template>
