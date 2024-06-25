<script setup>
import ProductCard from '../components/ProductCard.vue';

</script>

<template>
  <div id="home" class="d-flex flew-wrap justify-center ga-3 pa-4">
    <ProductCard
      v-for="i in 3" :key="i" />
  </div>
</template>

<style scoped>

</style>
