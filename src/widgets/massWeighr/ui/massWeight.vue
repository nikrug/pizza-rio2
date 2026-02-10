<template>
  <div :class="menuClass">
    <div :class="CustomClass">
      <button
        class="option-button"
        v-for="option in weightOptions"
        :key="option.weight"
        :class="{'active': selectedWeight === option.value}"
        @click="selectWeight(option.value, option.price, option.weight)"
      >
        {{ option.weight }}
  
      </button>
    </div>

    <slot v-if="selectedCounter === 'counter1'" name="counter1"></slot>
    <slot v-else-if="selectedCounter === 'counter2'" name="counter2"></slot>

    <div :class="CustomInfoClass">
      <div
        class="options-info-text"
        v-for="option in weightOptions"
        :key="option.weight"
      >
        <div class="options-info-text">{{ option.weight }}</div>
        {{ option.price }} ₽
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PizzaWeightSelector',
  props: {
    title: {
      type: String,
      default: 'Выберите граммовку пиццы',
    },
    menuClass: {
      type: String,
      default: 'menu__option',
    },
    CustomClass: {
      type: String,
      default: 'options',
    },
    CustomInfoClass: {
      type: String,
      default: 'options-info',
    },
  },
  data() {
    return {
      selectedCounter: 'counter1',
      selectedWeight: null,
      weightOptions: [],
      totalPrice: 0,
    };
  },
  mounted() {
    this.fetchWeightOptions();
  },
  methods: {
    async fetchWeightOptions() {
      try {
        const response = await axios.get('http://localhost:3000/massWeight');
        const options = response.data[this.title] || [];
        
        if (options.length > 0) {
          this.weightOptions = options;

          // Set initial weight and price
          this.selectWeight(options[0].value, options[0].price, options[0].weight);
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    },

    selectWeight(value, price, weight) {
        this.selectedWeight = value;
        this.totalPrice = price;

        // Change counter
        this.selectedCounter = this.selectedCounter === 'counter1' ? 'counter2' : 'counter1';

        // Emit weight data including price and weight
        this.$emit('update-price', { title: this.title, price, value,weight });
        
        // Эмитим значение веса с ID элемента
        this.$emit('update-weight', { weight, itemId: this.title }); // здесь title может быть ID элемента
    }
  },
};
</script>

<style lang="scss">
@import "./style";
</style>
