import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import axios from "axios";
import * as VueGoogleMaps from "vue2-google-maps";
import VueGeolocation from "vue-browser-geolocation";
import Vuelidate from "vuelidate";
import VueFuse from "vue-fuse";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import storeArticles from "./store/storeArticles";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

axios.defaults.baseURL = "https://mindmd-d0f2a.firebaseio.com";
// axios.defaults.headers.common['Authorization'] = 'hei'

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAU94J-87Sdoh4OtnwXmiVqJ_dtdmlEx9g",
    libraries: "places",
    region: "RO"
  }
});
Vue.use(VueFuse);
Vue.use(VueGeolocation);

new Vue({
  router,
  store,
  storeArticles,
  render: h => h(App)
}).$mount("#app");
