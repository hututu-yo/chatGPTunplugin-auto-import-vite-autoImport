<template>
  <div class="btn">
    <input type="number" v-model="number" />
    <button @click="add">添加</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["add"]);

const number = ref(0);
const add = () => {
  emit("add", number.value);
};
</script>
<style scoped></style>
