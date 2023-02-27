<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-02-10 12:56:55
 * @LastEditors: tu
 * @LastEditTime: 2023-02-22 10:20:56
 * @FilePath: /chatGPT/src/views/HomeView.vue
-->
<template>
  <div class="home">
    <div>emit,prop</div>
    <btnAssembly @add="add" :num="num" />
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
import { ref, computed } from "vue";
import btnAssembly from "../components/btn-assembly.vue";
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();
console.log("counter: ", counter);
const count = computed(() => counter.count);
const num = ref(0);
const add = (e) => {
  num.value += e;
};
console.log("btnAssembly: ", 1111);
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
      return obj[key]
    }
  }
  return  ;
};
console.log("findNum: ", findNum([1, 2, 3, 2, 2, 2, 5, 4, 2]));
</script>
