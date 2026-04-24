<template>
    <div class="office">
        <div class="office__page">
            <div class="office__label-block">
                <div class="office__label">Личный кабинет</div>
            </div>
            <div class="office__list">
                <div class="office__list-form">
                    <form @submit.prevent="handleSubmit">
                        <div class="office__list-label">Личные данные</div>
                        <inputText
                            v-model="email"
                            inputPlaceholder="Введите адрес электронной почты"
                            inputTextLabel="Ваша электронная почта"
                            :class="{ 'input-error': emailError }"
                        >
                            <div v-if="emailError" class="error-message">{{ emailError }}</div>
                        </inputText>
                       
                        
                      <inputText
                            v-model="phoneNumber"  
                            inputPlaceholder="Введите номер телефона"
                            inputTextLabel="Ваш телефон"
                            isPhoneInput 
                            :class="{ 'input-error': phoneError }"
                        >
                            <div v-if="phoneError" class="error-message">{{ phoneError }}</div>
                        </inputText>

                        
                        <div class="office__new-password-label" @click="newPassword = !newPassword">
                            {{ newPassword ? 'Хочу оставить старый пароль' : 'Сменить пароль' }}
                            <img 
                                src="/images/office/rightArrow.svg" 
                                :class="{ 'rotated': newPassword }"
                            />
                        </div>
                        <div class="office__new-password" v-show="newPassword">
                            <inputText
                                v-model="newPasswordValue"
                                inputType="password"
                                inputPlaceholder="Введите новый пароль"
                                inputTextLabel="Новый пароль"
                                :passwordButton=true
                                :class="{ 'input-error': newPasswordError }"
                            ></inputText>
                            <div v-if="newPasswordError" class="error-message">{{ newPasswordError }}</div>

                            <inputText
                                v-model="repeatPassword"
                                inputType="password"
                                inputPlaceholder="Повторите пароль"
                                inputTextLabel="Повторите пароль"
                                :passwordButton=true
                                :class="{ 'input-error': newPasswordError }"
                            ></inputText>
                        </div>
                        <div class="office__buttonn">
                            <customButton :ButtonText="buttonText"></customButton>
                        </div>
                    </form>
                </div>
                
                <div class="office__list-addres">
                    <addressWidget></addressWidget>
                </div>
                
            </div> 
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

import { customButton } from '@shared/ui';
import { inputText } from '@shared/ui';
import addressWidget from '@widgets/addressWidget/ui/addressWidget/addressWidget.vue';
import axiosInstance from '@widgets/menuBlock/api/axiosInstance'; // Импортируем ваш axiosInstance

interface User {
    id: string;
    password: string;
    email: string;
    phone?: string; // Поле phone может быть не обязательным
}

const phoneNumber = ref('');
const newPassword = ref(false);
const email = ref('');
const phone = ref('');
const newPasswordValue = ref('');
const repeatPassword = ref('');

const emailError = ref('');
const phoneError = ref('');
const newPasswordError = ref('');
const users = ref<User[]>([]);

const buttonText = computed(() => {
    return newPassword.value ? 'Сохранить новый пароль' : 'Сохранить изменения';
});

const fetchUsers = async () => {
    try {
        const response = await axiosInstance.get('/users'); // Используем axiosInstance
        
        users.value = response.data; // Сохраняем загруженные данные в users
    } catch {
        alert('Ошибка при загрузке пользователей'); // Замените на ваше уведомление
    }
};

// Вызов функции при монтировании
onMounted(() => {
    fetchUsers();
});

const handleSubmit = async () => {
    validateEmail();
    validatePhone();
    validateNewPassword();

    if (!emailError.value && !phoneError.value && (newPassword.value ? !newPasswordError.value : true)) {
        try {
            if (users.value && users.value.length > 0) {
                const existingUser = users.value.find(user => user.email === email.value);
                
                if (existingUser) {
                    const response = await axiosInstance.patch(`/users/${existingUser.id}`, { // Используем axiosInstance
                        id: existingUser.id,
                        ...(phone.value && { phone: phone.value }), 
                        ...(newPassword.value && { password: newPasswordValue.value }),
                    });

                    if (response.status === 200) {
                        alert('Данные успешно обновлены'); // Замените на ваше уведомление
                    }
                } else {
                    alert('Пользователь с таким email не найден.');
                }
            } else {
                alert('Список пользователей пуст.');
            }
        } catch {
            alert('Ошибка при обновлении данных пользователя'); // Замените на ваше уведомление
        }
    }
};

const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.value = emailPattern.test(email.value) ? '' : 'Введите корректный адрес электронной почты.';
};

const validatePhone = () => {
    const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/; 
    phoneError.value = phonePattern.test(phoneNumber.value) ? '' : 'Введите корректный номер телефона.';
};

const validateNewPassword = () => {
    newPasswordError.value = newPasswordValue.value !== repeatPassword.value ? 'Пароли не совпадают.' : '';
};

// Lifecycle hook for mounting the component
onMounted(() => {
    fetchUsers();
});
</script>




<style lang="scss" scoped>
@import './style.scss';


</style>
