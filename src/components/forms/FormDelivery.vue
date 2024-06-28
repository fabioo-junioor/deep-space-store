<script setup>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { getCepUser } from '../../services/api/apiViacep.js';
import { Alert } from '../../components';

const store = useStore();
const isConfim = ref(true);
const dataFormDelivery = reactive({
  zipCode: '',
  street: '',
  number: '',
  district: '',
  city: '',
  state: ''

});
const removeCepCharacters = cep => cep.replace(/\D/g, '');

const confirmInfos = () => {
  if((dataFormDelivery.zipCode &&
    dataFormDelivery.street &&
    dataFormDelivery.number &&
    dataFormDelivery.city &&
    dataFormDelivery.state) != ''){
      store.commit('setDataFormDelivery', dataFormDelivery);
      isConfim.value = false;
      store.commit('setAlert', {text: 'Formulário salvo', title: 'Mensagem', type: 'success', isAlert: true});
      store.commit('removeAlert');
      return;

  }
  store.commit('setAlert', {text: 'Campos em branco', title: 'Mensagem', type: 'warning', isAlert: true});
  store.commit('removeAlert');
    
}
const editInfos = () => {
  isConfim.value = true;

}
const getCep = async () => {
  const dataCep = await getCepUser(removeCepCharacters(dataFormDelivery.zipCode));
  if(dataCep){
    dataFormDelivery.street = dataCep.logradouro;
    dataFormDelivery.city = dataCep.localidade;
    dataFormDelivery.state = dataCep.uf;
    return;

  }
  store.commit('setAlert', {text: 'Cep incorreto', title: 'Mensagem', type: 'warning', isAlert: true});
  store.commit('removeAlert');

}

</script>

<template>
  <div id="formDelivery" class="pa-1 ma-1">
    <v-form :disabled="!isConfim" @submit.prevent>
        <v-text-field
            v-model="dataFormDelivery.zipCode"
            label="CEP*"
            type="text"
            v-mask="['#####-###']"
            :onChange="getCep" />
        <v-text-field
            v-model="dataFormDelivery.street"
            label="Rua*"
            type="text" />
        <v-text-field
            v-model="dataFormDelivery.number"
            label="Numero*"
            type="number" />
        <v-text-field
            required
            v-model="dataFormDelivery.district"
            label="Bairro"
            type="text" />
        <v-text-field
            disabled
            v-model="dataFormDelivery.city"
            label="Cidade*"
            type="text" />
        <v-text-field
            disabled
            v-model="dataFormDelivery.state"
            label="Estado*"
            type="text" />
        <v-btn
            v-if="isConfim"
            @click="confirmInfos"
            class="mt-2"
            type="submit"
            size="large"
            elevation="4"
            color="red"
            block>Confirmar</v-btn>
        <v-btn
            v-else
            @click="editInfos"
            class="mt-2"
            type="submit"
            size="large"
            elevation="4"
            color="red"
            block>Editar</v-btn>
    </v-form>
  </div>
</template>

<style scoped>

</style>
