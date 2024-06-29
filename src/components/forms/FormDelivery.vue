<script setup>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { getCepUser } from '../../services/api/apiViacep.js';
import { fielsRequired, cepValidator} from '../../utils/inputValidators.js';
import { Alert } from '../../components';

const store = useStore();
const isConfim = ref(true);
const dataFormDelivery = reactive({
  zipCode: '',
  street: '',
  number: '',
  district: '',
  city: '',
  state: '',
  rules: {
    required: v => !!v || 'Campo obrigatório',
    cep: v => cepValidator(v) || 'Campo invalido'
  }
});
const removeCepCharacters = cep => cep.replace(/\D/g, '');

const confirmInfos = () => {
  if(cepValidator(dataFormDelivery.zipCode) &&
    fielsRequired(dataFormDelivery.street) &&
    fielsRequired(dataFormDelivery.number) &&
    fielsRequired(dataFormDelivery.district)){
      store.commit('setDataFormDelivery', dataFormDelivery);
      store.commit('setAlert', {text: 'Formulário salvo', title: 'Dados de entrega!', type: 'success', isAlert: true});
      store.commit('removeAlert');
      isConfim.value = false;
      return;

  }
  store.commit('setAlert', {text: 'Campos incorretos', title: 'Dados de entrega!', type: 'warning', isAlert: true});
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
  store.commit('setAlert', {text: 'Cep incorreto', title: 'Dados de entrega!', type: 'warning', isAlert: true});
  store.commit('removeAlert');

}

</script>

<template>
  <div id="formDelivery" class="pa-1 ma-1">
    <v-form :disabled="!isConfim" @submit.prevent>
        <v-text-field
            id="cep"
            v-model="dataFormDelivery.zipCode"
            label="CEP*"
            type="text"
            v-mask="['#####-###']"
            :rules="[dataFormDelivery.rules.required, dataFormDelivery.rules.cep]"
            :onChange="getCep" />
        <v-text-field
            id="street"
            v-model="dataFormDelivery.street"
            label="Rua*"
            type="text"
            :rules="[dataFormDelivery.rules.required]" />
        <v-text-field
            id="number"
            v-model="dataFormDelivery.number"
            label="Numero*"
            type="text"
            :rules="[dataFormDelivery.rules.required]" />
        <v-text-field
            id="district"
            v-model="dataFormDelivery.district"
            label="Bairro*"
            type="text"
            :rules="[dataFormDelivery.rules.required]" />
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
            id="btnConfirmDataDelivery"
            v-if="isConfim"
            @click="confirmInfos"
            class="mt-2"
            type="submit"
            size="large"
            elevation="4"
            color="red"
            block>Confirmar</v-btn>
        <v-btn
            id="btnEditDataDelivery"
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
