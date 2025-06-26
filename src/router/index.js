import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../views/HomePage.vue"
import About from '@/pages/About.vue';
import Services from '@/pages/Services.vue';
import Contact from '@/pages/Contact.vue';
import Login from '@/pages/Login.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: About },
  { path: '/scenarios', component: Services },
  { path: '/pricing', component: Contact },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;