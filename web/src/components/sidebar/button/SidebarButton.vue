<script setup lang="ts">
defineProps<{
  txt: string;
}>();
</script>

<template>
  <button :class="$style.btn">{{ txt }}</button>
</template>

<style module lang="scss" scoped>
.btn {
  background: rgb(53, 255, 12);
  border: none;
  width: 92%;
  height: 2rem;
  color: rgb(0, 0, 0);
  margin: 0.1rem;
  border-radius: 5%;
  border-bottom: 0.25rem rgb(53, 255, 12);
  &:hover {
    background: lightgray;
    color: black;
    cursor: pointer;
  }
}
</style>
