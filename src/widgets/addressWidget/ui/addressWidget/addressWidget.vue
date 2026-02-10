<template>
  <div class="address-widget">    
    <div class="address-header">
      <div class="address-title-text">Адреса доставки</div>
      <button class="add-button" @click="showPopup = true" :disabled="addresses.length >= 4">
        Добавить адрес
        <div class="icon_normal-popup"></div>
        <div class="icon_hover-popup"></div>
      </button>
    </div>
    <Transition name="v-faid">
      <AddressPopup v-if="showPopup" @close="closePopup" @add="handleAddAddress" />
    </Transition>
    <div class="address-block">
      <div v-for="(address, index) in addresses" :key="index" class="address-item">
        <div class="address-title">{{ address.title || 'Название' }}
          <button class="delete-button" @click="address.showDeletePopup = !address.showDeletePopup">
          </button>
          <Transition name="v-faid">
            <div v-if="address.showDeletePopup" class="popup-delete">
              Вы действительно хотите безвозвратно удалить этот адрес?
              <div class="popup-delete-button-block">
                <button class="popup-delete-button1" @click="address.showDeletePopup = false">Отмена</button>
                <button class="popup-delete-button2" @click="removeAddress(index)">Удалить</button>
              </div>
            </div>
          </Transition>
        </div>
        
        <div class="address-info">
          <div class="address-info">{{ address.street || 'Адрес' }},
            {{ address.building || 'Номер дома' }},
            {{ address.apartment || 'Квартира' }},
            {{ address.floor }} Этаж,
            {{ address.entrance }} Подъезд,
            {{ address.apartment2 }} Домофон
          </div>
        </div>
      </div>
      <div v-if="addresses.length < 4" class="empty-address-item">
        <div>Ваш адрес</div>
      </div>
      <div v-if="addresses.length < 3" class="empty-address-item">
        <div>Ваш адрес</div>
      </div>
      <div v-if="addresses.length < 2" class="empty-address-item">
        <div>Ваш адрес</div>
      </div>
      <div v-if="addresses.length === 0" class="empty-address-item">
        <div>Ваш адрес</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

import AddressPopup from '@widgets/addressWidget/ui/addressPopup/addressPopup.vue';

interface Address {
  title: string;
  street: string;
  building: string;
  apartment: string;
  floor: string;
  entrance: string;
  apartment2: string;
  showDeletePopup?: boolean; // New property to control delete popup visibility
}

export default defineComponent({
  name: 'AddressWidget',
  components: {
    AddressPopup
  },
  setup() {
    const addresses = ref<Address[]>([]);
    const showPopup = ref(false);

    const loadAddresses = () => {
      const storedAddresses = localStorage.getItem('addresses');
      if (storedAddresses) {
        addresses.value = JSON.parse(storedAddresses);
      }
    };

    const saveAddresses = () => {
      localStorage.setItem('addresses', JSON.stringify(addresses.value));
    };

    const handleAddAddress = (newAddress: Address) => {
      if (addresses.value.length < 4) {
        addresses.value.push({ ...newAddress, showDeletePopup: false }); // Initialize the property
        saveAddresses();
      }
      showPopup.value = false;
    };

    const closePopup = () => {
      showPopup.value = false;
    };

    const removeAddress = (index: number) => {
      addresses.value.splice(index, 1); // Remove the address
      saveAddresses(); // Save changes to local storage
      // No need to access `addresses.value[index]` here
    };

    onMounted(() => {
      loadAddresses();
    });

    return {
      addresses,
      showPopup,
      handleAddAddress,
      closePopup,
      removeAddress
    };
  }
});
</script>

<style lang="scss">
@import './style.scss';


</style>
