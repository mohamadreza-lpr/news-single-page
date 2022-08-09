import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import moment from 'moment-timezone'
import VueClock from '@dangvanthanh/vue-clock';

Vue.use(VueClock);
Vue.use(moment)
Vue.use(require('vue-jalali-moment'));
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

new Vue({
      render: (h) => h(App),
}).$mount("#app");
