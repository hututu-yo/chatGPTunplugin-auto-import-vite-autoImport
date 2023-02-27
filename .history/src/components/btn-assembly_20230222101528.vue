<template>
  <div class="btn">
    <div>{{ num }}</div>
    <input type="number" v-model="number" />
    <button @click="add">添加</button>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, toRef } from "vue";
const emit = defineEmits(["add"]);
const props = defineProps({
  num: {
    type: Number,
    default: 0,
  },
});
const num = toRef(props);
console.log("num: ", num);

const number = ref(0);
const add = () => {
  emit("add", number.value);
};
</script>
<style scoped></style>
