import Vue from "vue";
import App from "./App.vue";
import Notifications from "vue-notification";

Vue.config.productionTip = false;

Vue.use(Notifications);

var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
