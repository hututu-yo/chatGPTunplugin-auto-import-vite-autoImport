<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-02-10 12:56:55
 * @LastEditors: tu
 * @LastEditTime: 2023-02-22 09:45:38
 * @FilePath: /chatGPT/src/views/HomeView.vue
-->
<template>
  <div class="home">
    <!-- <btnAssembly @add="add" /> -->
    <div>{{ num }}</div>
  </div>
</template>

<script setup>
import btnAssembly from "@/components/btn-assembly.vue";
import { ref } from "vue";
console.log("btnAssembly: ", btnAssembly);
const num = ref(0);
const add = (e) => {
  console.log("e: ", e);
};
</script>
<style lang="less" scoped>
.home {
}
</style>
