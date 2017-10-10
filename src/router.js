import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: () => import('./pages/home/Page.vue') },
    { path: '/sla', name: 'sla', component: () => import('./pages/sla/Page.vue') },
  ],
});

router.beforeEach((to, form, next) => {
  window.gtag('config', 'UA-103662489-3', {
    page_path: to.path,
  });
  next();
});

export default router;
