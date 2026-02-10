<template>
  <q-layout view="lHh Lpr lFf">
    <MainHeaderComponent />
    <q-page-container>
      <div class="notFound">
        <div class="notFound__block">
            <div class="notFound__block-text">
              <div class="notFound__label">404</div>
              <div class="notFound__text-box">
                <div class="notFound__title">Страница не найдена</div>
                <div class="notFound__subtitle">Воспользуйтесь меню, чтобы заказать доставку<br>
                   свежих и вкусных блюд от ПиццеРио</div>
              </div>
              <a href="/">
              <customButton ButtonText="Перейти в меню" ></customButton>
              </a>
            </div>
            <div class="notFound__block-img">
              <img class="notFound__img" src="/images/not-found/notFound.png">
            </div>
        </div>
      </div>
    </q-page-container>
    <MainFooterComponent />
  </q-layout>
</template>
<script setup lang="ts">
import { customButton } from '@shared/ui';
import { MainFooterComponent } from '@widgets/mainFooter';
import { MainHeaderComponent } from '@widgets/mainHeader';
</script>

<style lang="scss">
@import './style.scss';
</style>