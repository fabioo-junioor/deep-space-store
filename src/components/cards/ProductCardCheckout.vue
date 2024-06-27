<script setup>
import { useStore } from 'vuex';
const props = defineProps(['offer_code','name','description','price','img']);

const store = useStore();
</script>

<template>
  <div id="productCardCheckout" class="ma-2">
    <v-card class="border-md rounded-lg">
      <v-row class="d-flex">
        <v-col class="ma-1 me-auto d-flex align-center justify-center">
          <v-img  
            class="text-white"
            max-width="150"
            :src="store.getters.getDataProduct.img"
            cover></v-img>
        </v-col>
        <v-col class="ma-1 d-flex flex-column">
          <v-card-title class="pa-1 text-h6">Nome: {{store.getters.getDataProduct.name}}</v-card-title>
          <v-card-text size="1px" class="pa-1 text-justify text-subtitle-3">Descrição: {{store.getters.getDataProduct.description}}</v-card-text>
          <v-card-text class="pa-1 text-subtitle-1">Valor: R$ {{store.getters.getDataProduct.price}}</v-card-text>
        </v-col>
        <v-col class="ma-1 d-flex flex-row align-center">
          <v-card-text class="pa-1 text-center text-subtitle-1">Total: R$ 1000</v-card-text>
        </v-col>
      </v-row> 
    </v-card>
  </div>
</template>

<style scoped>
#productCardCheckout{

}
</style>
