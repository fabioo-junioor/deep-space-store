<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const dataFormPayment = reactive({
  typePayment: 'boleto',
  number: '',
  data: ''
});

const confirmForm = () => {
  
}
</script>

<template>
  <div id="formPayment" class="pa-1 ma-1">
    <v-form @submit.prevent="confirmForm">
      <p>{{dataFormPayment.typePayment}}</p>
      <v-container fluid>
        <v-radio-group inline v-model="dataFormPayment.typePayment">
          <v-radio label="Boleto" value="boleto"></v-radio>
          <v-radio label="Pix" value="pix"></v-radio>
          <v-radio label="Cartão de credito" value="cartao"></v-radio>
        </v-radio-group>
      </v-container>
        <v-text-field
            v-model="dataFormPayment.number"
            label="Numero completo"
            type="text" />
        <v-text-field
            v-model="dataFormPayment.data"
            label="Data"
            type="text" />
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
