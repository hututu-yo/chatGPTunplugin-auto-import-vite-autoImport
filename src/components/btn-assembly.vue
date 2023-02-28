<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-02-22 09:37:55
 * @LastEditors: tu
 * @LastEditTime: 2023-02-28 18:08:11
 * @FilePath: /chatGPT/src/components/btn-assembly.vue
-->
<template>
  <div class="btn">
    <div>{{ num }}</div>
    <input type="number" v-model="number" />
    <button @click="add">添加</button>
  </div>
</template>

<script setup>
const emit = defineEmits(["add"]);
const props = defineProps({
  num: {
    type: Number,
    default: 0,
  },
});
const { num } = toRef(props);

const number = ref(0);
const add = () => {
  emit("add", number.value);
};
</script>
<style scoped></style>
