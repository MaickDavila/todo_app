<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import projectStore from '@/components/projects/project.store.ts';
import { IProject } from '@/types/commonTypes.ts';
import AppModal from '@/components/common/AppModal.vue';
import AppButton from '@/components/common/AppButton.vue';

const name = ref('');
const description = ref('');
const isLoading = ref(false);
const txtName = ref<HTMLInputElement | null>(null);

const isOpenFormModal = computed({
  get: () => projectStore.getIsOpenFormModal(),
  set: (value) => projectStore.setIsOpenFormModal(value),
});

function clearForm() {
  name.value = '';
  description.value = '';
}

function isFormValid() {
  return name.value.trim() !== '' && description.value.trim() !== '';
}

function createProject() {
  if (!isFormValid()) {
    alert('Please fill in all fields.');
    return;
  }

  isLoading.value = true;

  setTimeout(() => {
    projectStore.createProject({
      name: name.value,
      description: description.value,
    } as IProject);

    isLoading.value = false;
    isOpenFormModal.value = false;
    clearForm();
  }, 700);
}

watch(isOpenFormModal, (value) => {
  if (value) {
    setTimeout(() => {
      txtName.value?.focus();
    }, 100);
    clearForm();
  }
});
</script>

<template>
  <app-modal v-model="isOpenFormModal">
    <form class="flex flex-col gap-3" @submit.prevent="createProject">
      <div class="form-group">
        <label class="block text-gray-700 text-sm font-bold" for="name"> Name </label>
        <input
          v-model="name"
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
          v-model="description"
          class="app-input-textarea"
          id="description"
          placeholder="Description"
        ></textarea>
      </div>

      <div class="flex items center justify-between">
        <app-button :loading="isLoading">Create Project</app-button>
      </div>
    </form>
  </app-modal>
</template>
