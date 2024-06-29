<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { getProduct, buyProduct } from "../services/api/apiMoks.js";
import {
  CardCheckout,
  ProductCardCheckout,
  FormPersonal,
  FormDelivery,
  FormPayment,
  Alert
} from "../components";

const store = useStore();
const route = useRoute();
const router = useRouter();
const visibilityBtnFormDelivery = ref(true);

const getProductByOfferCode = async () => {
  let offer_code = route.params.offer_code;
  let dataProduct = await getProduct(offer_code);

  if (dataProduct.offer_code) {
    store.commit("setDataProduct", dataProduct);
    return;
  }
};
const confirmPayment = async () => {
  let jsonRequest = {
    dataPersonal: store.getters.getDataFormPersonal,
    dataDelivery: store.getters.getDataFormDelivery,
    dataPayment: store.getters.getDataFormPayment,

  };
  if((Object.keys(jsonRequest.dataPersonal).length &&
      Object.keys(jsonRequest.dataDelivery).length &&
      Object.keys(jsonRequest.dataPayment).length) === 0){
    store.commit('setAlert', {text: 'Campos faltando', title: 'Checkout!', type: 'warning', isAlert: true});
    store.commit('removeAlert');
    return;

  }
  let responseCreateOrder = await buyProduct(route.params.offer_code, jsonRequest);
  if (responseCreateOrder.messageError) {
    store.commit('setAlert', {text: responseCreateOrder.messageError, title: 'Checkout!', type: 'error', isAlert: true});
    store.commit('removeAlert');
    return;

  }
  store.commit('setDataBuy', responseCreateOrder);
  router.push({ name: "completeBuy" });

};
onMounted(async () => {
  await getProductByOfferCode();
  
});
</script>

<template>
  <div id="checkout" class="pa-1 ma-1">
    <v-row class="productDetails ma-1">
      <CardCheckout title="Detalhes do produto">
        <ProductCardCheckout />
      </CardCheckout>
    </v-row>
    <v-row class="paymentDetails flex-nowrap ga-1">
      <v-col class="personalFormDetails flex-grow-1">
        <CardCheckout title="Dados pessoais">
          <FormPersonal />
        </CardCheckout>
      </v-col>
      <v-col class="deliveryFormDetails flex-grow-1">
        <CardCheckout title="Dados de entrega">
          <FormDelivery />
        </CardCheckout>
      </v-col>
      <v-col class="paymentFormdetails flex-grow-1">
        <CardCheckout title="Dados de pagamento">
          <FormPayment @confirmPaymentForm="confirmPayment" />
        </CardCheckout>
      </v-col>
    </v-row>
    <Alert />
  </div>
</template>

<style lang="scss" scoped>
#checkout {
  .productDetails {
    #cardCheckout {
      width: 100%;
    }
  }
}
</style>