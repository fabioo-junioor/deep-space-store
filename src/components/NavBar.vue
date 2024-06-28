<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goHome = (offer_code) => {
  router.push({name: 'home'});

};
</script>

<template>
  <div id="navBar">
    <v-toolbar color="red" :elevation="2">
      <v-btn
        class="ma-1"
        @click="goHome">
        <i class='bx bx-home text-h4'></i>
      </v-btn>
      <v-toolbar-title class="text-center">Deep Space Store</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<style scoped>

</style>