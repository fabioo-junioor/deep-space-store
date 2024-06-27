<script setup>
import { onMounted, reactive } from "vue";
import { useRouter } from 'vue-router';
import ProductCard from "../components/ProductCard.vue";

const router = useRouter();
const allProducts = reactive([
  { offer_code: "111", name: "Tenis", description: "Tenis bom", price: 400, img:'https://images.vexels.com/content/262751/preview/sneakers-color-stroke-80s-482a17.png' },
  { offer_code: "222", name: "Chinelo", description: "Chinelo com progo", price: 30, img:'https://cdn.b4c.inf.br/storage/fcwdistribuidora/1000/chinelo-havaianas-azul-naval-3940-1704828629.jpg' },
  { offer_code: "333", name: "Camiseta", description: "Camiseta cara", price: 200, img:'https://nerdstore.com.br/wp-content/uploads/2022/10/b2b12f0f778cc0a0b1356a8170006c90.jpg' },
]);

const buyProduct = (offer_code) => {
  router.push({name: 'checkout', params: {offer_code: offer_code}});

};
</script>

<template>
  <div id="home" class="d-flex flew-wrap justify-center ga-3 pa-4">
    <ProductCard
      v-for="i in allProducts" :key="i"
      :offer_code="i.offer_code"
      :name="i.name"
      :description="i.description"
      :price="i.price"
      :img="i.img"
      @btnBuyProduct="buyProduct" />
  </div>
</template>

<style scoped>
</style>
