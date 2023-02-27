<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-02-10 12:56:55
 * @LastEditors: tu
 * @LastEditTime: 2023-02-22 10:01:40
 * @FilePath: /chatGPT/src/views/HomeView.vue
-->
<template>
  <div class="home">
    <btnAssembly @add="add" />
    <div>{{ num }}</div>

    <p>vuex</p>
    <div>{{ $store.state.count }}</div>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCounterStore } from "../store/counter";
import btnAssembly from "../components/btn-assembly.vue";
const counter = useCounterStore();
const count = computed(() => counter.count);
const num = ref(0);
const add = (e) => {
  num.value += e;
};
console.log("btnAssembly: ", 1111);

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
    if (obj[key] < arr.length / 2) {
      delete obj[key];
    }
  }
  return Object.keys(obj);
};
console.log("findNum: ", findNum([1, 2, 3, 2, 2, 2, 5, 4, 2]));
</script>
