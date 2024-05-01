<script setup lang="ts">
import AppBadge from '@/components/common/AppBadge.vue';
import { EBadgeStates } from '@/types/commonTypes.ts';
import AppProgress from '@/components/common/AppProgress.vue';
import { computed } from 'vue';
import taskStore from '@/components/projects/store/task.store.ts';

const allPendingTasks = computed(() => taskStore.getAllPendingTasks());
</script>

<template>
  <section class="flex flex-col gap-3 w-full pb-24">
    <div class="section-title">
      <h2>Pending Tasks</h2>
      <app-badge :count="allPendingTasks.length" :state="EBadgeStates.WARNING" />
    </div>

    <div class="w-full flex flex-col gap-3 h-auto">
      <div class="main-card" v-for="(todo, i) in allPendingTasks" :key="i">
        <div class="flex flex-col w-1/3">
          <div class="flex flex-col">
            <div class="text-base font-bold">
              <h3>{{ todo.title }}</h3>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <div class="text-xs text-gray-500">
              {{ todo.created_at }}
            </div>
          </div>
        </div>

        <app-progress :percentage="todo.progress" />
      </div>
    </div>
  </section>
</template>
