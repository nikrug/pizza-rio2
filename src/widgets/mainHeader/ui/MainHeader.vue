<template>
  <q-toolbar class="header">
          <HeaderLogo/>
      <q-space />
      <q-btn  v-show="menuItems" class="visible-line-tablet header__nav-text"  stretch flat label="Меню" key="Меню" link="/" to="/"  @click="setActive('Меню')" 
        :class="{ active: activeItem === 'Меню' }"/>
      <q-btn v-show="menuItems" class="visible-line-tablet header__nav-text" stretch flat label="Доставка" key="Доставка" link="/delivery" to="/delivery" @click="setActive('Доставка')" 
        :class="{ active: activeItem === 'Доставка' }"/>
      <q-btn class="visible-line header__nav-text" stretch flat label="Акции" key="Акции" link="/stock" to="/stock"  @click="setActive('Акции')" 
        :class="{ active: activeItem === 'Акции' }"/>
      <q-btn class="visible-line header__nav-text" stretch flat label="О компании" key="О компании" link="/about" to="/about" @click="setActive('О компании')" 
        :class="{ active: activeItem === 'О компании' }"/>
      <q-btn class="visible-line header__nav-text" stretch flat label="Карьера" key="Карьера" link="/career" to="/career" @click="setActive('Карьера')" 
        :class="{ active: activeItem === 'Карьера' }"/>
      <q-btn class="visible-line header__nav-text" stretch flat label="Контакты" key="Контакты" link="/contacts" to="/contacts" @click="setActive('Контакты')" 
        :class="{ active: activeItem === 'Контакты' }"/>
      <q-btn v-show="menuItems" class="visible-line-tablet header__nav-text" stretch flat label="Отследить заказ" key="Офис" link="/office" to="/office" @click="setActive('Офис')" 
        :class="{ active: activeItem === 'Офис' }"/>
      <Popup customClass="visible"></Popup>
      <q-space />

      <div class="header__info-text-block visible">
        <a href="/" class="header__orange-text">+7 3822 99 02 55</a>
        <div class="header__text">Бесплатная доставка <br>
          по Томску от 400 ₽</div>
      </div>
      <HeaderDropDown/>
    </q-toolbar>
    <ScrollDownmenu></ScrollDownmenu>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import HeaderDropDown from 'src/widgets/mainHeader/headerDropdown/ui/headerDropdown.vue'
import menuItems from 'src/widgets/mainHeader/headerDropdown/ui/headerDropdown.vue';
import HeaderLogo from 'src/widgets/mainHeader/headerLogo/ui/HeaderLogo.vue';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';
import ScrollDownmenu from 'src/widgets/mainHeader/scrollDownmenu/ui/scrollDownmenu.vue'
const activeItem = ref<string>(''); // Указываем тип для activeItem

const setActive = (item: string) => { // Указываем тип для параметра item
  activeItem.value = item; // Устанавливаем активный элемент
};
</script>

<style lang="scss">
@import './style.scss';
.q-hoverable:hover > .q-focus-helper {
  visibility: hidden;

}
body.desktop .q-focusable:focus .q-focus-helper,
body.desktop .q-hoverable:hover .q-focus-helper {
  background: inherit;
  opacity: 0;
}
body.ios .q-hoverable:active .q-focus-helper {
  background: inherit;
  opacity: 0;
}
.q-focus-helper {
  opacity: 0;
  transition: unset;
}
.q-btn:active {
  transition: none; /* Отключаем все переходы */
}

</style>
