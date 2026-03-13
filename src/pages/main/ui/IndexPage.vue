<template>
  <div class="menu">
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      type:'bullets',
      clickable: true,
      el:'.swiper-pagination'
    }"
    :navigation="true"
    :modules="modules"
    class="IndexSwiper"
  >
    <swiper-slide v-if="loading">
      <SkeletonLoader CustomClass="skeleton-img-slider" ></SkeletonLoader>
    </swiper-slide>
    <swiper-slide v-else class="swiper-slide"> <img class="swiper-img" src="/images/slider-banner/slider-banner1.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/slider-banner/slider-banner2.jpg"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/slider-banner/slider-banner3.jpg"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/slider-banner/slider-banner4.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/slider-banner/slider-banner5.jpg"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/slider-banner/slider-banner6.jpg"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide>

  </swiper>
      <div class="swiper-pagination"></div>
    <div class="menu-list">
      <menuPizza></menuPizza>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
@import '/node_modules/swiper/swiper-bundle.min.css';
.swiper{
  width: 90%;
}
@media(min-width:1520px){

.swiper-button-prev {
  background-color: $pure-white;
  border-radius: 30px;
  bottom: 300px;
  left: -740px;
  width: 48px; /* Ширина кнопок */
  height: 48px; /* Высота кнопок */
  z-index: 10; /* Обеспечение правильного наложения */
  background-image: url(/images/menu-item/arrow-left.svg);
  background-repeat: no-repeat;
  background-position: center; /* Центрирование изображения */
  background-size: 24px 24px; /* Вы можете изменить размер изображения, если необходимо */
}

.swiper-button-next {
  display: flex;
  background-color: $pure-white;
  border-radius: 30px;
  bottom: 325px;
        left: 740px;
  width: 48px; /* Ширина кнопок */
  height: 48px; /* Высота кнопок */
  z-index: 10; /* Обеспечение правильного наложения */
  background-image: url(/images/menu-item/arrow-right.svg);
  background-repeat: no-repeat;
  background-position: center; /* Центрирование изображения */
  background-size: 24px 24px; /* Вы можете изменить размер изображения, если необходимо */
}
}
</style>

<script setup lang="ts">
  
  import { ref } from 'vue';

  import menuPizza from '@widgets/menuBlock/ui/menuPizza.vue';
  import  SkeletonLoader  from '@widgets/SkeletonLoader/ui/SkeletonLoader.vue';
  import { Navigation, Pagination } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Экспорируем необходимые компоненты и модули
  const modules = [Pagination, Navigation];
  const loading = ref(true); // Добавляем состояние загрузки

  // Загрузка данных (например, имитация задержки)
  setTimeout(() => {
    loading.value = false; // После 2 секунд изменяем состояние загрузки
  }, 2000);
</script>
