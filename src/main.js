import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueLoading from "vue-loading-overlay";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "node-snackbar/dist/snackbar.min.css";
import "vue-loading-overlay/dist/vue-loading.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueLoading, {
  canCancel: false,
  lockScroll: true,
  color: "#0D6EFD",
  opacity: 0.7,
});

app.mount("#app");
