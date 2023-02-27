<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-02-10 12:56:55
 * @LastEditors: tu
 * @LastEditTime: 2023-02-22 09:52:23
 * @FilePath: /chatGPT/src/views/HomeView.vue
-->
<template>
  <div class="home">
    <btnAssembly @add="add" />
    <div>{{ num }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import btnAssembly from "../components/btn-assembly.vue";
const num = ref(0);
const add = (e) => {
  console.log("e: ", e);
};
console.log("btnAssembly: ", 1111);
// 查找数组中数字超过数组一半长度的数字
const findNum = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] > arr.length / 2) {
      return key;
    }
  }
  return ;
};
console.log("findNum: ", findNum([1, 2, 3, 2, 2, 2, 5, 4, 2]));


</script>
<style lang="" scoped>
.home {
}
</style>
