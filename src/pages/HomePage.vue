<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import SummaryCard from '@/components/home/SummaryCard.vue';
import TodoSection from '@/components/home/TodoSection.vue';
import InProgressSection from '@/components/home/InProgressSection.vue';
</script>

<template>
  <div class="app-container">
    <app-header />

    <summary-card />
    <todo-section />
    <in-progress-section />
  </div>
</template>
