<script setup>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isConfirm = ref(true);
const dataFormPersonal = reactive({
  name: '',
  email: '',
  fone: '',
  rules: {
    required: v => !!v || 'Campo obrigatório',
    email: v => /.+@.+\..+/.test(v) || 'Email invalido',
    phone: v => { return ((v.replace(/\D/g, '')).length === 11) || 'Telefone incorreto' }
  }
});

const confirmInfos = () => {
  if(dataFormPersonal.fone != ''){
    store.commit('setDataFormPersonal', dataFormPersonal);
    isConfirm.value = false;
    store.commit('setAlert', {text: 'Formulário salvo', title: 'Mensagem', type: 'success', isAlert: true});
    store.commit('removeAlert');
    return;

  }
  store.commit('setAlert', {text: 'Campos em branco', title: 'Mensagem', type: 'warning', isAlert: true});
  store.commit('removeAlert');

}
const editInfos = () => {
  isConfirm.value = true;

}

</script>

<template>
  <div id="formPersonal" class="pa-1 ma-1">
    <v-form :disabled='!isConfirm' @submit.prevent>
        <v-text-field
            id="fullName"
            v-model="dataFormPersonal.name"
            label="Nome completo*"
            type="text"
            :rules="[dataFormPersonal.rules.required]" />
        <v-text-field
            id="email"
            v-model="dataFormPersonal.email"
            label="Email*"
            type="email"
            :rules="[dataFormPersonal.rules.required, dataFormPersonal.rules.email]" />
        <v-text-field
            id="phone"
            v-model="dataFormPersonal.fone"
            label="Telefone*"
            type="text"
            v-mask="['(##) # ####-####']"
            placeholder="(55) 9 9999-9999"
            :rules="[dataFormPersonal.rules.required, dataFormPersonal.rules.phone]" />
        <v-btn
            id="btnConfirmDataPersonal"
            v-if="isConfirm"
            @click="confirmInfos" 
            class="mt-2"
            type="submit"
            size="large"
            elevation="4"
            color="red"
            block>Confirmar</v-btn>
        <v-btn
            id="btnEditDataPersonal"
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
