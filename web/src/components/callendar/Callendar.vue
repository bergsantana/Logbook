<script setup lang="ts">
import Day from "./Day.vue";
import { ref } from "vue";

const todaysFullDate = new Date();
let lastDayOfThisMonth = new Date(
  todaysFullDate.getFullYear(),
  todaysFullDate.getMonth() + 1,
  0
);

const daysInThisMonth = () => {
  let days = [];
  let lastDayInt: number = lastDayOfThisMonth.getDate();
  while (lastDayInt) {
    days.unshift(
      `${todaysFullDate.getFullYear()}/${
        todaysFullDate.getMonth() + 1
      }/${lastDayInt}`
    );
    lastDayInt--;
  }
  return days;
};

const dayArr = ref(daysInThisMonth());
</script>

<template>
  <div>
    callendar
    <div :class="$style.daysContainer">
      <Day v-for="(day, i) in dayArr" :key="i" :title="day" />
    </div>
  </div>
</template>

<style lang="scss" module scoped>
.daysContainer {
  gap: 1rem;
  display: grid;
}
</style>
