<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="header">
        <a href="/">
          <img  src="/images/headers/header-logo.svg">
        </a>
      <q-space />

      <q-space />
      <div class="button-tablet">
      <customButton ButtonText="Вакансии на hh.ru" ButtonStyle="customButton__reverse"></customButton>
      </div>
      <div class="button-desctop">
        <customButton ButtonText="Заполнить анкету"></customButton>
      </div>
      <div class="header__info-text-block">
        <div class="header__telephone-text">+7 3822 34 99 90</div>
        <div class="header__telephone-subtext">телефон отдела кадров</div>
      </div>
      <HeaderDropDown/>
    </q-toolbar>
    <q-page-container>
      <div class="carrer">
        <div class="carrer__body">
          <div class="carrer__welcome">
            <div class="carrer__welcome-label">Карьера в ПиццеРио </div>
            <div class="carrer__welcome-card-block">
              <picture>
                <source media="(min-width: 1300px)" srcset="/images/carrer/greetings-sign.svg">
                <source media="(min-width: 1268px)" srcset="/images/carrer/greetings-sign-tablet.svg">
                <img  src="/images/carrer/greetings-sign.svg" >
              </picture>
              <div class="carrer__welcome-text-block">
                <div class="carrer__welcome-text">
                  Мы не просто пиццерия, для многих томичей мы стали настоящей легендой,
                  благодаря сохранению знакомых вкусов кесадий,
                  американской пиццы и густых молочных коктейлей.
                </div>
                <div class="carrer__welcome-text">
                  Присоединяйся к команде, чтобы радовать томичей любимыми блюдами вместе!
                </div>
              </div>
            </div>
          </div>
          <video class="carrer__video"  controls>
            <source src="/images/carrer/video1.mp4" type="video/mp4">
          </video>

          <video class="carrer__video"  controls>
            <source src="/images/carrer/video2.mp4" type="video/mp4">
          </video>
          <div class="carrer__slider">
            <div class="carrer__slider-img-block">
              <img class="carrer__slider-img" src="/images/carrer/pointer-down-desktop.svg">
              <img src="/images/carrer/carrer-logo-desktop.svg">
            </div>

            <swiper
              :slidesPerView="1"
              :spaceBetween="10"
              :loop="true"
              :pagination="{
                clickable: true,
                el:'.swiper-pagination',
                type:'bullets'
              }"
              :navigation="true"
              :modules="modules"
              class="mySwiperr"
            >
              <swiper-slide class="swiper-slide"> <carrerStory></carrerStory></swiper-slide
              ><swiper-slide> <carrerStory></carrerStory></swiper-slide
              ><swiper-slide> <carrerStory></carrerStory></swiper-slide
              ><swiper-slide> <carrerStory></carrerStory></swiper-slide
              ><swiper-slide> <carrerStory></carrerStory></swiper-slide
              ><swiper-slide> <carrerStory></carrerStory></swiper-slide
              ><swiper-slide> <carrerStory></carrerStory></swiper-slide
              ><swiper-slide> <carrerStory></carrerStory></swiper-slide
              ><swiper-slide> <carrerStory></carrerStory></swiper-slide>
              <div class="swiper-pagination"></div>
            </swiper>

            </div>
        <div class="carrer__comments">
        <div class="carrer__comments-label">Впечатление о первом дне</div>
          <div class="carrer__comments-reply">
            <carrerComment 
              commentImgclass="carrier__coment-img-none" 
              commentTitle=""
              commentImgsee=""
              commentTextBox="carrier__coment-text-box2"
              commentText="Друзья! Расскажите, пожалуйста, о своем первом дне в ПиццеРио!" 
              commentTime="13:17">
            </carrerComment>
          </div>
          <carrerComment></carrerComment>

          <carrerComment 
          commentImg="/images/carrer/Alena.png" 
          commentTitle="Алёна"
          commentText="Запомнилось количество супов, в которых я утонула... Было сложно, но мне понравился процесс работы" 
          commentTime="13:25">
        </carrerComment>

        <carrerComment 
          commentImg="/images/carrer/Ola.png" 
          commentTitle="Оля"
          commentText="Была в шоке от того, что приходили много гостей) Запомнился дружный коллектив, потому что все помогали друг другу" 
          commentTime="13:37">
        </carrerComment>

        <carrerComment 
          commentImg="/images/carrer/Tanya.png" 
          commentTitle="Танюша"
          commentText="Вкусный запах заведения, коллектив дружный и приветливый. Было очень интересно побыть со стороны работника" 
          commentTime="13:45">
        </carrerComment>

        <carrerComment 
          commentImg="/images/carrer/Vova.png" 
          commentTitle="Вова"
          commentText="Меня удивило не стандартное обслуживание Гостей, то есть мы не подходим к столикам, не берем заказы. Запомнились коллеги-учителя (к сожалению которые сейчас не работают).
          Простота выполнения функций. Хороший и активный персонал, с которым в рабочее и внерабочее время приятно проводить время и общаться" 
          commentTime="14:15">
        </carrerComment>

        <div class="carrer__comments-reply">
            <carrerComment 
              commentImgclass="carrier__coment-img-none" 
              commentTitle=""
              commentImgsee=""
              commentTextBox="carrier__coment-text-box2"
              commentText="Спасибо! Классно работать вместе с вами! Сейчас добавлю новенького." 
              commentTime="14:17">
            </carrerComment>
        </div>
        <div class="carrer__comments-add-text">
          <div>ПиццеРио добавил Коля</div>
        </div>
        </div>
        <div class="carrer__head-hunter">
          <picture>
            <source media="(min-width: 1300px)" srcset="/images/carrer/join-sign.svg">
            <source media="(min-width: 1268px)" srcset="/images/carrer/join-sign-tablet.svg">
            <img  src="/images/carrer/join-sign.svg" >
          </picture>
          <picture>
            <source media="(min-width: 1200px)" srcset="images/carrer/pointer-up-desktop.svg">
            <source media="(min-width: 768px)" srcset="images/carrer/pointer-up-tablet.svg">
            <img class="carrer__head-hunter-img" src="images/carrer/pointer-up-desktop.svg" alt="Описание изображения">
          </picture>
          <div class="carrer__head-hunter-text-block">
            <div>тут: </div>
            <a href="https://tomsk.hh.ru/">
              <img src="/images/carrer/hh.ru__min_ 2.svg">
            </a>
          </div>
        </div>
        </div>
      </div>
    </q-page-container>
    <MainFooterComponent />
  </q-layout>
</template>

<script setup lang="ts">
import { carrerComment } from '@entities/carrerComment';
import carrerStory from '@entities/carrerStory/ui/carrerStory.vue';
import { customButton } from '@shared/ui';
import { MainFooterComponent } from '@widgets/mainFooter';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

  // Экспорируем необходимые компоненты и модули
  const modules = [Pagination, Navigation];

</script>

<style lang="scss">
@import '/node_modules/swiper/swiper-bundle.min.css';
@import './style.scss';

</style>