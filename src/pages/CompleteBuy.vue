<script setup>
import { CardCheckout } from "../components";
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div id="completeBuy" class="pa-1 ma-1">
    <v-row class="flex-nowrap ga-1">
      <v-col class="flex-grow-1">
        <CardCheckout title="Dados da compra" class="d-flex flex-column align-center">
            <h4 class="ma-1">{{store.getters.getDataBuy.dataPayment.typePayment}}</h4>
            <div v-if="store.getters.getDataBuy.dataPayment.typePayment == 'pix'">
                <v-img
                    height="300"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png"
                    ></v-img>
                <h5 class="ma-1">Código: 46874541356498791</h5>
            </div>
            <div v-if="store.getters.getDataBuy.dataPayment.typePayment == 'boleto'">
                <v-img
                    min-width="250"
                    src="https://img.freepik.com/psd-gratuitas/ilustracao-de-codigo-de-barras-isolada_23-2150584094.jpg"
                    ></v-img>
                <h5 class="ma-1">Código: A5S4DAS11165AS46A511144</h5>
            </div>
            <div v-if="store.getters.getDataBuy.dataPayment.typePayment == 'cartao'">
                <v-col>
                    <h3>Pagamento bem sucedido!</h3>
                </v-col>
                <v-col>
                    <h4>Nome: {{store.getters.getDataBuy.dataPersonal.name}}</h4>
                    <h4>Telefone: {{store.getters.getDataBuy.dataPersonal.fone}}</h4>
                </v-col>
                <v-col>
                    <h4>CEP: {{store.getters.getDataBuy.dataDelivery.zipCode}}</h4>
                    <h4>Rua: {{store.getters.getDataBuy.dataDelivery.street}}</h4>
                </v-col>
                <v-col>
                    <h4>CPF: {{store.getters.getDataBuy.dataPayment.cpf}}</h4>
                    <h4>Parcelas: {{store.getters.getDataBuy.dataPayment.numberInstallments}}</h4>
                </v-col>
                
            </div>

        </CardCheckout>
      </v-col>
      <v-col class="flex-grow-1">
        <CardCheckout title="Dados do produto" class="d-flex flex-column align-center">
          <v-card class="d-flex flex-column elevation-0" width="250">
            <v-img
              class="text-white"
              height="200"
              :src="store.getters.getDataProduct.img"
              cover>
            </v-img>
            <div
              class="productInfo pa-4 d-flex flex-column align-center justify-center"
            >
              <v-card-title class="pa-1">{{ store.getters.getDataProduct.name }}</v-card-title>
              <v-card-text class="pa-1 text-center">Descrição: {{ store.getters.getDataProduct.description }}</v-card-text>
              <v-card-text class="pa-1">Valor: R$ {{ store.getters.getDataProduct.price }}</v-card-text>
            </div>
          </v-card>
        </CardCheckout>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
</style>