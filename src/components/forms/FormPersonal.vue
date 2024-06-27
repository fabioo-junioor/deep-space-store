<script setup>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isConfirm = ref(true);
const dataFormPersonal = reactive({
  name: '',
  email: '',
  fone: ''
});

const confirmInfos = () => {
  if(dataFormPersonal.fone != ''){
    store.commit('setDataFormPersonal', dataFormPersonal);
    isConfirm.value = false;
    return;

  }
  console.log('A campos em branco!');
  
}
const editInfos = () => {
  isConfirm.value = true;

}

</script>

<template>
  <div id="formPersonal" class="pa-1 ma-1">
    <v-form :disabled='!isConfirm' @submit.prevent>
        <v-text-field
            v-model="dataFormPersonal.name"
            label="Nome completo"
            type="text" />
        <v-text-field
            v-model="dataFormPersonal.email"
            label="Email"
            type="email" />
        <v-text-field
            v-model="dataFormPersonal.fone"
            label="Telefone*"
            type="text"
            v-mask="['(##) ####-####']"
            placeholder="(55) 9999-9999"
            :rules="[v => !!v || 'Campo obrigatório']" />
        <v-btn
            v-if="isConfirm"
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
