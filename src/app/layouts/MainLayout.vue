<template>
  <q-layout  view="lHh Lpr lFf">
    <MainHeaderComponent />
    <q-page-container class="layout">
      <div class="content">
        <router-view />
      </div>
    </q-page-container>
    <MainFooterComponent />
  </q-layout>
</template>
<script setup lang="ts">
import { MainFooterComponent } from '@widgets/mainFooter';
import { MainHeaderComponent } from '@widgets/mainHeader';

</script>
