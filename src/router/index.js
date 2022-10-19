import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "Home" */ '@/views/home/index.vue'),
    meta: {
      title: '首页',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
