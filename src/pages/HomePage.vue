<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import SummaryCard from '@/components/home/SummaryCard.vue';
import TodoSection from '@/components/home/TodoSection.vue';
import InProgressSection from '@/components/home/InProgressSection.vue';
import AppMenuBar from '@/components/common/AppMenuBar.vue';
</script>

<template>
  <div class="app-container">
    <app-header />

    <summary-card />
    <todo-section />
    <in-progress-section />

    <app-menu-bar />
  </div>
</template>
