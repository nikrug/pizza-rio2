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

    <div v-show="selectedCounter === 'counter1'">
      <slot name="counter1"></slot>
    </div>
    <div v-show="selectedCounter === 'counter2'">
      <slot name="counter2"></slot>
    </div>

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
import axiosInstance from '@widgets/menuBlock/api/axiosInstance';

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
      showCartButton: false,
    };
  },
  mounted() {
    this.fetchWeightOptions();
  },
  methods: {
    async fetchWeightOptions() {
      try {
        const response = await axiosInstance.get('/massWeight');
        const options = response.data[this.title] || [];
        
        if (options.length > 0) {
          this.weightOptions = options;
          this.selectWeight(options[0].value, options[0].price, options[0].weight);
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    },
    selectWeight(value, price, weight) {
      if (this.selectedWeight === value) {
        return;
      }

      this.selectedWeight = value;
      this.totalPrice = price;

      // Показываем кнопку корзины
      this.showCartButton = true;
      setTimeout(() => {
        this.showCartButton = false;
      }, 10);

      // Переключаем счетчики
      this.selectedCounter = this.selectedCounter === 'counter1' ? 'counter2' : 'counter1';

      // Эмитим данные о весе
      this.$emit('update-price', { title: this.title, price, value, weight });
      this.$emit('update-weight', { weight, itemId: this.title });
    }
  }
};
</script>

<style lang="scss">
@import "./style";
// Здесь можно добавить стили, если нужно.
</style>
