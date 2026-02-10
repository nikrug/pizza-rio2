<script setup>
  import {  ref } from 'vue';

  import  SkeletonLoader  from '@widgets/SkeletonLoader/ui/SkeletonLoader.vue'; // Путь к вашему компоненту

const Popup = ref(false);
const loading = ref(true); // Добавляем состояние загрузки

// Загрузка данных (например, имитация задержки)
setTimeout(() => {
  loading.value = false; // После 2 секунд изменяем состояние загрузки
}, 2000);

const props = defineProps({
  menuName: {
    type: String,
    default:'Арканзас',
  },
  menuDescription: {
    type: String,
    default:'Состав: рваная свинина, помидоры, сыр, лук красный маринованный, лук фри, перец халапеньо, чесночное масло, соус чипотле, дрожжевое тесто.',
  },
  imageSrc: {
    type: String,
    default:'/images/menu-item/Archcansas.png'
  },
  SpicyimageSrc: {
    type: String,
    default:''
  },
  overImage: {
    type: String,
    default:''
  },
  menuWeight: {
    type: String,
    default:'(В 100 гр.: 290 кКал/1214 кДж)',
  },
});
</script>


<template>
    <div class="menu__item">
      <div class="menu__text-img">
        <div v-if="loading">
          <SkeletonLoader />
        </div>
        <div v-else class="menu__item-img-container img-container">
            <img class="menu__over-img" :src="props.overImage">
            <img @click="Popup = !Popup" class="menu__item-img main-img" :src="props.imageSrc">
        </div>
        <div class="menu__item-description-container">
            <div class="menu__item-name">{{props.menuName}}
              <img :src="props.SpicyimageSrc">
            </div>
            <div class="menu__description-block">
              <div class="menu__item-description">{{ props.menuDescription}}</div>
              <div class="menu__item-description">{{ props.menuWeight}}</div>
            </div>
        </div>
        </div>
        <slot name="weight-counter"></slot>
    </div>
    <Transition name="v-faid">   
        <div v-show="Popup" class="menu-popup-overlay"  @mousedown="Popup=!Popup">

          <div v-show="Popup" class="menu-popup" @mousedown="Popup=!Popup">
              <div class="menu-popup" @mousedown.stop>

                <span class="menu-close-button" @click="Popup = !Popup">
                  <div class="icon_normal-close"></div>
                  <div class="icon_hover-close"></div>
                </span>
                <div class="menu__item-img-container-popup">
                    <img class="menu__poup-item-img" :src="props.imageSrc">
                </div>
                <div class="menu__item-description-popup">
                    <div class="menu__item-description-text">
                      <div class="menu__item-name-popup">{{props.menuName}}
                        <img :src="props.SpicyimageSrc">
                      </div>
                      <div class="menu__item-descriptions">
                        {{ props.menuDescription}}<br>
                        {{ props.menuWeight}}
                      </div>
                      <slot class="menu__item-descriptions" name="additional-info"></slot>
                    </div>
                    <img class="menu__item-img-popup" src="/images/menu-item/Group 3611 (1).svg">
                </div>
              </div>
          </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
@import './style.scss';

</style>