<template>
  <div :class="props.customClass" @click="Popup = !Popup">
    <div class="popup__logo-button">
      <div class="icon_normal"></div>
      <div class="icon_hover"></div>
    </div>
  </div>
  <Transition name="v-faid">
    <div v-show="Popup" class="popup-overlay" @mousedown="Popup = false">
      <form @submit.prevent="handleRegister">
        <div class="popup-content" @mousedown.stop>
          <div class="popup__close">
            <img src="/images/headers/logo-popup.svg">
            <span class="close-button" @click="Popup = false">
              <img src="/images/headers/icon-Close.svg">
            </span>
          </div>
          <div class="popup__choose-block">
            <span class="popup__text" :class="{'active': login}" @click="switchToLogin">
              Вход
            </span>
            <span class="popup__text" :class="{'active': regist}" @click="switchToRegister">
              Регистрация
            </span>
          </div>

          <div class="popup__section" v-show="login">
            <inputText inputPlaceholder="Введите адрес электронной почты" inputTextLabel="Электронная почта" v-model="form.email" :class="{ 'input-error': emailError }"></inputText>
            <div v-if="emailError" class="error-message">{{ emailError }}</div>

            <inputText inputType="password" PasswordButton="show-button" v-model="form.password" :class="{ 'input-error': loginError }"></inputText>
            <div v-if="loginError" class="error-message">{{ loginError }}</div>
            <inputCheckbox inputCheckboxLabel="Запомнить меня на сайте"></inputCheckbox>
            <div class="popup__forget-button-block">
              <div class="popup__text-forget-label" @click="Popup = false, forgetPassword = true">Забыли пароль?</div>
              <customButton @click="handleLogin" ButtonText="Войти"></customButton>
            </div>
          </div>

          <div class="popup__section" v-show="regist">
            <inputText inputPlaceholder="Введите адрес электронной почты" inputTextLabel="Электронная почта" v-model="form.email" :class="{ 'input-error':  registerError}"></inputText>
            <div v-if="registerError" class="error-message">{{ registerError }}</div>
            <inputText inputType="password" PasswordButton="show-button" v-model="form.password" :class="{ 'input-error': newPasswordError }"></inputText>
            <inputText inputType="password" PasswordButton="show-button" inputPlaceholder="Повторите пароль" inputTextLabel="Повторите пароль" v-model="form.confirmPassword" :class="{ 'input-error': newPasswordError }"></inputText>
            <inputCheckbox inputCheckboxLabel="Я согласен на обработку персональных данных" v-model="form.agree"></inputCheckbox>
            <customButton @click="handleRegister" ButtonText="Зарегистрироваться"></customButton>

          </div>
        </div>
      </form>

    </div>
  </Transition>
              <div v-show="forgetPassword" class="popup-overlay">
                <div class="popup-content">
                            <div class="popup__close">
                              <img src="/images/headers/logo-popup.svg">
                              <span class="close-button" @click="forgetPassword = !forgetPassword"><img src="/images/headers/icon-Close.svg"></span>
                            </div>
                            <div class="popup__text-forget" >Для восстановления пароля введите адрес электронной почты</div>
                            <inputText inputPlaceholder="Введите адрес электронной почты" inputTextLabel="Электронная почта"></inputText>
                            <div class="popup__forget-button-block">
                              
                              <div class="popup__text-forget-label"  @click="Popup = !Popup, forgetPassword=!forgetPassword">Войти</div>
                              <customButton ButtonText="Восстановить пароль"></customButton>
                            </div>
                </div>
            </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

import { customButton, inputText, inputCheckbox } from '@shared/ui';
import { useRouter } from 'vue-router';

const router = useRouter();
const emailError = ref('');
const newPasswordError = ref('');
const Popup = ref(false);
const forgetPassword = ref(false);
const login = ref(true);
const regist = ref(false);
const form = ref({
  email: '',
  password: '',
  confirmPassword: '',
  agree: false
});

const loginError = ref('');
const registerError = ref('');

const switchToLogin = () => {
  regist.value = false;
  login.value = true;
};

const switchToRegister = () => {
  regist.value = true;
  login.value = false;
};

// Метод для входа
const handleLogin = async () => {
  clearErrors();
  
  const response = await fetch('http://localhost:3000/users?email=' + form.value.email);
  const users = await response.json();
  const user = users[0];

  if (user && user.password === form.value.password) {
    Popup.value = false;
    router.push('/office');
  } else {
    loginError.value = 'Ошибка входа. Проверьте логин и пароль.';
  }
};

const handleRegister = async () => {
  clearErrors();

  // Валидация электронной почты
  validateEmail();
  
  if (emailError.value) {
    registerError.value = emailError.value;
    return;
  }

  if (form.value.password !== form.value.confirmPassword) {
    registerError.value = 'Пароли не совпадают';
    return;
  }

  const response = await fetch(`http://localhost:3000/users?email=${form.value.email}`);
  const users = await response.json();

  if (users.length > 0) {
    registerError.value = 'Пользователь с таким адресом электронной почты уже существует.';
    return;
  }

  const newUser = {
    email: form.value.email,
    password: form.value.password
  };

  // Отправка POST запроса на добавление пользователя
  await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  alert('Регистрация прошла успешно!');
  Popup.value = false; // Закрываем попап
};

// Очистка сообщений об ошибках
const clearErrors = () => {
  emailError.value = '';
  newPasswordError.value = '';
  loginError.value = '';
  registerError.value = '';
};


// Валидация электронной почты
const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.value = emailPattern.test(form.value.email) ? '' : 'Введите корректный адрес электронной почты.';
};



// Связываем данные из формы
const props = defineProps({
  customClass: {
    type: String,
    default: ''
  },
});
</script>


<style lang="scss" scoped>
@import './style.scss';
</style>
