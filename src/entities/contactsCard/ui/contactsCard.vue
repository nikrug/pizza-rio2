<script setup>
const props = defineProps({
  contactsName: {
    type: String,
    default:'ул. Сергея Лазо, 7',
  },
  contactsNumber: {
    type: String,
    default:'+7(3822) 90 25 05',
  },
});
</script>


<template>
    <div class="contacts__card">
        <div class="contacts__card-info">
        <slot class="contacts__map"></slot>
        <div class="contacts__card-text">
            <div class="contacts__adress-text">{{ props.contactsName }}</div>
            <div class="contacts__number-block">
                <div>Контактный телефон</div>
                <div class="contacts__number-text">{{ props.contactsNumber }}</div>
            </div>
            <div class="contacts__work-time-block">
                <div class="contacts__yellow-text">Режим работы</div>
                    <div class="contacs__work">
                        <div class="contacts__work-date">
                            <div>Торговый зал</div>
                            <div>
                                вс-чт<br>
                                вс-чт<br>
                                вс-чт<br>
                            </div>
                        </div>
                        <div class="contacts__work-time">
                            <div>
                                 с 9:00 до 02:00<br>
                                 с 9:00 до 03:00
                            </div> 
                        </div>

                    </div>
                    <div class="contacs__work">
                        <div class="contacts__work-date-out">
                            <div>На заказы с собой</div>
                            <div>
                                вс-чт<br>
                                вс-чт<br>
                                вс-чт<br>
                            </div>
                        </div>
                        <div class="contacts__work-time">
                            <div>
                                 с 9:00 до 02:00<br>
                                 с 9:00 до 03:00
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
        </div>
        <div class="contacts__card-img-block">
            <img class="contacts__img" src="/images/contacts/contacts_1.jpg">
            <img class="contacts__img" src="/images/contacts/contacts_2.jpg">
            <img class="contacts__img" src="/images/contacts/contacts_3.jpg">
        </div>
    </div>
</template>

  
<style lang="scss">
@import './style.scss';

</style>