<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import { fielsRequired, cpfValidator, numCardValidator, codeCardValidator, validCardValidator } from '../../utils/inputValidators.js';
const emit = defineEmits(['confirmPaymentForm']);

const store = useStore();
const isCard = ref(false);
const dataFormPayment = reactive({
  typePayment: '',
  paymentMethods: ['boleto', 'pix', 'cartão de credito'],
  cpf: "",
  numberCard: "",
  cardExpiring: "",
  cardholderName: "",
  securityCode: "",
  numberInstallments: 5,
  installmentsValues: [],
  definedInstallment: null,
  rules: {
    required: v => !!v || 'Campo obrigatório',
    numCard: v => numCardValidator(v) || 'Numero incorreto',
    validCard: v => validCardValidator(v) || 'Numero incorreto',
    codeCard: v => codeCardValidator(v) || 'Numero incorreto',
    cpf: v => cpfValidator(v) || 'Numero incorreto'
  }
});

const calculatesInstallmentValue = () => {
  dataFormPayment.installmentsValues = [];
  for(var i = 1; i <= dataFormPayment.numberInstallments; i++){
    let price = store.getters.getDataProduct.price / i;
    price = price.toFixed(2);
    dataFormPayment.installmentsValues.push(`${i} parcela: R$ ${price} cada`);
    
  }
}

const confirmInfosCard = () => {
  if(cpfValidator(dataFormPayment.cpf) &&
    numCardValidator(dataFormPayment.numberCard) &&
    validCardValidator(dataFormPayment.cardExpiring) &&
    fielsRequired(dataFormPayment.cardholderName) &&
    codeCardValidator(dataFormPayment.securityCode) &&
    fielsRequired(dataFormPayment.definedInstallment)){
    store.commit('setDataFormPayment', dataFormPayment);
    emit('confirmPaymentForm');
    return;

  }
  store.commit('setAlert', {text: 'Campos incorretos', title: 'Dados de pagamento!', type: 'warning', isAlert: true});
  store.commit('removeAlert');
    
}
const confirmInfosOthers = () => {
  if((fielsRequired(dataFormPayment.typePayment)) && (cpfValidator(dataFormPayment.cpf))){
    store.commit('setDataFormPayment', dataFormPayment);
    emit('confirmPaymentForm');
    return;

  }
  store.commit('setAlert', {text: 'Campos incorretos', title: 'Dados de pagamento!', type: 'warning', isAlert: true});
  store.commit('removeAlert');

}
watch(() => {
  isCard.value = dataFormPayment.typePayment == 'cartão de credito' ? true : false;
  calculatesInstallmentValue();

})
onMounted(() => {
  
})
</script>

<template>
  <div id="formPayment" class="pa-1 ma-1">
    <v-form @submit.prevent>
      <v-radio-group inline 
        id="typesPayment"
        class="d-flex justify-center mt-4 mb-4"
        v-model="dataFormPayment.typePayment">
        <v-radio label="Boleto" id="boleto" value="boleto"></v-radio>
        <v-radio label="Pix" id="pix" value="pix"></v-radio>
        <v-radio label="Cartão de credito" id="cartao" value="cartão de credito"></v-radio>
      </v-radio-group>
        <h5 v-if="dataFormPayment.typePayment" class="text-center ma-2">
          Metodo escolhido: {{ dataFormPayment.typePayment }}
        </h5>
      <v-text-field
        id="cpf"
        v-model="dataFormPayment.cpf"
        label="CPF*"
        type="text"
        v-mask="['###.###.###-##']"
        placeholder="000.000.000-00"
        :rules="[dataFormPayment.rules.required, dataFormPayment.rules.cpf]"
      />
      <div v-if="isCard">
        <v-text-field
          v-model="dataFormPayment.numberCard"
          label="Numero do cartão*"
          type="text"
          v-mask="['#### #### #### ####']"
          placeholder="1111 1111 1111 1111"
          :rules="[dataFormPayment.rules.required, dataFormPayment.rules.numCard]"
        />
        <v-text-field
          v-model="dataFormPayment.cardExpiring"
          label="Validade*"
          type="text"
          v-mask="['##/##']"
          placeholder="11/11"
          :rules="[dataFormPayment.rules.required, dataFormPayment.rules.validCard]"
        />
        <v-text-field
          v-model="dataFormPayment.cardholderName"
          label="Nome do titular*"
          type="text"
          :rules="[dataFormPayment.rules.required]"
        />
        <v-text-field
          v-model="dataFormPayment.securityCode"
          label="Código de segurança*"
          type="text"
          v-mask="['###']"
          placeholder="CCV"
          :rules="[dataFormPayment.rules.required, dataFormPayment.rules.codeCard]"
        />
        <v-select
          label="Parcelas*"
          v-model="dataFormPayment.definedInstallment"
          :items="dataFormPayment.installmentsValues"
          :rules="[dataFormPayment.rules.required]"
        ></v-select>
      </div>
      <v-btn
        id="btnConfirmDataPaymentCard"
        v-if="isCard"
        @click="confirmInfosCard"
        class="mt-2"
        type="submit"
        size="large"
        elevation="4"
        color="red"
        block>Confirmar compra</v-btn>
      <v-btn
        id="btnConfirmDataPaymentOthes"
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
