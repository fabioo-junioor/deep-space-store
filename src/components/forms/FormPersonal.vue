<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';
const emit = defineEmits(['clickBtnFormPersonal']);

const store = useStore();
const dataFormPersonal = reactive({
  name: '',
  email: '',
  fone: ''
});

const confirmForm = () => {
  store.commit('setDataFormPersonal', dataFormPersonal);
  
}
</script>

<template>
  <div id="formPersonal" class="pa-1 ma-1">
    <v-form @submit.prevent="confirmForm">
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
            :disabled="dataFormPersonal.fone != '' ? false : true"
            @click="emit('clickBtnFormPersonal')" 
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
