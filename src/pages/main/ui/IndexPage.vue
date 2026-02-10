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
    <swiper-slide v-else class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide
    ><swiper-slide class="swiper-slide"> <img class="swiper-img" src="/images/menu-item/add-banner.png"></swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>
    <div class="menu-list">
      <menuPizza></menuPizza>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
@import '/node_modules/swiper/swiper-bundle.min.css';

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
