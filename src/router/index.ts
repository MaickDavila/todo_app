import { createRouter, createWebHistory } from 'vue-router';
import routes from './router-config';

const router = createRouter({
  history: createWebHistory(),
  routes: Object.values(routes),
});

export default router;
