<template>
  <div :class="props.customClass" @click="handlePopupClick">
    <div class="popup__logo-button">
      <div class="icon_normal"></div>
      <div class="icon_hover"></div>
    </div>
  </div>
  <teleport to="body">
  <Transition name="v-faid">
    <div v-show="Popup" class="popup-overlay" @mousedown="closePopup">
      <form @submit.prevent="handleRegister">
        <div class="popup-content" @mousedown.stop>
          <div class="popup__close">
            <img src="/images/headers/logo-popup.svg">
            <span class="close-button" @click="closePopup">
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
            <inputText 
            inputPlaceholder="Введите адрес электронной почты"
            inputTextLabel="Электронная почта"
            v-model="form.email" :class="{ 'input-error':isInteracted && emailError }">
              <div v-if="isInteracted && emailError" class="error-message">{{ emailError }}</div>
            </inputText>

            <inputText inputType="password" :passwordButton=true v-model="form.password" :class="{ 'input-error':isInteracted && newPasswordError, loginError }" @input="validatePassword">
              <div v-if="loginError && isInteracted" class="error-message">{{ loginError }}</div>
              <div v-if="newPasswordError && isInteracted" class="error-message">{{ newPasswordError }}</div>
            </inputText>

            <inputCheckbox v-model="checkboxValue" inputCheckboxLabel="Запомнить меня на сайте"></inputCheckbox>
            
            <div class="popup__forget-button-block">
              <div @click="Popup = false, forgetPassword = true">
                <div class="popup__text-forget-label">Забыли пароль?</div>
              </div>
              <customButton @click="handleLogin" :class="{ 'disabled': isFormInvalid }" :disabled="isFormInvalid" ButtonText="Войти"></customButton>
            </div>
          </div>

          <div class="popup__section" v-show="regist">
            <inputText 
              inputPlaceholder="Введите адрес электронной почты"
              inputTextLabel="Электронная почта"
              v-model="form.email" :class="{ 'input-error': isInteracted && emailError,registerError}">
            </inputText>
            <div v-if="isInteracted && emailError" class="error-message">{{ emailError }}</div>

            <inputText 
              inputType="password" 
              :passwordButton=true
              v-model="form.password" :class="{ 'input-error': isInteracted && newPasswordError,registerError }">
            </inputText>

            <inputText 
              inputType="password"
              :passwordButton=true 
              inputPlaceholder="Повторите пароль" 
              inputTextLabel="Повторите пароль" 
              v-model="form.confirmPassword" :class="{ 'input-error': isInteracted && newPasswordError,registerError }">
            </inputText>
             <div v-if="isInteracted && newPasswordError" class="error-message">{{ newPasswordError }}</div>
             <div v-if="isInteracted && registerError" class="error-message">{{ registerError }}</div>
            <inputCheckbox inputCheckboxLabel="Я согласен на обработку персональных данных" v-model="checkboxValue"></inputCheckbox>

            <customButton @click="handleRegister" :class="{ 'disabled': isFormInvalidRegist }" :disabled="isFormInvalidRegist" ButtonText="Зарегистрироваться"></customButton>

          </div>
        </div>
      </form>

    </div>
  </Transition>
      <div v-show="forgetPassword" class="popup-overlay">
                <div class="popup-content">
                            <div class="popup__close">
                              <img src="/images/headers/logo-popup.svg">
                              <span class="close-button" @click="forgetPassword = !forgetPassword, closePopup"><img src="/images/headers/icon-Close.svg"></span>
                            </div>
                            <div class="popup__text-forget" >Для восстановления пароля введите адрес электронной почты</div>
                            <inputText inputPlaceholder="Введите адрес электронной почты" inputTextLabel="Электронная почта"></inputText>
                            <div class="popup__forget-button-block">
                              
                              <div class="popup__text-forget-label"  @click="forgetPassword=!forgetPassword">Войти</div>
                              <customButton ButtonText="Восстановить пароль"></customButton>
                            </div>
                </div>
      </div>
  </teleport>
