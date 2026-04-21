<script setup lang="ts">
import { ref, watch } from 'vue';

import { MaskInput } from 'vue-3-mask';


const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  inputTextLabel: {
    type: String,
    default: 'Пароль',
  },
  inputLabel: {
    type: String,
    default: 'input-label',
  },
  inputPlaceholder: {
    type: String,
    default: 'Введите пароль',
  },
  passwordButton: {
    type: Boolean,
    default: false,
  },
  inputType: {
    type: String,
    default: 'text',
  },
  inputSubtext: {
    type: String,
    default: '',
  },
  maxLength: {
    type: Number,
    default: 20,
  },
  formSubmitted: {
    type: Boolean,
    default: false,
  },
  isPhoneInput: {  
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);
const password = ref(props.modelValue);
const showPassword = ref(false);

// Следим за внешними изменениями (от родителя)
watch(() => props.modelValue, (newVal) => {
  password.value = newVal;
});

// Следим за внутренними изменениями (ввод пользователя)
watch(password, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<template>
  <div class="input">
    <div :class="inputLabel">{{ inputTextLabel }}</div>
    <!-- Внутри <template> вашего inputText.vue -->
    <div class="input__container">
      <!-- Если передан флаг isPhoneInput, показываем маску -->
      <MaskInput
        v-if="isPhoneInput"
        v-model="password" 
        mask="+7 (###) ###-##-##"
        class="input-text"
        :class="{ 'error': formSubmitted && !password }"
        :placeholder="inputPlaceholder"
      />

      <!-- Иначе обычный ввод -->
      <input
        v-else
        :type="showPassword ? 'text' : inputType"
        class="input-text"
        :class="{ 'error': formSubmitted && !password }"
        :placeholder="inputPlaceholder"
        v-model="password"
        :maxlength="maxLength"
      />
    </div>
    <slot></slot>
    <div class="input-subtext">{{ inputSubtext }}</div>
  </div>
</template>

<style lang="scss">
@import "./style";
</style>
