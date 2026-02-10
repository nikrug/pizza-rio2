<template>
  <div class="popup-overlay">
    <div class="popup">
      <div class="popup-header">
        <div class="popup-title">Добавить адрес</div>
        <button class="popup-close">
          <img @click="$emit('close')" src="images/office/delete (1).svg">
        </button>
      </div>
      <div class="popup-input">
        <inputText 
          v-model="newAddress.title"
          inputTextLabel="Введите название"
          inputPlaceholder="Домой, На работу" 
          :class="{ 'input-error': titleError }"
          required
        />


        <inputText 
          v-model="newAddress.street"
          inputTextLabel="Улица"
          inputPlaceholder="Название улицы" 
          :class="{ 'input-error': streetError }"
          required
        />


        <div class="row-input">
          <inputText 
            v-model="newAddress.building"
            inputTextLabel="Дом"
            inputPlaceholder="Дом" 
            :class="{ 'input-error': buildingError }"
            required
          />
 

          <inputText 
            v-model="newAddress.apartment"
            inputTextLabel="Кв/Офис"
            inputPlaceholder="Кв/Офис" 
            :class="{ 'input-error': apartmentError }"
          />

        </div>

        <div class="row-input">
          <inputText 
            v-model="newAddress.entrance"
            inputTextLabel="Подъезд"
            inputPlaceholder="Подъезд" 
            :class="{ 'input-error': entranceError }"
          />


          <inputText 
            v-model="newAddress.floor"
            inputTextLabel="Этаж"
            inputPlaceholder="Этаж" 
            :class="{ 'input-error': floorError }"
          />

          <inputText 
            v-model="newAddress.apartment2"
            inputTextLabel="Домофон"
            inputPlaceholder="Домофон" 
            inputSubtext="необязательно"
          />
        </div>
        <div v-if="floorError" class="error-message">{{ floorError }}</div>
      </div>
      <CustomButton @click="addAddress" ButtonText="Сохранить адрес"></CustomButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import CustomButton from '@shared/ui/customButton/customButton.vue';
import inputText from '@shared/ui/inputText/inputText.vue';

export default defineComponent({
  name: 'AddressPopup',
  emits: ['close', 'add'],
  components: {
    inputText,
    CustomButton
  },
  setup(_, { emit }) {
    const newAddress = ref({
      title: '',
      street: '',
      building: '',
      apartment: '',
      entrance: '',
      floor: '',
      apartment2: '',
    });

    const titleError = ref('');
    const streetError = ref('');
    const buildingError = ref('');
    const apartmentError = ref('');
    const entranceError = ref('');
    const floorError = ref('');

    const addAddress = () => {
      // Сброс ошибок перед валидацией
      titleError.value = '';
      streetError.value = '';
      buildingError.value = '';
      apartmentError.value = '';
      entranceError.value = '';
      floorError.value = '';

      // Проверка обязательных полей
      if (!newAddress.value.title) {
        titleError.value = 'Пожалуйста, заполните все обязательные поля';
      }
      if (!newAddress.value.street) {
        streetError.value = 'Пожалуйста, заполните все обязательные поля';
      }
      if (!newAddress.value.building) {
        buildingError.value = 'Пожалуйста, заполните все обязательные поля';
      }

      // Дополнительная валидация
      if (!newAddress.value.apartment) {
        apartmentError.value = 'Пожалуйста, заполните все обязательные поля';
      }
      if (!newAddress.value.entrance) {
        entranceError.value = 'Пожалуйста, заполните все обязательные поля';
      }
      if (!newAddress.value.floor) {
        floorError.value = 'Пожалуйста, заполните все обязательные поля';
      }

      // Если есть ошибки, не отправляем данные
      if (titleError.value || streetError.value || buildingError.value || 
          apartmentError.value || entranceError.value || floorError.value) {
        return;
      }

      // Отправляем новый адрес в родительский компонент
      emit('add', { ...newAddress.value });
      // Сбрасываем поля
      newAddress.value = { title: '', street: '', building: '', apartment: '', entrance: '', floor: '', apartment2: '' };
    };

    return {
      newAddress,
      addAddress,
      titleError,
      streetError,
      buildingError,
      apartmentError,
      entranceError,
      floorError,
    };
  }
});
</script>

<style lang="scss">
@import './style.scss';

</style>
