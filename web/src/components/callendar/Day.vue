<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <div :class="$style.container">{{ props.title }}</div>
</template>

<style module lang="scss" scoped>
.container {
  height: 10rem;
  width: 10rem;
  font-family:monospace;
  background-color: rgb(99, 255, 125);
  color: rgb(0, 0, 0);
  border-radius: 10%;
  text-align: center;
}
</style>
