<template>
  <div>
    <Cart 
      :cart="cart" 
      @remove-item="removeFromCart" 
      @update-cart="updateCart" 
    />
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
  mounted() {
    this.loadCart();
  },
  methods: {
    async loadCart() {
      try {
        const response = await axios.get('http://localhost:3000/cart');
        // Фильтруем пустые или некорректные элементы
        this.cart = response.data.filter(item => item.id && item.quantity > 0); 
      } catch  {
      //  console.error('Error loading cart:', error);
       alert('Ошибка обновления корзины:'); 
      }
    },

    updateCart(updatedItem) {
      const existingItem = this.cart.find(item => item.id === updatedItem.id);
      if (existingItem) {
        existingItem.quantity = updatedItem.quantity;
        this.updateDatabase(existingItem);
      } else {
        this.cart.push(updatedItem);
        this.addToDatabase(updatedItem);
      }
    },
    
    removeFromCart(itemId) {
      this.cart = this.cart.filter(item => item.id !== itemId);
      this.deleteFromDatabase(itemId);
    },
    
    async addToDatabase(product) {
      if (product && product.id) { // Проверка на корректность продукта
        try {
          await axios.post('http://localhost:3000/cart', { ...product });
         // console.log('Product added to cart');
          alert('Ошибка обновления корзины:'); 
        } catch  {
          //console.error('Error adding product to cart:', error);
           alert('Ошибка обновления корзины:'); 
        }
      }
    },
    
    async updateDatabase(item) {
      try {
        await axios.put(`http://localhost:3000/cart/${item.id}`, item);
        //console.log('Product updated in cart');
         alert('Ошибка обновления корзины:'); 
      } catch  {
        //console.error('Error updating product in cart:', error);
         alert('Ошибка обновления корзины:'); 
      }
    },
    
    async deleteFromDatabase(itemId) {
      try {
        await axios.delete(`http://localhost:3000/cart/${itemId}`);
       // console.log('Product removed from cart');
        alert('Ошибка удаления из корзины:'); 
      } catch  {
       // console.error('Error removing product from cart:', error);
        alert('Ошибка удаления из корзины:'); 
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
