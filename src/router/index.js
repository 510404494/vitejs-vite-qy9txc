import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/',
    name: '',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/components/layout.vue'),
    meta: {
      title: '首页',
    },
    children: [{
      //默认 显示home组件
      path: "home",
      name: "Home",
      component: () =>
        import(/* webpackChunkName: "Home" */ '@/views/home/index.vue'),
    }],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
