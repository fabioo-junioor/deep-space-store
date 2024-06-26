<script setup>
const props = defineProps(['rules', 'label', 'type', 'disabled']);
const model = defineModel();

</script>

<template>
  <div id="myInput">
    <v-text-field
        v-model="model"
        :rules="rules"
        :label="label"
        :type="type"
        :disabled="disabled">
    </v-text-field>
  </div>
</template>

<style lang="scss" scoped>

</style>
