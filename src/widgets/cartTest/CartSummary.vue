<template>

    <Cart CartListClass="inviscible" PriceClass="price-class" :cart="cart" />

</template>

<script>
import axios from 'axios';

import Cart from './Cart.vue';

export default {
  components: {
    Cart
  },
  data() {
    return {
      cart: []
    };
  },
  methods: {
    async fetchCart() {
      try {
        const response = await axios.get('http://localhost:3000/cart');
        this.cart = response.data;
      } catch {
        alert('Ошибка обновления корзины'); // Замените на ваше уведомление
       // console.error('Ошибка получения корзины:', error);
      }
    },
    
    addToCart(product) {
      this.cart.push(product);
      axios.post('http://localhost:3000/cart', product) // Сохранение товара на сервер

    },
    
    async updateCartInDB() {
      try {
        await axios.put('http://localhost:3000/cart', this.cart);
      } catch  {
      alert('Ошибка обновления корзины'); // Замените на ваше уведомление
      //  console.error('Ошибка обновления корзины:', error);
      }
    }
  },
  created() {
    this.fetchCart();
  }
};
</script>

<style>
  .inviscible{
    display: none;
  }
  .price-class{
     background:none;
  }

</style>
