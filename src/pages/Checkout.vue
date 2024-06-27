<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { getProduct } from '../services/api/apiMoks.js';
import { CardCheckout, ProductCardCheckout, FormPersonal, FormDelivery, FormPayment } from '../components';

const store = useStore();
const route = useRoute();
const visibilityBtnFormDelivery = ref(true);

const getProductByOfferCode = async () => {
  let offer_code = route.params.offer_code;
  let dataProduct = await getProduct(offer_code);

  store.commit('setDataProduct', dataProduct);

}
onMounted(() => {
  getProductByOfferCode();
  
})
</script>

<template>
  <div id="checkout" class="pa-1 ma-1">
    <v-row class="productDetails ma-1">
      <CardCheckout
        title="Detalhes do produto">
        <ProductCardCheckout />
      </CardCheckout>
    </v-row>
    <v-row class="paymentDetails flex-nowrap ga-1">
      <v-col class="personalFormDetails flex-grow-1">
        <CardCheckout
          title="Dados pessoais">
          <FormPersonal
            @clickBtnFormPersonal="visibilityBtnFormDelivery = false" />
        </CardCheckout>
      </v-col>
      <v-col class="deliveryFormDetails flex-grow-1">
        <CardCheckout
          title="Dados de entrega">
          <FormDelivery
            :disabled="visibilityBtnFormDelivery" />
        </CardCheckout>
      </v-col>
      <v-col class="paymentFormdetails flex-grow-1">
        <CardCheckout
          title="Dados de pagamento">
          <FormPayment />
        </CardCheckout>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
#checkout{
  .productDetails{
    #cardCheckout{
      width: 100%;
      
    }
  }  
}
</style>