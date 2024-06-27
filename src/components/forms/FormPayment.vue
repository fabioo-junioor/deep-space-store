<script setup>
import { onMounted, reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const dataFormPayment = reactive({
  typePayment: 'boleto',
  cpf: '',
  numberCard: '',
  cardExpiring: '',
  cardholderName: '',
  securityCode: '',
  installments: '',
  paymentMethods: [],
  numberInstallments: []
});

const getPaymentMethods = () => {
  
}
const getNumberInstallments = () => {
  let installments = store.getters.getDataProduct.price / store.getters.getDataProduct.numberInstallments;
  
  console.log(installments)

}
onMounted(() => {
  getNumberInstallments();

})
</script>

<template>
  <div id="formPayment" class="pa-1 ma-1">
    <v-form @submit.prevent>
      <p>{{dataFormPayment.typePayment}}</p>
      <v-container fluid>
        <v-radio-group inline v-model="dataFormPayment.typePayment">
          <v-radio
            v-for="i in dataFormPayment.paymentMethods" :key="i"
            :label="i" :value="i"></v-radio>
        </v-radio-group>
      </v-container>
        <v-text-field
            v-model="dataFormPayment.cpf"
            label="CPF*"
            type="text"
            v-mask="['###.###.###-##']"
            placeholder="000.000.000-00"
            :rules="[v => !!v || 'Campo obrigatório']" />
        <v-text-field
            v-model="dataFormPayment.numberCard"
            label="Numero do cartão*"
            type="text" />
        <v-text-field
            v-model="dataFormPayment.cardExpiring"
            label="Validade*"
            type="text"
            v-mask="['##/##']"
            placeholder="11/11"
            :rules="[v => !!v || 'Campo obrigatório']" />
        <v-text-field
            v-model="dataFormPayment.cardholderName"
            label="Nome do titular*"
            type="text"
            :rules="[v => !!v || 'Campo obrigatório']" />
        <v-text-field
            v-model="dataFormPayment.securityCode"
            label="Código de segurança*"
            type="text"
            v-mask="['###']"
            placeholder="CCV"
            :rules="[v => !!v || 'Campo obrigatório']" />
          <v-select
            label="Parcelas"
            :items="numberInstallments"></v-select>
        <v-btn 
            class="mt-2"
            type="submit"
            size="large"
            elevation="4"
            color="red"
            block>Confirmar compra</v-btn>
    </v-form>
  </div>
</template>

<style scoped>

</style>
