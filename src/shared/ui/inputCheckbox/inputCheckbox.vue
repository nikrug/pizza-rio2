<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  inputCheckboxLabel: {
    type: String,
    default: 'Заголовок',
  },
  inputCheckboxSubLabel: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Boolean,
    default: false, // Дефолтное значение для v-model
  },
});

const emit = defineEmits(['update:modelValue']); // Эмит для обновления modelValue
const isChecked = ref(props.modelValue); // Локальная реактивная переменная для отслеживания состояния чекбокса

// Синхронизация локального состояния с пропсом modelValue
watch(() => props.modelValue, (newValue) => {
  isChecked.value = newValue;
});

function toggleCheckbox() {
  isChecked.value = !isChecked.value;
  emit('update:modelValue', isChecked.value); // Эмитим новое значение для обновления v-model
}
</script>

<template>
  <div class="input-checkbox__block" @click="toggleCheckbox">
    <input
      class="input-checkbox"
      type="checkbox"
      v-model="isChecked"
      ref="checkbox"
      @change="emit('update:modelValue', isChecked)"
    />
    <div class="custom-checkbox"></div>
    <div class="input-checkbox__label">
      <div class="input-checkbox__text">{{ inputCheckboxLabel }}</div>
      <div class="input-checkbox__sub-text">{{ inputCheckboxSubLabel }}</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style";
</style>
