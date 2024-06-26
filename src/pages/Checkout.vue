<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import MyInput from '../components/UI/MyInput.vue';
import { getCepUser } from '../services/api/checkout/apiViacep.js';


const visibilityBtnFormPersonal = ref(true);
const visibilityBtnFormDelivery = ref(true);
const personalFormData = reactive({
  name: {value: '', type: 'text', label: 'Nome Completo'},
  email: {value: '', type: 'email', label: 'Email'},
  fone: {value: '', type: 'text', label: 'Telefone*', rules: [v => v ? true : 'Informe o telefone']}

});
const deliveryFormData = reactive({
  cep: {value: '', type: 'text', label: 'CEP', disabled: true},
  road: {value: '', type: 'text', label: 'Numero', disabled: true},
  number: {value: '', type: 'text', label: 'Rua', disabled: true},
  district: {value: '', type: 'text', label: 'Bairo', disabled: true},
  city: {value: '', type: 'text', label: 'Cidade', disabled: true},
  state: {value: '', type: 'text', label: 'Estado', disabled: true}

});

const nextForm = () => {
  deliveryFormData.cep.disabled = false;

}

watch(() => {
  visibilityBtnFormPersonal.value = personalFormData.fone.value != '' ? false : true;

  if((deliveryFormData.number.value &&
      deliveryFormData.road.value &&
      deliveryFormData.district.value) != ''){
        visibilityBtnFormDelivery.value = false;
        return;

  }
  visibilityBtnFormDelivery.value = true;

})
const getCep = async () => {
  const dataCep = await getCepUser(deliveryFormData.cep.value);
  if(dataCep){
    deliveryFormData.city.value = dataCep.localidade;
    deliveryFormData.state.value = dataCep.uf;
    deliveryFormData.road.disabled = false;
    deliveryFormData.number.disabled = false;
    deliveryFormData.district.disabled = false;
    return;

  }
  console.log('cep errado');

}
onMounted(async () => {

});
</script>

<template>
  <div id="checkout">
    <v-row class="productDetails pa-1 ma-2 rounded-lg">
      <h4 class="pa-1">Detalhes do produto</h4>
    </v-row>
    <v-row class="paymentDetails pa-1 ma-1 flex-nowrap ga-3">
      <v-col class="personalFormDetails flex-grow-1 rounded-lg">
        <h4 class="pa-1">Dados pesoais</h4>
        <v-form @submit.prevent="nextForm">
          <MyInput
            v-for="i in personalFormData" :key="i"
            v-model="i.value"
            :type="i.type"
            :label="i.label"
            :rules="i.rules" />
            <v-btn 
              :disabled="visibilityBtnFormPersonal"
              class="mt-2"
              type="submit"
              size="large"
              elevation="4"
              color="red"
              block>Avançar</v-btn>
        </v-form>
      </v-col>
      <v-col class="deliveryFormDetails flex-grow-1 rounded-lg">
        <h4 class="pa-1">Dados de entrega</h4>
        <v-form @submit.prevent="nextForm">
          <MyInput
            v-for="i in deliveryFormData" :key="i"
            v-model="i.value"
            :type="i.type"
            :label="i.label"
            :disabled="i.disabled"
            :onChange="i.label == 'CEP' ? getCep : ''"
            :rules="i.rules" />
            <v-btn 
              :disabled="visibilityBtnFormDelivery"
              class="mt-2"
              type="submit"
              size="large"
              elevation="4"
              color="red"
              block>Avançar</v-btn>
        </v-form>
      </v-col>
      <v-col class="paymentFormdetails flex-grow-1 rounded-lg">
        <h4 class="pa-1">Forma de pagamento</h4>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
#checkout{
    .productDetails{
      background-color: white;
      height: 10rem;
      box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, .2);
      
    }
    .paymentDetails{
      .personalFormDetails,
      .deliveryFormDetails,
      .paymentFormdetails{
        background-color: white;
        box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, .2);

      }
    }    
}
</style>
