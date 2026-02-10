<template>
  <div>
    <h2>Список товаров</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <span>{{ product.name }} - {{ product.price }} Руб.</span>
        <div v-if="product.showCounter">
          <button @click="decreaseQuantity(product)">-</button>
          <span>{{ product.quantity }}</span>
          <button @click="increaseQuantity(product)">+</button>
        </div>
        <button v-else @click="addToCart(product)">Добавить в корзину</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  mounted() {
    this.loadQuantitiesFromLocalStorage();
  },
  methods: {
    loadQuantitiesFromLocalStorage() {
      this.products.forEach(product => {
        const storedQuantity = localStorage.getItem(`product_${product.id}_quantity`);
        const storedShowCounter = localStorage.getItem(`product_${product.id}_showCounter`);

        if (storedQuantity !== null) {
          product.quantity = parseInt(storedQuantity);
          product.showCounter = storedShowCounter === 'true';
        } else {
          product.quantity = 0;
          product.showCounter = false;
        }

        // Проверяем количество и устанавливаем состояние показывания счетчика
        if (product.quantity === 0) {
          product.showCounter = false;
        }
      });
    },
    updateLocalStorage(product) {
      localStorage.setItem(`product_${product.id}_quantity`, product.quantity);
      localStorage.setItem(`product_${product.id}_showCounter`, product.showCounter);
    },
    increaseQuantity(product) {
      product.quantity++;
      this.updateLocalStorage(product);
      this.$emit('update-product-quantity', product);
      this.$emit('update-cart', product);
    },
    decreaseQuantity(product) {
      if (product.quantity > 0) {
        product.quantity--;
        this.updateLocalStorage(product);
        this.$emit('update-product-quantity', product);
        this.$emit('update-cart', product);

        // Если количество стало 0, скрываем счетчик и устанавливаем quantity на 0
        if (product.quantity === 0) {
          product.showCounter = false;
          this.updateLocalStorage(product);
        }
      }
    },
    addToCart(product) {
      product.showCounter = true;
      product.quantity = 1; // Устанавливаем количество на 1
      this.updateLocalStorage(product);
      this.$emit('add-to-cart', { ...product });
    },
    handleUpdateProductQuantity(id, quantity) {
      const product = this.products.find(p => p.id === id);
      if (product) {
        product.quantity = quantity; // Обновляем количество товара
        // Если количество 0, сбрасываем showCounter
        product.showCounter = quantity > 0;
        this.updateLocalStorage(product);
      }
    }
  },
};
</script>
