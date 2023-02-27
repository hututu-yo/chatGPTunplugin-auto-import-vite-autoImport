/*
 * @Description:
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-02-10 12:56:55
 * @LastEditors: tu
 * @LastEditTime: 2023-02-27 09:54:54
 * @FilePath: /chatGPT/src/main.js
 */
// import { createApp } from 'vue'
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

console.log("computed: ", ref);
import "./assets/main.css";

const app = createApp(App);
console.log("createApp: ", createApp);

app.use(createPinia());
app.use(router);

app.mount("#app");
