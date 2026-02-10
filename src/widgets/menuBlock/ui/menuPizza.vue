<template>

  <div>
    
    <MenuSection 
      :menuItems="pizza"
      menuLabel="Пицца"
      menuLabelId="Pizza"
    />
    <MenuSection 
      :menuItems="BeriPeki" 
      menuLabel="Заготовка пиццы «Бери-пеки»" 
      menuLabelId="BeriPeki" 
    />
    <MenuSection 
      :menuItems="Snacks" 
      menuLabel="Закуски" 
      menuLabelId="Snacks" 
    />
    <MenuSection 
      :menuItems="Mexican" 
      menuLabel="Мексиканские блюда" 
      menuLabelId="Mexican" 
    />
    <MenuSection 
      :menuItems="Salat" 
      menuLabel="Салаты" 
      menuLabelId="Salat" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import MenuSection from '@widgets/menuBlock/ui/menuSection.vue';

import { getPizzas, getMexican,getBeriPeki,getSalat,getSnacks } from '../api/apiService';
const pizza = ref([]);
const BeriPeki =ref([]);
const Salat =ref([]);
const Snacks =ref([]);
const Mexican = ref([]);


onMounted(async () => {
  try {
    pizza.value = await getPizzas();
  } catch (error) {
    console.error('Error fetching pizzas:', error);
  }

  try {
    BeriPeki.value = await getBeriPeki();
  } catch (error) {
    console.error('Error fetching BeriPeki:', error);
  }

  try {
    Snacks.value = await getSnacks();
  } catch (error) {
    console.error('Error fetching Snacks:', error);
  }

  try {
    Mexican.value = await getMexican();
  } catch (error) {
    console.error('Error fetching Mexicans:', error);
  }

  try {
    Salat.value = await getSalat();
  } catch (error) {
    console.error('Error fetching Salat:', error);
  }
});
</script>
