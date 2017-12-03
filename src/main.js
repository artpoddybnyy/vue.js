// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/vuex-store';
import VueResource from 'vue-resource';
import VueValidator from 'vue-form-validator';
import VModal from 'vue-js-modal'
import VueAgile from 'vue-agile';
import VueTinySlider from 'vue-tiny-slider';


Vue.use(VueAgile);
Vue.use(VModal);
Vue.use(VueValidator);
Vue.use(VueResource);
Vue.use(VueTinySlider);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

