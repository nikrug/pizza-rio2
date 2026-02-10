<template>
  <div :class="[customclass, 'cart-list']">
    <ul>
      <li class="cart-list__item" v-for="item in cartItems" :key="item.id">
        <div class="cart-list__name">
          <img :src="item.imagesrc" alt="Изображение товара" />
          {{ item.name }} 
          
        </div>
        <div class="cart-list__counter">
          <button class="count-button" @click="updateItemQuantity(item, -1)">-</button>
            <div class="count-quantity">{{ item.quantity }}</div>
          <button class="count-button" @click="updateItemQuantity(item, 1)">+</button>
          <span class="count-price">{{ item.price * item.quantity }}₽</span>
        </div>
      </li>
    </ul>
    <div class="cart-list__bottom">
      <inputCheckbox inputCheckboxLabel="Не перезванивать для подтверждения заказа" inputCheckboxSubLabel="(кроме заказов, оформленных впсервые)"></inputCheckbox>
      <div class="cart-list__bottom-total">
        <div>Сумма заказа:</div>
        <div class="total-text">{{ total }}₽</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { inputCheckbox } from '@shared/ui';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imagesrc: string;
  weight:string;
}

const props = defineProps<{
  cartItems: CartItem[];
  onRemoveItem: (id: number) => void; // Функция для удаления элемента из корзины
  customclass?: string; // Добавляем customclass как опциональный пропс
}>();

// Use a ref to create a local cart state
const localCartItems = ref<CartItem[]>(props.cartItems);

const total = computed(() => {
  return localCartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

// Экспортируем computed свойство total
defineExpose({ total });

// Функция для обновления количества товара
const updateItemQuantity = (item: CartItem, delta: number) => {
  const currentItem = localCartItems.value.find(cartItem => cartItem.id === item.id);
  if (currentItem) {
    currentItem.quantity += delta; // Увеличиваем или уменьшаем количество на delta
    if (currentItem.quantity <= 0) {
      props.onRemoveItem(item.id);
      localCartItems.value = localCartItems.value.filter(cartItem => cartItem.id !== item.id);
    }
  }
};


</script>


<style lang="scss">
@import "./style.scss" ;
</style>
