<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
const emit = defineEmits(['confirmPaymentForm']);

const store = useStore();
const isCard = ref(false);
const dataFormPayment = reactive({
  typePayment: null,
  cpf: "",
  numberCard: "",
  cardExpiring: "",
  cardholderName: "",
  securityCode: "",
  installments: "",
  numberInstallments: null,
});

const confirmInfosCard = () => {
  if(((dataFormPayment.typePayment && dataFormPayment.numberInstallments) != null)&&
      ((dataFormPayment.cpf && dataFormPayment.numberCard &&
          dataFormPayment.cardExpiring && dataFormPayment.cardholderName &&
          dataFormPayment.securityCode) != '')){
    store.commit('setDataFormPayment', dataFormPayment);
    emit('confirmPaymentForm');
    return;

  }
  store.commit('setAlert', {text: 'Campos em branco', title: 'Mensagem', type: 'warning', isAlert: true});
  store.commit('removeAlert');
    
}
const confirmInfosOthers = () => {
  if((dataFormPayment.typePayment != null) && (dataFormPayment.cpf != '')){
    store.commit('setDataFormPayment', dataFormPayment);
    emit('confirmPaymentForm');
    return;

  }
  store.commit('setAlert', {text: 'Campos em branco', title: 'Mensagem', type: 'warning', isAlert: true});
  store.commit('removeAlert');

}
watch(() => {
  isCard.value = dataFormPayment.typePayment == 'cartao' ? true : false;

})
</script>

<template>
  <div id="formPayment" class="pa-1 ma-1">
    <v-form @submit.prevent>
      <v-select
        label="Formas de pagamento*"
        v-model="dataFormPayment.typePayment"
        :items="store.getters.getDataProduct.paymentMethods"
      ></v-select>
      <v-text-field
        v-model="dataFormPayment.cpf"
        label="CPF*"
        type="text"
        v-mask="['###.###.###-##']"
        placeholder="000.000.000-00"
        :rules="[(v) => !!v || 'Campo obrigatório']"
      />
      <div v-if="isCard">
        <v-text-field
          v-model="dataFormPayment.numberCard"
          label="Numero do cartão*"
          type="text"
          v-mask="['#### #### #### ####']"
          placeholder="1111 1111 1111 1111"
          :rules="[(v) => !!v || 'Campo obrigatório']"
        />
        <v-text-field
          v-model="dataFormPayment.cardExpiring"
          label="Validade*"
          type="text"
          v-mask="['##/##']"
          placeholder="11/11"
          :rules="[(v) => !!v || 'Campo obrigatório']"
        />
        <v-text-field
          v-model="dataFormPayment.cardholderName"
          label="Nome do titular*"
          type="text"
          :rules="[(v) => !!v || 'Campo obrigatório']"
        />
        <v-text-field
          v-model="dataFormPayment.securityCode"
          label="Código de segurança*"
          type="text"
          v-mask="['###']"
          placeholder="CCV"
          :rules="[(v) => !!v || 'Campo obrigatório']"
        />
        <v-select
          label="Parcelas*"
          v-model="dataFormPayment.numberInstallments"
          :items="store.getters.getNumberInstallments"
        ></v-select>
      </div>
      <v-btn
        v-if="isCard"
        @click="confirmInfosCard"
        class="mt-2"
        type="submit"
        size="large"
        elevation="4"
        color="red"
        block>Confirmar compra</v-btn>
      <v-btn
        v-else
        @click="confirmInfosOthers"
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
