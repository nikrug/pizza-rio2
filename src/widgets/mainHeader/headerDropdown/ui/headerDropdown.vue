<template>
  <div>
    <burger :isOpen="isOpen" @toggle="toggleDropdown" @click="menuItems = !menuItems"/>
    <div class="overlay" v-if="isOpen"></div>
    <div class="dropdown" :class="{ show: isOpen }" >
      <ScrollDownmenu LinkClass="dropdownl" ButtonClass="cardbutton-none" :onLinkClick="toggleDropdown"></ScrollDownmenu>
      <ul class="dropdown-list" >
        <q-btn @click="toggleDropdown" class="dropdown-link"
          v-for="link in navMenu"
          stretch 
          flat
          :label="link.label"
          :key="link.link"
          :to="link.link"
        />
        <Popup></Popup>
      </ul>
      <div class="dropdown-footer">
        <a href="/" class="dropdown__footer-label">+7 3822 99 02 55</a>
        <div class="dropdown__footer-text">
          Бесплатная доставка<br>
          по Томску от 400 ₽
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

import burger from 'src/widgets/mainHeader/burger/ui/burger.vue';
import { navMenu } from 'src/widgets/mainHeader/config/navMenu';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';
import ScrollDownmenu from 'src/widgets/mainHeader/scrollDownmenu/ui/scrollDownmenu.vue';
const isOpen = ref(false);
const isVisible = ref(false);
const menuItems = ref(true);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
  isVisible.value = !isVisible.value;

  // Блокируем или разблокируем прокрутку страницы
  if (isOpen.value) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
};

// Добавляем обработчики на событие монтирования и размонтирования компонента
onMounted(() => {
  if (isOpen.value) {
    document.body.classList.add('no-scroll');
  }
});

onBeforeUnmount(() => {
  document.body.classList.remove('no-scroll');
});


</script>

<style lang="scss" scoped>
@import './style.scss';


</style>
