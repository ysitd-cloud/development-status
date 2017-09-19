import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', name: 'home', component: () => import('./pages/home/Page.vue') },
    { path: '/sla', name: 'sla', component: () => import('./pages/sla/Page.vue') },
  ],
});
