<script setup>
const props = defineProps(['offer_code','name','price','img']);
const emit = defineEmits(['btnBuyProduct']);

</script>

<template>
  <div id="productCardHome">
    <v-card class="d-flex flex-column" width="350">
      <v-img
        class="text-white border-sm"
        height="300"
        :src="props.img"
        cover>
      </v-img>
      <div
        class="productInfo pa-4 d-flex flex-column align-center justify-center"
      >
        <v-card-title class="pa-1">{{props.name}}</v-card-title>
        <v-card-text class="pa-1">R$ {{props.price}}</v-card-text>
      </div>

      <v-card-actions class="pa-0" height="100px">
        <v-btn
          size="x-large"
          width="100%"
          class="bg-red rounded-0"
          color="white"
          text="Comprar"
          @click="emit('btnBuyProduct', props.offer_code)"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>

</style>