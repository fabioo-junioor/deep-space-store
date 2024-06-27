<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { getCepUser } from '../../services/api/apiViacep.js';
const props = defineProps(['disabled']);

const store = useStore();
const dataFormDelivery = reactive({
  zipCode: '',
  street: '',
  number: '',
  district: '',
  city: '',
  state: ''

});
const confirmForm = () => {
    store.commit('setDataFormDelivery', dataFormDelivery);
    console.log(store.getters.getDataFormDelivery);
}
const getCep = async () => {
  const dataCep = await getCepUser(dataFormDelivery.zipCode);
  if(dataCep){
    dataFormDelivery.city = dataCep.localidade;
    dataFormDelivery.state = dataCep.uf;
    return;

  }
  console.log('cep errado');

}

</script>

<template>
  <div id="formDelivery" class="pa-1 ma-1">
    <v-form @submit.prevent="confirmForm">
        <v-text-field
            v-model="dataFormDelivery.zipCode"
            label="CEP"
            type="text"
            v-mask="['#####-###']"
            :onChange="getCep" />
        <v-text-field
            v-model="dataFormDelivery.street"
            label="Rua"
            type="text" />
        <v-text-field
            v-model="dataFormDelivery.number"
            label="Numero"
            type="number" />
        <v-text-field
            v-model="dataFormDelivery.district"
            label="Bairro"
            type="text" />
        <v-text-field
            v-model="dataFormDelivery.city"
            label="Cidade"
            type="text" />
        <v-text-field
            v-model="dataFormDelivery.state"
            label="Estado"
            type="text" />
        <v-btn
            :disabled="props.disabled"
            class="mt-2"
            type="submit"
            size="large"
            elevation="4"
            color="red"
            block>Confirmar</v-btn>
    </v-form>
  </div>
</template>

<style scoped>

</style>
