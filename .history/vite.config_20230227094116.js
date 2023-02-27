/*
 * @Description:
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-02-10 12:56:55
 * @LastEditors: tu
 * @LastEditTime: 2023-02-27 09:41:15
 * @FilePath: /chatGPT/vite.config.js
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite"; // 自动导入

// https://vitejs.dev/config/
export default defineConfig({
  // https://api.chatgpt.com/v1/request 跨域
  server: {
    proxy: {
      "/api": {
        target: "https://api.chatgpt.com/v1/request",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [
    vue(),
    autoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, /\.vue\?mpType/, // .vue
        /\.md$/, // .md  
      ],
      imports: ["vue", "vue-router"],
      dirs: ["./src/stores", "./src/utils"],
      dts: "./src/auto-imports.d.ts",
      eslintrc: {
        filepath: "./.eslintrc-auto-import.json",
        // rules: {
        //   "no-unused-vars": "off",
        // },
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
