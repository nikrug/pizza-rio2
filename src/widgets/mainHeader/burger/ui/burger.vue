<template>
    <div class="burger" @click="$emit('toggle')">
      <div class="line" :class="{ 'active': isOpen }"></div>
      <div class="line" :class="{ 'active': isOpen }"></div>
      <div class="line" :class="{ 'active': isOpen }"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false, // Значение по умолчанию для открытого/закрытого состояния
      },
    },
  };
  </script>
  
  <style lang="scss">
@import "./style";
  </style>