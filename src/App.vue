<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<style scoped>
#app {
  background-color: rgba(0, 0, 0, 0.1);
  
}
</style>
