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
