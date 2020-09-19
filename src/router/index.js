import {
  createRouter,
  createWebHistory
  // createWebHashHistory
} from 'vue-router';
import Landing from '../views/landing.vue';

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

// Note: Don't use 'history' mode. @blackchestnut
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