</template>


<script setup lang="ts">
import { ref,computed } from 'vue';

import { customButton, inputText, inputCheckbox } from '@shared/ui';
import { useRouter } from 'vue-router';

const checkboxValue = ref(false);
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
const isInteracted = ref(false);
const switchToLogin = () => {
  regist.value = false;
  login.value = true;
};
// Закрытие попапа
const closePopup = () => {
  Popup.value = false;
  forgetPassword.value = false;
  enableScroll(); // Восстанавливаем прокрутку
};
const switchToRegister = () => {
  regist.value = true;
  login.value = false;
};

const successfulLogin = ref(false); // Переменная для отслеживания успешного логина

const handlePopupClick = () => {
  if (successfulLogin.value) {
    router.push('/office'); // Редирект на офис, если eспешный вход
    
  } else {
    Popup.value = true; // Открыть попап, если неуспешный вход
    disableScroll(); // Блокируем прокрутку
    isInteracted.value = false; // Сброс флага при открытии попапа
  }
};

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = '';
};

// Метод для входа
const handleLogin = async () => {
  // Указываем, что пользователь взаимодействовал с формой
  isInteracted.value = true;
  clearErrors();

  // Валидация электронной почты
  validateEmail();
  validatePassword();
  if (emailError.value) return; // Если есть ошибка с email, не продолжаем

  const response = await fetch('http://localhost:3000/users?email=' + form.value.email);
  const users = await response.json();
  const user = users[0];

  if (user && user.password === form.value.password) {
    
    successfulLogin.value = true; // Устанавливаем успешный логин
    router.push('/office'); // Перенаправляем в офис
    Popup.value=false;

  } else {
    loginError.value = 'Ошибка входа. Проверьте логин и пароль.';
  }
};

const isFormInvalid = computed(() => {
  clearErrors(); // Очищаем ошибки в начале вычислений

  // Проверяем валидность email и паролей
  validateEmail();
  validatePassword();

  if ( form.value.password && form.value.email) return false;
  else return true
});

const isFormInvalidRegist = computed(() => {
  clearErrors(); // Очищаем ошибки в начале вычислений

  validateEmail();
  validatePassword();

  // Проверка состояния чекбокса
  if (!checkboxValue.value) {
    return true; // Форма недействительна, если чекбокс не отмечен
  }

  // Проверяем, если поле confirmPassword заполнено
  if (form.value.confirmPassword) return false;

  return true; // Если ошибок нет
});
const isRegistering = ref(false); // Флаг для отслеживания процесса регистрации

const handleRegister = async () => {
  if (isRegistering.value) return; // Если уже в процессе регистрации, выходим

  // Устанавливаем флаг в true
  isRegistering.value = true;

  clearErrors();

  validateEmail();

  if (emailError.value) {
    registerError.value = emailError.value;
    isRegistering.value = false; // Сбрасываем флаг
    return;
  }

  if (form.value.password !== form.value.confirmPassword) {
    registerError.value = 'Пароли не совпадают';
    isRegistering.value = false; // Сбрасываем флаг
    return;
  }

  const response = await fetch(`http://localhost:3000/users?email=${form.value.email}`);
  const users = await response.json();

  if (users.length > 0) {
    registerError.value = 'Пользователь с таким адресом электронной почты уже существует.';
    isRegistering.value = false; // Сбрасываем флаг
    return;
  }

  const newUser = {
    email: form.value.email,
    password: form.value.password
  };

  await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  alert('Регистрация прошла успешно!');
  Popup.value = false; // Закрываем попап

  // Сбрасываем флаг после успешной регистрации
  isRegistering.value = false;
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

const validatePassword = () => {
  const password = form.value.password;
  const errorMessages = []; // Хранит сообщения об ошибках

  if (password.length < 6) {
    errorMessages.push('Пароль должен содержать минимум 6 символов.');
  }

  newPasswordError.value = errorMessages.length > 0 ? errorMessages.join(' ') : ''; // Компилируем ошибки
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
