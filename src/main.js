import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/global.module.scss";
import "./assets/css/output.css";

createApp(App).use(router).mount("#app");
