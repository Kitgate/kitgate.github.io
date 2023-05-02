import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";
import TextBoxVue from "./components/TextBox.vue";

const app = createApp(App);

app.component("TextBox", TextBoxVue)

app.use(router);

app.mount("#app");
