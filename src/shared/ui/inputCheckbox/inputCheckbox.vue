<script setup>
import { ref } from 'vue';
const props = defineProps({
  inputCheckboxLabel: {
    type: String,
    default: 'Заголовок',
  },
  inputCheckboxSubLabel: {
    type: String,
    default: '',
  },
});
const isChecked = ref(false);

function toggleCheckbox() {
  isChecked.value = !isChecked.value;
}
</script>

<template>
  <div class="input-checkbox__block" @click="toggleCheckbox">
    <input class="input-checkbox" type="checkbox" v-model="isChecked" ref="checkbox">
    <div class="custom-checkbox" ></div>
    <div class="input-checkbox__label">
      <div class="input-checkbox__text">{{ props.inputCheckboxLabel }}</div>
      <div class="input-checkbox__sub-text">{{ props.inputCheckboxSubLabel }}</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style";
</style>
