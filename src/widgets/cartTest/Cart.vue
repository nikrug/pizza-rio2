<template>
  <div :class="CartListClass" v-if="localCart.length > 0"> 
    <div class="cart-list__item" v-for="(item, index) in localCart" :key="item.id">
      <div class="cart-list__name">
        <img :src="item.imageSrc" class="cart-item-image" />
        <div class="cart-list__name-block">
          <div class="count-price">{{item.label}}</div>
          <div>{{item.weight}}</div>
        </div>

      </div>
      <div class="cart-list__counter">
        <div class="cart-list__counter-block">
          <button class="count-button" @click="decreaseItem(index)">-</button>
          <span class="count-quantity">{{ item.count }}</span>
          <button class="count-button" @click="increaseItem(index)">+</button>
        </div>
        <span class="count-price">{{ item.price * item.count }}₽</span>
      </div>
    </div>
    <div class="cart-list__bottom">
      <inputCheckbox inputCheckboxLabel="Не перезванивать для подтверждения заказа" inputCheckboxSubLabel="(кроме заказов, оформленных впервые)"></inputCheckbox>
      <div class="cart-list__bottom-total">
        <div>Сумма заказа:</div>
        <div class="total-text">{{ totalPrice }} ₽</div>
      </div>
    </div>
  </div>
  <div :class="CartListClass" v-else>
    <div>
      <div class="cart-list__bottom">
        <inputCheckbox inputCheckboxLabel="Не перезванивать для подтверждения заказа" inputCheckboxSubLabel="(кроме заказов, оформленных впервые)"></inputCheckbox>
        <div class="cart-list__bottom-total">
          <div>Сумма заказа:</div>
          <div class="total-text">{{ totalPrice }} ₽</div>
        </div>
      </div>
    </div>
  </div>
  <div :class="PriceClass" style="color:white"  v-if="localCart.length > 0">{{ totalPrice }}₽</div>
  <div v-else style="color:white">Корзина</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import { inputCheckbox } from '@shared/ui';
import axios from 'axios';

interface CartItem {
  id: string;
  count: number;
  price: number;
  label: string;
  weight:string;
  imageSrc: string;
}

const props = defineProps<{
  cart: CartItem[];
  CartListClass:{
    type: string,
    default: 'cart-list',
  },
  PriceClass: {
    type: string,
    default: 'invicible',
  },
}>();

const localCart = ref<CartItem[]>([]);
const totalPrice = ref(0);

const calculateTotalPrice = () => {
  totalPrice.value = localCart.value.reduce((total, item) => total + (Number(item.price) * Number(item.count)), 0);
};

watch(() => props.cart, (newVal) => {
  localCart.value = newVal.map(item => ({
    ...item,
    count: item.count ? Number(item.count) : 1,
  })) || [];
  calculateTotalPrice();
}, { immediate: true });



const saveCartToDB = async () => {
  try {
    await Promise.all(localCart.value.map(item =>
      axios.put(`http://localhost:3000/cart/${item.id}`, {
        id: item.id,
        count: item.count,
        price: item.price,
        label: item.label,
        labels: item.label,
        imageSrc: item.imageSrc,
        weight:item.weight,
      })
    ));
    calculateTotalPrice(); // Пересчет общей суммы при сохранении
  } catch  {
    //console.error('Ошибка при сохранении корзины:', error);
    alert('Ошибка при сохранении корзины'); 
  }
};

const increaseItem = async (index: number) => {
  localCart.value[index].count++;
  await saveCartToDB();
};

const decreaseItem = async (index: number) => {
  if (localCart.value[index].count > 1) {
    localCart.value[index].count--;
    await saveCartToDB();
  } else {
    await removeFromCart(localCart.value[index].id);
  }
};

const removeFromCart = async (itemId: string) => {
  const itemIndex = localCart.value.findIndex(item => item.id === itemId);
  if (itemIndex !== -1) {
    localCart.value.splice(itemIndex, 1);
    await axios.delete(`http://localhost:3000/cart/${itemId}`);
    calculateTotalPrice(); // Пересчет общей суммы при удалении
  } else {
    alert('Товар с id ${itemId} не найден в корзине.'); 
   // console.warn(`Товар с id ${itemId} не найден в корзине.`);
  }
};

</script>

<style lang="scss">
@import "./style.scss";

</style>
