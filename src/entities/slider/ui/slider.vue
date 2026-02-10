<script setup>
const props = defineProps({
  castomerName: {
    type: String,
  },
   castomerPosition: {
    type: String,
  },
   quoteText: {
    type: String,
  },
  imageSrc: {
    type: String,
    default:'/images/experiens/customer_1.svg'
  },
});
</script>

<template>
<div class="experiens__customer">
    <img  src="/images/experiens/ri_double-quotes-r.svg" alt="Quote">
    <div class="experiens__customer-card-text">{{props.quoteText}}</div>
      <img class="experiens__img" :src="props.imageSrc" >
    <div  class="experiens__text-box">
      <div class="experiens__customer-card-title-text"> {{props.castomerName}} </div>
      <div class="experiens__customer-card-subtitle-text">{{props.castomerPosition}}</div>
    </div>
</div>


</template>


<style lang="scss" scoped>
@import './style.scss';
@import '/node_modules/nouislider/dist/nouislider.min.css';


</style>
