import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/HomePage.vue"
import About from "../views/AboutPage.vue"
import Scenarios from '../views/Scenarios.vue';
import Pricing from '../views/PricingPage.vue';
import Layout from '../components/Layout.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'about',
        component: About
      },
      {
        path: 'scenarios',
        component: Scenarios
      },
      {
        path: 'pricing',
        component: Pricing
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;