<script setup>
</script>

<template>
  <div id="productCard">
    <v-card class="d-flex flex-column" max-width="400">
      <v-img
        class="text-white"
        height="200"
        src="https://images.vexels.com/content/262751/preview/sneakers-color-stroke-80s-482a17.png"
        cover
      >
      </v-img>
      <div
        class="productInfo pa-4 d-flex flex-column align-center justify-center"
      >
        <v-card-title class="pa-1">Top 10 Australian beaches</v-card-title>
        <v-card-text class="pa-1"
          >Whitsunday Island, Whitsunday Islands</v-card-text
        >
        <v-card-text class="pa-1">R$ 100</v-card-text>
      </div>

      <v-card-actions class="pa-0" height="100px">
        <v-btn
          size="x-large"
          width="100%"
          class="bg-red rounded-0"
          color="white"
          text="Comprar"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>

</style>
