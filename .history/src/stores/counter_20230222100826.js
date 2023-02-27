/*
 * @Description:
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-02-22 12:56:55
 * @LastEditors: tu
 * @LastEditTime: 2023-02-22 09:39:24
 * @FilePath: /测试/chatGPT/src/stores/counter.js
 */
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  console.log(555);
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
