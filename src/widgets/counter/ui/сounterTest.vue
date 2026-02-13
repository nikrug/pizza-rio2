<template>
  <div class="counter">
    <div class="count-text" v-if="count < 1">
      {{ price }} ₽

      
      
    </div>
    <div class="count-text" v-if="count > 0" :class="{ 'active-text': count > 0 }">
      {{ total }} ₽
    </div>
    <button class="basket-button" v-if="count < 1" @click="handleAddToCart">В корзину</button>
    <div class="buttons" v-if="count > 0" :class="{ 'buttons-active': count > 0 }">
      <button class="count-button" @click="handleDeleteToCart">-</button>
      <div class="count-text-button">{{ count }}</div>
      <button class="count-button" @click="handleAddToCart">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted } from 'vue';


const props = defineProps({
  price: {
    type: Number,
    default: 0,
  },
  label: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  onAddToCart: {
    type: Function,
    default: null,
  },
  onDeleteToCart: {
    type: Function,
    default: null,
  },
});

const count = ref(0);
const total = computed(() => count.value * props.price);
const cartItems = ref([]); // Массив всех элементов в корзине
//let hasErrorOccurred = false; // Флаг для отслеживания состояния ошибки

const loadCartFromDB = async () => {
  try {
    const response = await fetch('http://localhost:3000/cart');
    cartItems.value = await response.json();
    const existingItem = cartItems.value.find(item => item.id === props.id);
    count.value = existingItem ? existingItem.count : 0; // Устанавливаем count из БД
  } catch {
    //if (!hasErrorOccurred) { // Проверяем флаг ошибки
    //  hasErrorOccurred = true; // Устанавливаем флаг
    //  alert('Ошибка при загрузке корзины из БД');
    //}
  }
};

const saveToDB = async (item) => {
  try {
    const existingItemIndex = cartItems.value.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex > -1) {
      // Если товар существует, обновляем его количество
      await fetch(`http://localhost:3000/cart/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      // Обновляем локальный массив
      cartItems.value[existingItemIndex].count = item.count;
    } else {
      // Если товара нет, добавляем новую запись
      await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      // Добавляем в локальный массив
      cartItems.value.push(item);
    }
  } catch {
  //  if (!hasErrorOccurred) { // Проверяем флаг ошибки
     // hasErrorOccurred = true; // Устанавливаем флаг
     // alert('Ошибка при сохранении в БД');
   // }
  }
};

const addToCart = async () => {
  count.value++;
  const item = {
    id: props.id,
    count: count.value,
    price: props.price,
    label: props.label,
    imageSrc: props.imageSrc,
    weight: props.weight,
  };
  await saveToDB(item);
  props.onAddToCart();
};

const decrement = async () => {
  if (count.value > 0) {
    count.value--;

    const item = {
      id: props.id,
      count: count.value,
      price: props.price,
      label: props.label,
      imageSrc: props.imageSrc,
      weight: props.weight,
    };
    
    if (count.value === 0) {
      await fetch(`http://localhost:3000/cart/${item.id}`, {
        method: 'DELETE',
      });
      cartItems.value = cartItems.value.filter(cartItem => cartItem.id !== item.id);
      props.onDeleteToCart();
    } else {
      await saveToDB(item);
    }
  }
};

onMounted(loadCartFromDB);

const handleAddToCart = () => {
  addToCart();
};

const handleDeleteToCart = () => {
  decrement();
};
</script>

