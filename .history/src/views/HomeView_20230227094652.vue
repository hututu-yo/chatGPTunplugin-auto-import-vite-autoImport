<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-02-10 12:56:55
 * @LastEditors: tu
 * @LastEditTime: 2023-02-27 09:46:33
 * @FilePath: /chatGPT/src/views/HomeView.vue
-->
<template>
  <div class="home">
    <div>emit,prop</div>
    <!-- <btnAssembly @add="add" :num="num" /> -->
    <!-- <div>{{ num }}</div> -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>vuex</p>
    <div>{{ count }}</div>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import btnAssembly from "../components/btn-assembly.vue";
const counter = useCounterStore();
const count = computed(() => counter.count);
let num = ref(0);
const add = (e) => {
  num.value += e;
};
const increment = () => {
  counter.increment();
};

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
  return;
};
console.log("findNum: ", findNum([1, 2, 3, 2, 2, 2, 5, 4, 2]));
</script>
