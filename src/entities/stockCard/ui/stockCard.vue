<script setup>

const props = defineProps({
  stockName: {
    type: String,
    default:'Арканзас',
  },
  stockDescription: {
    type: String,
    default:'Состав: рваная свинина, помидоры, сыр, лук красный маринованный, лук фри, перец халапеньо, чесночное масло, соус чипотле, дрожжевое тесто.(В 100 гр.: 290 кКал/1214 кДж)',
  },
  stockDescription2: {
    type: String,
    default:'Состав: рваная свинина, помидоры, сыр, лук красный маринованный, лук фри, перец халапеньо, чесночное масло, соус чипотле, дрожжевое тесто.(В 100 гр.: 290 кКал/1214 кДж)',
  },
  stockLabel1: {
    type: String,
    default:'доставка',
  },
  stockLabel2: {
    type: String,
    default:'только булние дни',
  },
  stockLabel3: {
    type: String,
    default:'оплата наличными',
  },
  stockLabelClass1: {
    type: String,
    default:'stock__item-label'
  },
    stockLabelClass2: {
    type: String,
    default:'stock__item-label'
  },
    stockLabelClass3: {
    type: String,
    default:'stock__item-label'
  },
  imageSrc: {
    type: String,
    default:'/images/menu-item/Beri-peki.jpg'
  },
});
</script>


<template>
        <div class="stock__item">
            <img  class="stock__item-img" :src="props.imageSrc">
            <div class="stock__item-description-container">
              <div class="stock__item-text-block">
                <div class="stock__item-name">{{props.stockName}}</div>
                <div class="stock__item-description-block">
                  <div class="stock__item-description">{{ props.stockDescription}}</div>
                  <div class="stock__item-description">{{ props.stockDescription2}}</div>
                </div>
              </div>
                <div class="stock__item-label-block ">
                    <div :class="props.stockLabelClass1">{{ props.stockLabel1}}</div>
                    <div :class="props.stockLabelClass2">{{ props.stockLabel2}}</div>
                    <div :class="props.stockLabelClass3">{{ props.stockLabel3}}</div>
                </div>
            </div>
        </div>
</template>

  
<style lang="scss" scoped>
@import './style.scss';

</style>