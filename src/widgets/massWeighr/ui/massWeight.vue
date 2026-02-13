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

import  {getWeight}  from '@widgets/menuBlock/api/apiService.ts';
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
      const options = await getWeight();
      console.log('Полученные опции:', options); // Для отладки
      const weightOptions = options[this.title] || {};
      console.log('Weight Options:', weightOptions); // Для отладки

      if (weightOptions.length > 0) {
        this.weightOptions = weightOptions;

        this.selectWeight(weightOptions[0].value, weightOptions[0].price, weightOptions[0].weight);
      } else {
        console.warn('Опции веса не найдены для данной категории.');
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
