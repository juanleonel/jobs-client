import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../pages/layouts/DefaultLayout.vue";
import Login from "../pages/Login.vue";
import AddJob from "../pages/AddJob.vue";

const routes = [
  {
    path: '/',
    component: DefaultLayout, // Usa el layout para envolver las páginas
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../App.vue') // Página principal
      },
      {
        path: '/add-job',
        name: 'AddJob',
        component: AddJob
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router