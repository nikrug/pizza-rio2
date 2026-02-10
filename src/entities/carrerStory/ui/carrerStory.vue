<script setup>
  import {  ref } from 'vue';
  const PopupCarrer =ref(false);
</script>


<template>
    <div class="slider-card">
      <div class="slider-card__text-block">
        <div class="text-block__label-block">
          <img class="slider-img-mobile" src="/images/carrer/WhatsApp-img-mobile.png">
          <div class="text-block__label-block-title">Кристина</div>
          <div class="text-block__label-block-subtitle">оператор колл-центра службы доставки</div>
        </div>
        <div class="text-block__text-block">
          <div>Смена рода деятельности или никогда не поздно попробовать себя в чем-то новом</div>
          <div>Моя карьера в ПиццеРио началась в 2009, когда я пришла официантом на Южку. Как и многие начинающие свой опыт в сфере гостеприимства, приходила на подработку во время летних каникул. Но меня настолько захватила атмосфера общепита, что это случайное знакомство переросло в многолетнюю карьерную историю. После официанта, был переход на должность кассира – смена деятельности, зарплата выше и общение с гостями – привлекло меня. В 2011 году открывалось ПиццеРио на Говорова и мне предложили должность менеджера смены там. Было очень волнительно – новая должность, новое заведение, новая команда – большая ответственность! Но в то же время приятно и ценно, что меня заметили и предложили повышение. Спустя годы, набравшись опыта решила делится своими знаниями с новенькими сотрудниками и перешла на должность сервис-менеджера. Я как учитель, встречала первоклашек – стажёров и знакомила их с ПиццеРио. Приятно наблюдать как «вчерашние» стажёры, в которых я вкладывалась делают свою карьеру в ПиццеРио. Пандемия внесла свою корректировку в размеренную жизнь компании. И так случилось, что теперь я принимаю заказы в кол-центре Службы Доставки ПиццеРио. Да, оператор Кристина, которую Вы слышите при оформлении доставки это я! ПиццеРио дало мне не только карьерный опыт и рост, но и много друзей и даже любовь. В компании я познакомилась со своим бедующем мужем. Люблю ПиццеРио за качественные и вкусные блюда, за уважительное отношение к своему персоналу и трепетное отношение к гостям. Моё любимое блюдо в ПиццеРио – молочный коктейль! ПиццеРио ван лав ❤️</div>
        </div>
        <div class="display-none-descktop" @click="PopupCarrer=!PopupCarrer">Читать историю</div>

        
      </div>
      <div class="slider-card__img-block">
        <picture>
          <source srcset="/images/carrer/WhatsApp-img-desktop.png" media="(min-width: 1280px)">
          <source srcset="/images/carrer/WhatsApp-img-tablet.png" media="(min-width: 768px)">
          
          <img class="display-none" src="/images/carrer/image-small.png" alt="Описание изображения" />
          <div class="display-none">Любимое блюдо:</div>
          <div class="display-none">Фирменный пончик с ванильной начинкой</div>
        </picture>
      </div>
    </div>
    <div v-show="PopupCarrer" class="popup">
            <div class="popup-overlay" @mousedown="PopupCarrer = false">
              <div class="popup-content" @mousedown.stop>
                <div class="popup__close">
                  <span class="close-button" @click="PopupCarrer = !PopupCarrer"><img src="/images/headers/icon-Close.svg"></span>
                </div>

              </div>
            </div>
    </div>

</template>

  
<style lang="scss">
@import './style.scss';

</style>