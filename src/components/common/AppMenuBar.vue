<script setup lang="ts">
import HomeIcon from '@/components/icons/HomeIcon.vue';
import GroupIcon from '@/components/icons/GroupIcon.vue';
import ClockIcon from '@/components/icons/ClockIcon.vue';
import ProfileIcon from '@/components/icons/ProfileIcon.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

function isActiveRoute(value: string): boolean {
  return value === route.path;
}
</script>

<template>
  <div class="app-menu-bar">
    <div class="app-menu-bar__container bg-primary_subtle">
      <div class="app-menu-bar__menu">
        <router-link to="/home" :class="{ selected: isActiveRoute('/home') }">
          <home-icon />
        </router-link>
        <router-link to="/projects" :class="{ selected: isActiveRoute('/projects') }">
          <group-icon />
        </router-link>
        <router-link to="" :class="{ selected: isActiveRoute('/pending') }">
          <clock-icon />
        </router-link>
        <router-link to="" :class="{ selected: isActiveRoute('/profile') }">
          <profile-icon />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-menu-bar {
  @apply fixed bottom-0 left-0 w-full px-6 pb-3;
}

.app-menu-bar__container {
  @apply container mx-auto rounded-2xl;
}

.app-menu-bar__menu {
  @apply flex justify-between p-4;
}

.app-menu-bar__menu a {
  @apply text-primary opacity-50;
}

.app-menu-bar__menu .selected {
  @apply opacity-100;
}
</style>
