<script setup>
const props = defineProps({
  ButtonText: {
    type: String,
    default: 'Пароль',
  },
  ButtonStyle: {
    type: String,
    default: 'customButton',
  },

});
</script>

<template>
    <button :class="props.ButtonStyle">
        <slot></slot>
        {{ props.ButtonText }}
    </button>
</template>

<style lang="scss">
@import "./style";
</style>