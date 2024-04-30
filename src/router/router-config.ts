import WelcomePage from '@/pages/WelcomePage.vue';
import HomePage from '@/pages/HomePage.vue';
import ProjectsPage from '@/pages/ProjectsPage.vue';

const routes = {
  WelcomePage: {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage,
    meta: {
      transition: 'fade',
    },
  },
  HomePage: {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    meta: {
      transition: 'bounce',
    },
  },
  ProjectsPage: {
    path: '/projects',
    name: 'ProjectsPage',
    component: ProjectsPage,
    meta: {
      transition: 'slide-right',
    },
  },
};

export default routes;
