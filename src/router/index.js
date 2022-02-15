import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home-page/home-page.vue';
import LoginPage from '../views/login-page/login-page.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
