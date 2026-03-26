<script setup lang="ts">
import { ref,  watch, onMounted } from 'vue';

import Cleave from 'cleave.js';

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
const phoneInput = ref(null); // Reference for the phone input

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

watch(password, (newValue) => {
  emit('update:modelValue', newValue);
});

// Initialize Cleave only for phone input
onMounted(() => {
  if (phoneInput.value && props.isPhoneInput) {
    new Cleave(phoneInput.value, {
      prefix: '+7',
      delimiters: [' ', ' ', '-', '-'],
      blocks: [2, 3, 3, 2, 2],
      numericOnly: true
    });
  }
});
</script>

<template>
  <div class="input">
    <div :class="inputLabel">{{ inputTextLabel }}</div>
    <div class="input__container">
      <input
        ref="phoneInput"
        v-if="isPhoneInput" 
        type="text"
        class="input-text"
        :placeholder="inputPlaceholder"
        v-model="password"
        :maxlength="maxLength"
      />
      <input
        v-else
        :type="showPassword ? 'text' : inputType"
        class="input-text"
        :class="{ 'error': formSubmitted && !password }"
        :placeholder="inputPlaceholder"
        v-model="password"
        :maxlength="inputType === 'password' ? maxLength : undefined"
      />
      <div v-if="passwordButton" class="show-button" @click="togglePassword">
        <img class="input__show-img"
          :src="showPassword ? '/images/headers/eye.svg' : '/images/headers/eye-close.svg'"
        />
      </div>
      <div v-else></div>
    </div>
    <slot></slot>
    <div class="input-subtext">{{ inputSubtext }}</div>
  </div>
</template>

<style lang="scss">
@import "./style";
</style>
