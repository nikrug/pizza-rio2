<template>
    <div class="cart" >
        <div class="cart__box">
        <div class="cart__label">Корзина</div>
            <div class="cart__content">
                <CartAlone></CartAlone>
                <form>
                    <div class="cart__adres">
                        <div class="popup__choose-block">
                            <span class="popup__text" :class="{'active':  delivery}" @click="yourown = false,  delivery = true">
                                Вход
                            </span>
                            <span class="popup__text" :class="{'active': yourown}"  @click="yourown = true,  delivery = false">
                                Регистрация

                            </span>
                        </div>
                        <div class="cart__adres-delivery" v-show="delivery">
                        <inputText inputPlaceholder="+7 (923)-640-12-98" inputTextLabel="Введите номер телефона"></inputText>
                        <inputText inputPlaceholder="Ваши адреса" inputTextLabel="Адрес доставки"></inputText>
                        <inputText inputPlaceholder="Улица" inputTextLabel="Улица"></inputText>
                        <div class="cart__adres-street">
                            <inputText inputPlaceholder="Дом" inputTextLabel="Дом" inputLabel="input-label-small"></inputText>
                            <inputText inputPlaceholder="Кв/Офис" inputTextLabel="Кв/Офис" inputLabel="input-label-small"></inputText>
                        </div>
                        <div class="cart__adres-house">
                            <inputText inputPlaceholder="Подъезд" inputTextLabel="Подъезд" inputLabel="input-label-small"></inputText>
                            <inputText inputPlaceholder="Этаж" inputTextLabel="Этаж" inputLabel="input-label-small"></inputText>
                            <inputText inputPlaceholder="Домофон" inputTextLabel="Домофон" inputSubtext="необязательно" inputLabel="input-label-small"></inputText>
                        </div> 
                            <div class="cart__radioButtons">
                                <div class="cart__label-small">Способ оплаты</div>
                                <inputRadiobutton  v-model="selectedDeliveryOption" value="option1" label="Оплата пластиковой картой в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedDeliveryOption" value="option2" label="Оплата наличными в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedDeliveryOption" value="option3" label="Оплата на сайте" sublabel="Скидки по акциям Доставки неактивны при оплате на сайте"/>
                            </div>
                            <div class="cart__comment">
                                <div class="cart__comment-textblock">
                                    <div class="cart__comment-label">Комментарии к заказу</div>
                                    <div class="cart__comment-sublabel">необязательно</div>
                                </div>
                                <inputTextarea></inputTextarea>
                            </div>
                            <inputCheckbox inputCheckboxLabel="Я согласен на обработку персональных данных"></inputCheckbox>
                                  <button class="cart__customButton">
                                        Отправить заказ - <CartSummary></CartSummary>
                                    </button>
                        </div>
                        <div class="cart__adres-delivery" v-show="yourown">
                        <inputText inputPlaceholder="+7 (923)-640-12-98" inputTextLabel="Введите номер телефона"></inputText>
                            <div class="cart__radioButtons">
                                <div class="cart__label-small">Адрес самовывоза</div>
                                <inputRadiobutton  v-model="selectedPickupOption" value="option4" label="Оплата пластиковой картой в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedPickupOption" value="option5" label="Оплата наличными в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedPickupOption" value="option6" label="Оплата на сайте" sublabel="Скидки по акциям Доставки неактивны при оплате на сайте"/>
                            </div>
                            <div class="cart__radioButtons">
                                <div class="cart__label-small">Способ оплаты</div>
                                <inputRadiobutton  v-model="selectedPaymentOption" value="option7" label="Оплата пластиковой картой в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedPaymentOption" value="option8" label="Оплата наличными в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedPaymentOption" value="option9" label="Оплата на сайте" sublabel="Скидки по акциям Доставки неактивны при оплате на сайте"/>
                            </div>
                            <div class="cart__comment">
                                <div class="cart__comment-textblock">
                                    <div class="cart__comment-label">Комментарии к заказу</div>
                                    <div class="cart__comment-sublabel">необязательно</div>
                                </div>
                                 <inputTextarea></inputTextarea>
                            </div>
                            <inputCheckbox inputCheckboxLabel="Я согласен на обработку персональных данных"></inputCheckbox>
             
                                <cartList :customclass="'invisible'" :cartItems="cartItems" :onRemoveItem="removeFromCart" />
                                  <button class="cart__customButton">
                                        Отправить заказ - <CartSummary></CartSummary>
                                    </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './style.scss';

</style>

<script setup lang="ts">
import { ref } from 'vue';

import { inputText, inputRadiobutton, inputCheckbox, inputTextarea } from '@shared/ui';
import cartList from '@widgets/cartList/ui/cartList.vue';
import CartAlone from '@widgets/cartTest/CartAlone.vue';
import CartSummary from '@widgets/cartTest/CartSummary.vue';


const delivery = ref(true);
const yourown = ref(false);
const selectedDeliveryOption = ref<string>('option1');
const selectedPickupOption = ref<string>('option4');
const selectedPaymentOption = ref<string>('option7');
const cartItems = ref<{ id: number, name: string, price: number, quantity: number, imagesrc: string }[]>([]);

// Функция удаления элемента из корзины
const removeFromCart = (id: number) => {
  const index = cartItems.value.findIndex(item => item.id === id);
  if (index !== -1) {
    cartItems.value.splice(index, 1); // Удаляем элемент из массива
  }
};



</script>