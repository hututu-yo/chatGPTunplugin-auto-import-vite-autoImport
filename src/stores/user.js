/*
 * @Description:
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-02-22 12:56:55
 * @LastEditors: tu
 * @LastEditTime: 2023-02-22 09:39:24
 * @FilePath: /测试/chatGPT/src/stores/counter.js
 */
import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const token = ref("");
  const setToken = (newToken) => {
    token.value = newToken;
  };

  return { token, setToken };
});
