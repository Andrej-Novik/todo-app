import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import UUID from "vue-uuid";

Vue.config.productionTip = false;

import "@/assets/styles/nullStyle.scss";

new Vue({
  router,
  store,
  UUID,
  render: h => h(App)
}).$mount("#app");
