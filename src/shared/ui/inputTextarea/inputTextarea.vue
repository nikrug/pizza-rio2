<script setup lang="ts">
import { ref,watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,
    default: 4, // Значение по умолчанию для количества строк
  },
  cols: {
    type: Number,
    default: 50, // Значение по умолчанию для количества столбцов
  },
  placeholder: {
    type: String,
    default: 'Введите текст...', // Значение по умолчанию для плейсхолдера
  },
});

const emit = defineEmits(['update:modelValue']); // Эмит для обновления v-model
const textValue = ref(props.modelValue); // Локальное значение для управления текстом

// Синхронизация значения
watch(textValue, (newValue) => {
  emit('update:modelValue', newValue); // Эмитим новое значение для v-model
});
</script>

<template>
  <textarea
    :rows="rows"
    :cols="cols"
    v-model="textValue" 
    class="textarea__container"
    :placeholder="placeholder"
  ></textarea>
</template>

<style lang="scss">
@import "./style";
</style>