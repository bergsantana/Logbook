<script setup lang="ts">
import Callendar from "./components/callendar/Callendar.vue";
import Sidebar from "./components/sidebar/Sidebar.vue";
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div :class="$style.app">
    <Sidebar />
    <Callendar />
  </div>
</template>

<style module lang="scss" scoped>
.app {
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow-y: auto;
}
</style>
