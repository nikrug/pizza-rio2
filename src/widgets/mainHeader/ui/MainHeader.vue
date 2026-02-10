<template>
  <q-toolbar class="header">
          <HeaderLogo/>
      <q-space />
      <q-btn v-show="menuItems" class="visible-line-tablet header__nav-text" stretch flat label="Меню" key="Меню" link="/" to="/"/>
      <q-btn v-show="menuItems" class="visible-line-tablet header__nav-text" stretch flat label="Доставка" key="Доставка" link="/delivery" to="/delivery"/>
      <q-btn  class="visible-line header__nav-text" stretch flat label="Акции" key="Акции" link="/stock" to="/stock"/>
      <q-btn class="visible-line header__nav-text" stretch flat label="О компании" key="О компании" link="/about" to="/about"/>
      <q-btn class="visible-line header__nav-text" stretch flat label="Карьера" key="Карьера" link="/career" to="/career"/>
      <q-btn class="visible-line header__nav-text" stretch flat label="Контакты" key="Контакты" link="/contacts" to="/contacts"/>
      <q-btn v-show="menuItems" class="visible-line-tablet header__nav-text" stretch flat label="Отследить заказ" key="Офис" link="/office" to="/office"/>
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

import HeaderDropDown from 'src/widgets/mainHeader/headerDropdown/ui/headerDropdown.vue'
import menuItems from 'src/widgets/mainHeader/headerDropdown/ui/headerDropdown.vue';
import HeaderLogo from 'src/widgets/mainHeader/headerLogo/ui/HeaderLogo.vue';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';
import ScrollDownmenu from 'src/widgets/mainHeader/scrollDownmenu/ui/scrollDownmenu.vue'

</script>

<style lang="scss">
@import './style.scss';
</style>
