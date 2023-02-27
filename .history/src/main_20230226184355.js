/*
 * @Description:
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-02-10 12:56:55
 * @LastEditors: tu
 * @LastEditTime: 2023-02-26 18:43:45
 * @FilePath: /chatGPT/src/main.js
 */
// import { createApp } from 'vue'
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
console.log("createApp: ", createApp);

app.use(createPinia());
app.use(router);

app.mount("#app");
