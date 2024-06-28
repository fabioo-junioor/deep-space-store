<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div id="alert">
    <v-alert
      v-if="store.getters.getAlert.isAlert"
      :text="store.getters.getAlert.text"
      :title="store.getters.getAlert.title"
      :type="store.getters.getAlert.type"
    ></v-alert>
  </div>
</template>

<style lang="scss" scoped>
#alert {
  width: 30%;
  position: fixed;
  top: 3%;
  right: 1%;
  z-index: 2000;
}
</style>