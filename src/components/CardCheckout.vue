<script setup>
const props = defineProps(['title']);

</script>

<template>
  <div id="cardCheckout" class="pa-1 rounded-lg">
    <h3 class="ma-2">{{title}}</h3>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
#cardCheckout{
    background-color: white;
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, .2);

}
</style>
