<script setup lang="ts">
import welcomeScreenPng from '@/assets/welcome/welcome-screen.png';
import AppButton from '@/components/common/AppButton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import routerConfig from '@/router/router-config.ts';
import AppLogo from '@/components/common/AppLogo.vue';
import mainStore from '@/store/main.store.ts';

const userName = ref('');
const router = useRouter();

function isValidForm() {
  return userName.value.trim().length > 0;
}

function goToHomePage() {
  if (!isValidForm()) {
    alert('Por favor, ingresa tu nombre');
    return;
  }

  router.push(routerConfig.HomePage);
  mainStore.setUserName(userName.value);
}
</script>

<template>
  <div class="app-container">
    <div class="flex flex-col gap-6 items-center justify-center h-full">
      <div class="flex flex-col gap-4 items-center justify-center">
        <img :src="welcomeScreenPng" alt="Welcome Screen" class="w-80" />
      </div>

      <app-logo class="scale-150" />

      <form class="flex flex-col gap-3 w-full items-center justify-center" @submit.prevent="goToHomePage">
        <div>
          <p class="text-center text-xs text-gray-500">Para comenzar, necesitamos tu nombre</p>
        </div>

        <input v-model="userName" type="text" placeholder="Ej. Jhon Doe" class="app-input" autofocus />
        <app-button> Iniciar sesión </app-button>
      </form>
    </div>
  </div>
</template>
