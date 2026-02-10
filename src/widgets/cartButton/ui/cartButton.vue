<template>
  <button class="scrollDownmenu__cart-button">
    <img src="/images/drop-down-menu/icon-basket.svg">
    <div class="cou" >
      <CartSummary></CartSummary>
    </div> 

  </button>
</template>

<script setup lang="ts">
import CartSummary from '@widgets/cartTest/CartSummary.vue';
</script>

<style lang="scss">
@import "./style.scss";
</style>
