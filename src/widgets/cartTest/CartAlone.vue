<template>
  <div class="cart-list">
    <Cart :cart="cart" />
  </div>
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
      } catch  {
         alert('Ошибка обновления корзины:'); 
        //console.error('Ошибка получения корзины:', error);
      }
    },
    
    addToCart(product) {
      this.cart.push(product);
      axios.post('http://localhost:3000/cart', product) // Сохранение товара на сервер
    },
    
    async updateCartInDB() {
      try {
        await axios.put('http://localhost:3000/cart', this.cart);
      } catch {
        //console.error('Ошибка обновления корзины:', error);
        alert('Ошибка обновления корзины:'); 
      }
    }
  },
  created() {
    this.fetchCart();
  }
};
</script>
