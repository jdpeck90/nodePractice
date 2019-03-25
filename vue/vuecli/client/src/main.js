import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
