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
  window.ga('set', 'page', `${window.location.host}${to.path}`);
  window.ga('send', 'pageview');
  next();
});

export default router;
