import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/styles.scss";
import "@/quasar";
import "@/ndc";
import "@/extension-methods";
import "@/controls";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
