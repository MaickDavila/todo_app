<script setup lang="ts">
import { computed, ref } from 'vue';
import projectStore from '@/components/projects/project.store.ts';
import { IProject } from '@/types/commonTypes.ts';
import AppModal from '@/components/common/AppModal.vue';

const name = ref('');
const description = ref('');
const isOpenFormModal = computed({
  get: () => projectStore.getIsOpenFormModal(),
  set: (value) => projectStore.setIsOpenFormModal(value),
});

const createProject = () => {
  projectStore.createProject({
    name: name.value,
    description: description.value,
  } as IProject);
};
</script>

<template>
  <app-modal v-model="isOpenFormModal">
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Name </label>
        <input
          v-model="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description"> Description </label>
        <textarea
          v-model="description"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Description"
        ></textarea>
      </div>
      <div class="flex items center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="createProject"
        >
          Create
        </button>
      </div>
    </form>
  </app-modal>
</template>

<style scoped></style>
