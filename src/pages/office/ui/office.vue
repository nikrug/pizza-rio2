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
                        ></inputText>
                        <div v-if="emailError" class="error-message">{{ emailError }}</div>
                        
                        <inputText
                            v-model="phone"
                            inputPlaceholder="Введите номер телефона"
                            inputTextLabel="Ваш телефон"
                            :class="{ 'input-error': phoneError }"
                        ></inputText>
                        <div v-if="phoneError" class="error-message">{{ phoneError }}</div>
                        
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
                                PasswordButton="show-button"
                                :class="{ 'input-error': newPasswordError }"
                            ></inputText>
                            <div v-if="newPasswordError" class="error-message">{{ newPasswordError }}</div>

                            <inputText
                                v-model="repeatPassword"
                                inputType="password"
                                inputPlaceholder="Повторите пароль"
                                inputTextLabel="Повторите пароль"
                                PasswordButton="show-button"
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
                <CartTestt></CartTestt>
            </div> 
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

import { customButton } from '@shared/ui';
import { inputText } from '@shared/ui';
import addressWidget from '@widgets/addressWidget/ui/addressWidget/addressWidget.vue';

interface User {
    id: string;
    password: string;
    email: string;
    phone?: string; // Поле phone может быть не обязательным
    // Добавьте другие поля, если нужно
}

const newPassword = ref(false);
const email = ref('');
const phone = ref('');
const newPasswordValue = ref('');
const repeatPassword = ref('');

const emailError = ref('');
const phoneError = ref('');
const newPasswordError = ref('');
const users = ref<User[]>([]); // Указываем, что это массив объектов типа User

const buttonText = computed(() => {
    return newPassword.value ? 'Сохранить новый пароль' : 'Сохранить изменения';
});


const fetchUsers = async () => {
    try {
        const response = await fetch('http://localhost:3000/users');
        
        if (!response.ok) {
            throw new Error('Ошибка при загрузке пользователей');
        }

        const data = await response.json();
        users.value = data; // Сохраняем загруженные данные в users
    } catch  {
       // Обработка ошибки, например, вывод в пользовательский интерфейс
       alert('Ошибка'); // Замените на ваше уведомление
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
                    const response = await fetch(`http://localhost:3000/users/${existingUser.id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: existingUser.id, // добавляем идентификатор
                            ...(phone.value && { phone: phone.value }), 
                            ...(newPassword.value && { password: newPasswordValue.value }),
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Ошибка при обновлении данных пользователя');
                    }
                    // Обработка успешного обновления, например, уведомление
                } else {
                    alert('Пользователь с таким email не найден.'); // Замените на ваше уведомление
                }
            } else {
                alert('Список пользователей пуст.'); // Замените на ваше уведомление
            }
        } catch  {
            alert('Ошибка'); // Замените на ваше уведомление
        }
    }
};

// Валидация электронной почты
const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.value = emailPattern.test(email.value) ? '' : 'Введите корректный адрес электронной почты.';
};

// Валидация телефона
const validatePhone = () => {
    const phonePattern = /^\+?[1-9]\d{1,14}$/; // Пример простого регулярного выражения для проверки телефону
    phoneError.value = phonePattern.test(phone.value) ? '' : 'Введите корректный номер телефона.';
};

// Валидация нового пароля
const validateNewPassword = () => {
    if (newPasswordValue.value !== repeatPassword.value) {
        newPasswordError.value = 'Пароли не совпадают.';
    } 
};

// Lifecycle hook for mounting the component
onMounted(() => {
    fetchUsers(); // Загружаем пользователей при монтировании компонента
});
</script>



<style lang="scss" scoped>
@import './style.scss';


</style>
