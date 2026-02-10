<template>
  <div class="skeleton-loader">
    <div :class="props.CustomClass"></div>
  </div>
</template>

<style lang="scss">
@import './style.scss';
</style>

<script setup lang="ts">

const props = defineProps({
  CustomClass: {
    type: String,
    default: 'skeleton-img',

  },
});
</script>
