import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';

window.ga('create', 'UA-103662489-1', 'auto');

Vue.use(Vuetify);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),
});

