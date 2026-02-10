<template>
  <div class="input-radioButton__block" @click="toggleCheckbox">
    <input
      class="input-radioButton"
      type="radio"
      :value="value"
      name="custom-radio-group" 
      hidden
      :checked="isChecked"
      @change="toggleCheckbox"
    />
    <div class="custom-radioButton" :class="{ active: isChecked }"></div>
    <div class="input-radioButton__label">
      <div :class="{ 'active': isChecked }" class="input-radioButton__text">{{ label }}</div>
      <div :class="{ 'active': isChecked }" class="input-radioButton__sub-text">{{ sublabel }}</div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { computed, defineProps, defineEmits } from 'vue';
// Определяем пропсы
const props = defineProps<{
  modelValue: string;   // Значение из родительского компонента
  value: string;        // Значение этой радио-кнопки
  label: string;        // Подпись к радио-кнопке
  sublabel:string;
}>();


// Определяем emits
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void; // Эмитируем событие при изменении значения
}>();

// Определяем computed свойство для проверки состояния
const isChecked = computed(() => props.modelValue === props.value);

// Функция для переключения радио-кнопки
function toggleCheckbox() {
  // Эмитируем новое значение только если оно не выбрано
  if (!isChecked.value) {
    emit('update:modelValue', props.value);
  }
}
</script>

<style lang="scss">
@import "./style.scss";

</style>
