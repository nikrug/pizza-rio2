<template>

    <div :class="CustomClass" >
        <div :class="LinkClass" >
            <img class="scrollDownmenu__logo" src="/images/drop-down-menu/dropdown-logo.svg">
            <a class="scrollDownmenu__list-link" href="#Pizza" @click="handleClick('Pizza')">Пицца </a>
            <a class="scrollDownmenu__list-link" href="#BeriPeki" @click="handleClick('BeriPeki')">Заготовка пиццы «Бери-пеки»</a>
            <a class="scrollDownmenu__list-link" href="#Snacks"  @click="handleClick('Snacks')">Закуски</a>
            <a class="scrollDownmenu__list-link" href="#Mexican" @click="handleClick('Mexican')">Мексиканские блюда</a>
            <a class="scrollDownmenu__list-link" href="#Salat" @click="handleClick('Salat') ">Салаты</a>
            <a class="scrollDownmenu__list-link" href="/">Супы</a>
            <a class="scrollDownmenu__list-link" href="/">Напитки</a>
            <a class="scrollDownmenu__list-link" href="/">Десерты</a>
            <a class="scrollDownmenu__list-link" href="/">Другое</a>
            <router-link :to="{ path: '/cart' }" :class="ButtonClass">
                  <CartButton :cartItems="cartItems" :onRemoveItem="removeFromCart" />
            </router-link>
        </div>
    </div>
</template>


<script setup lang="ts">
import { onMounted, onBeforeUnmount,ref } from 'vue';

import CartButton from '@widgets/cartButton/ui/cartButton.vue';


const props = defineProps({
  CustomClass: {
    type: String,
    default: 'scrollDownmenu',
  },
  
  ButtonClass:{
    type: String,
    default: '',
  },
  LinkClass: {
    type: String,
    default: 'scrollDownmenu__list',
  },

    // Новый проп для передачи дополнительного действия
  onLinkClick: {
    type: Function,
    default: null,
  }
});

const cartItems = ref<{ id: number, name: string, price: number, quantity: number,imagesrc:string, }[]>([]);

// Функция удаления элемента из корзины
const removeFromCart = (id: number) => {
  const index = cartItems.value.findIndex(item => item.id === id);
  if (index !== -1) {
    cartItems.value.splice(index, 1); // Удаляем элемент из массива
  }
};

// Функция для плавной прокрутки
const smoothScrollTo = (target: number): void => {
  const startPosition = window.scrollY;
  const distance = target - startPosition;
  const duration = 600; // Продолжительность анимации в мс
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Ease-in-out функция
    const ease = (t: number) => (t < 0.5) ? 2 * t * t : -1 + (4 - 2 * t) * t;

    window.scrollTo(0, startPosition + distance * ease(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Функция для прокрутки к элементу
const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 150; // Замените на нужное вам смещение
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    smoothScrollTo(offsetPosition);
  }
};

// Обработчик клика
const handleClick = (sectionId: string): void => {
  scrollToElement(sectionId);
  
  // Выполняем дополнительное действие, если оно передано в пропсах
  if (props.onLinkClick) {
    props.onLinkClick();
  }
};

// Обработчик прокрутки
const handleScroll = (): void => {
  const scrollPosition = window.scrollY;
  const scrollDownmenuList = document.querySelector('.scrollDownmenu__list') as HTMLElement;
  const scrollDownmenuLogo = document.querySelector('.scrollDownmenu__logo') as HTMLElement;
    const scrollDownmenuLink = document.querySelector('.scrollDownmenu__list-link') as HTMLElement;

  if (scrollPosition > 100) {
    scrollDownmenuList.classList.add('active');
    scrollDownmenuLogo.classList.add('active');
    scrollDownmenuLink.classList.add('active');
  } else {
    scrollDownmenuList.classList.remove('active');
    scrollDownmenuLogo.classList.remove('active');
    scrollDownmenuLink.classList.add('active');
  }
};

// Привязываем обработчик события
window.addEventListener('scroll', handleScroll);

// Обработка монтирования компонента
onMounted(() => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    // Задержка на случай, если элемент загружается асинхронно
    setTimeout(() => {
      scrollToElement(hash);
    }, 100); // Настройте задержку по мере необходимости
  }
});

// Убираем обработчик при размонтировании
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


<style lang="scss" scoped>
@import './style.scss';

</style>