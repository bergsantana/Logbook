<script setup lang="ts">
import SidebarButton from "./button/SidebarButton.vue";
import { ref } from "vue";

const showSidebar = ref(false);
</script>

<template>
  <aside>
    <div :class="$style.wrapper">
      <div :class="$style.container" v-if="showSidebar">
        <div :class="[$style.btn, $style.closeBtn]">
          <SidebarButton txt="Close [X]" @click="showSidebar = false" />
        </div>
        <div :class="[$style.btn, $style.loginLogoutBtn]">
          <SidebarButton txt="Login/Logout" />
        </div>
        <div :class="$style.callendarBtn">
          <SidebarButton txt="Callendar" />
        </div>
        <div :class="$style.btn">
          <SidebarButton txt="Active periodization" />
        </div>

        <div :class="[$style.btn, $style.todayToDo]">
          <SidebarButton txt="Today's script" />
        </div>
      </div>
      <div :class="$style.containerHidden" v-else="showSidebar">
        <div>
          <SidebarButton txt="Open" @click="showSidebar = true" />
        </div>
      </div>
    </div>
  </aside>
</template>

<style module lang="scss" scoped>
.wrapper {
  transition: 300ms;
}

.container {
  //background-color: light rgb(222, 222, 222);
  display: flex;
  flex-direction: column;
  height: 58rem;
  border: solid 0.15rem rgb(255, 255, 255);
  transition: 200ms;
}

.containerHidden {
  display: flex;
  flex-direction: column;
  height: 58rem;
  width: 3rem;
  border: solid 0.05rem rgb(255, 255, 255);
  transition: 200ms;
}

aside {
  background-color: rgb(255, 255, 255);
  //height: 100%;
}

.callendarBtn {
  margin: 3.5rem 1.5rem 1.5rem 1.5rem;
}

.btn {
  margin: 1.5rem;
}

.closeBtn {
  margin-bottom: 0.5rem;
}

.loginLogoutBtn {
}

.todayToDo {
  margin: 25rem 1.5rem 1.5rem 1.5rem;
}
</style>
