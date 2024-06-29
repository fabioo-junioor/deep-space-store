<script setup>
import { NavBar } from "./components";
</script>

<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<style scoped>
#app {
  height: 100vh;
  
}
</style>
