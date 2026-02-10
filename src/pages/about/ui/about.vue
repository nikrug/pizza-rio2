<template>
<div class="about">
  <div class="about-list">
    <div class="about__title">О компании</div>
    <div class="about__slider">
        <div class="about__text-block-img">
            <div class="about__label">«ПиццеРио» — вкусные и разнообразные блюда по демократичным ценам!</div>
            <div class="about__text">Нашей кухне присущ интернациональный вкус — именно у нас вы можете попробовать традиционные блюда Северной и Центральной Америки!</div>
                
        </div>
        <div class="about__swiper-block"> 
        <swiper 
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        :loop="true"
        class="swiper-top"
        >
        <swiper-slide class="swiper-slide-top"><img src="/images/about/cake.jpg" /></swiper-slide>
        <swiper-slide class="swiper-slide-top"><img src="/images/about/vase.jpg" /></swiper-slide>
        <swiper-slide class="swiper-slide-top"><img src="/images/about/desert.png" /></swiper-slide>
        <swiper-slide class="swiper-slide-top"><img src="/images/about/beri-peki.jpg" /></swiper-slide>
        <swiper-slide class="swiper-slide-top"><img src="/images/about/pizza.png" /></swiper-slide>
        </swiper>
        
        <swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        :slidesPerView="5"
        :freeMode="true"
        :loop="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="swiper-bottom"
        >
        <swiper-slide><img class="swiper-slide-bottom" src="/images/about/cake.jpg" /></swiper-slide>
        <swiper-slide><img class="swiper-slide-bottom" src="/images/about/vase.jpg" /></swiper-slide>
        <swiper-slide><img class="swiper-slide-bottom" src="/images/about/desert.png" /></swiper-slide>
        <swiper-slide><img class="swiper-slide-bottom" src="/images/about/beri-peki.jpg" /></swiper-slide>
        <swiper-slide><img class="swiper-slide-bottom" src="/images/about/pizza.png" /></swiper-slide>
        </swiper>
        </div>

        </div> 
    <div class="about__block">
        <div class="about__text-block">
            <div class="about__text-box">
                <div class="about__label-production">О продукции</div>
                <div class="about__text-production">В нашем ресторане продаётся самая<br>лучшая американская пицца!</div>
                <div class="about__text-production">Наша пицца отличается пышным слоем дрожжевого теста и щедрым слоем<br>  начинки.</div>
                <div class="about__text-production">В американской пицце тесто — полноценный участник блюда, и при выборе начинки нужно считаться с его вкусом.</div>
                <div class="about__text-production"> Обильный слой начинки представлен большим количеством ингредиентов, что придаёт пицце больший вес, делает её насыщенной и позволяет дольше сохранять тепло и вкусовые качества.</div> 
            </div>
            <div class="about__text-block-column">
                <div class="about__text-box">
                    <div class="about__label">Мексиканские блюда</div>
                    <div class="about__text">Наши мексиканские закуски не оставят вас равнодушными! Для их приготовления используется традиционная уникальная лепёшка тортилья — мексиканский плоский хлеб. Тортилья в исполнении «ПиццеРио» изготавливается сотрудниками кухни по уникальному рецепту и припекается на тестопрессе при температуре 200 градусов.<br> В древние времена тортилья служила мексиканцам и тарелкой, и ложкой. Но в современном мире — это не главное достоинство мексиканских блюд, гораздо важнее начинка. Благодаря простой и удобной основе (тортилья) мы придумали много оригинальных, невероятно вкусных и разнообразных начинок! Мы уверены, что сможем предложить вам мексиканскую закуску по вкусу!</div>
                </div>
                <div class="about__text-box">
                    <div class="about__label">Наши десерты</div>
                    <div class="about__text">А также «ПиццеРио» славится своими молочными коктейлями! Это действительно одни из самых густых и вкусных коктейлей в городе Томске!<br> Наши десерты собственного производства, которые мы готовим для вас с любовью каждый день в нашей кондитерской.</div>
                </div>
                <div class="about__text-box">
                    <div class="about__label">Праздники у нас</div>
                    <div class="about__text">И это далеко не все блюда и напитки, которые мы можем вам предложить! Добавьте к этому дружелюбную обстановку, которая обеспечивает благоприятную атмосферу для вашего пребывания в «ПиццеРио», и получится настоящий праздник, не только для живота, но и для души!</div>
                </div>
            </div>
        </div>
        <div class="about__text-block">
            <div class="about__text-box">
                <div class="about__text-production">О качестве</div>
                <div class="about__text">Что же такое качество? Для себя в «ПиццеРио» мы характеризуем это как, прежде всего качественные, свежие продукты, приготовленные таким образом, чтобы вызвать самые лучшие вкусовые и визуальные впечатления о нашей продукции. Мы верим, что именно это способствует тому, что наши Гости ходят к нам снова и снова.</div>
                <div class="about__text">Именно поэтому один из основных принципов работы «ПиццеРио», основывается на том, что качество всей продукции для производства ингредиентов и напитков — необходимая составляющая каждодневной работы и это правило должно соблюдаться всегда.</div>
                <div class="about__text">За годы работы все проведённые мероприятия, политика производства, постоянное обновление оборудования способствовали тому, что мы на практике осуществляем ежедневный контроль качества всей продукции.</div>
                <div class="about__text">Все кулинарные цехи, где производится наша продукция, соответствуют государственным санитарно-эпидемиологическим правилам и нормативам. Вся продукция декларирована и соответствует стандарту организации, проходит лабораторно-инструментальные исследования, согласно графику по программе производственного контроля качества продукции. Для достижения наилучших результатов используются передовые технологии и современное оборудование.</div>
            </div>
            <img src="/images/about/desert.png" alt="Десерт">
        </div>
    </div>
</div> 
</div>
</template>

<script>
import { ref } from 'vue';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './style.scss';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>


<style lang="scss" scoped>
@import './style.scss';
@import '/node_modules/swiper/swiper-bundle.min.css';
</style>



