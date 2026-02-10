<template>
    <div class="contacts">
        <div class="contacts__list">
        <div class="contacts__label">Контакты</div>
        <ContactsCard >
            <div  style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/67/tomsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Томск</a><a href="https://yandex.ru/maps/67/tomsk/house/ulitsa_sergeya_lazo_7/bEwYdgRiQUUHQFtsfXlwd3xlZA==/?indoorLevel=1&ll=85.034579%2C56.515393&utm_medium=mapframe&utm_source=maps&z=17" style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Сергея Лазо, 7 — Яндекс Карты</a><iframe class="ymaps" src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=85.034579%2C56.515393&mode=whatshere&whatshere%5Bpoint%5D=85.032800%2C56.516060&whatshere%5Bzoom%5D=17&z=17"  frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        </ContactsCard>

        <ContactsCard contactsName="ул. Красноармейская, 31" contactsNumber="+7(3822) 26 44 43">
            <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/67/tomsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Томск</a><a href="https://yandex.ru/maps/67/tomsk/house/krasnoarmeyskaya_ulitsa_31/bE0YfwFlSUIBQFtsfXh2d3RhZQ==/?ll=84.965050%2C56.476813&utm_medium=mapframe&utm_source=maps&z=17.32" style="color:#eee;font-size:12px;position:absolute;top:14px;">Красноармейская улица, 31 — Яндекс Карты</a><iframe class="ymaps"  src="https://yandex.ru/map-widget/v1/?ll=84.965050%2C56.476813&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzYyODcwMhJH0KDQvtGB0YHQuNGPLCDQotC-0LzRgdC6LCDQmtGA0LDRgdC90L7QsNGA0LzQtdC50YHQutCw0Y8g0YPQu9C40YbQsCwgMzEiCg0f7qlCFUToYUI%2C&z=17.32" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        </ContactsCard>

        <ContactsCard contactsName="ул. Красноармейская, 135 (пл. Южная)" contactsNumber="+7(3822) 42 17 79">
           <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/67/tomsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Томск</a><a href="https://yandex.ru/maps/67/tomsk/house/krasnoarmeyskaya_ulitsa_135/bE0YfwBlQE0FQFtsfXh0cnVgYg==/?ll=84.975981%2C56.453936&utm_medium=mapframe&utm_source=maps&z=17.12" style="color:#eee;font-size:12px;position:absolute;top:14px;">Красноармейская улица, 135 — Яндекс Карты</a><iframe class="ymaps"  src="https://yandex.ru/map-widget/v1/?ll=84.975981%2C56.453936&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzYyNjgxMBJI0KDQvtGB0YHQuNGPLCDQotC-0LzRgdC6LCDQmtGA0LDRgdC90L7QsNGA0LzQtdC50YHQutCw0Y8g0YPQu9C40YbQsCwgMTM1IgoNtPOpQhXV0GFC&z=17.12" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        </ContactsCard>

        <ContactsCard contactsName="ул. Говорова, 19в" contactsNumber="+7(3822) 72 55 44">
            <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/67/tomsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Томск</a><a href="https://yandex.ru/maps/67/tomsk/house/ulitsa_govorova_19v/bE0Yfw9lS0IHQFtsfXlxeHViZQ==/?ll=84.985270%2C56.509911&utm_medium=mapframe&utm_source=maps&z=17.12" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты</a><iframe class="ymaps"  src="https://yandex.ru/map-widget/v1/?ll=84.985270%2C56.509911&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDkzMzg3NDYwEjvQoNC-0YHRgdC40Y8sINCi0L7QvNGB0LosINGD0LvQuNGG0LAg0JPQvtCy0L7RgNC-0LLQsCwgMTnQkiIKDXX4qUIVJgpiQg%2C%2C&z=17.12" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        </ContactsCard>
    </div>
    </div>
</template>

<style lang="scss" scoped>
@import './style.scss';

</style>

<script setup lang="ts">
  import ContactsCard from '@entities/contactsCard/ui/contactsCard.vue';
</script>
