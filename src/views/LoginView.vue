<script setup>
import BeyondButton from '@/components/BeyondButton.vue'

import { useRouter } from 'vue-router'
import { ref } from 'vue'

let login = ''
let password = ''
let isLogInFailed = ref(false)

const router = useRouter()
function logIn() {
  if (login === 'User' && password === '12345') {
    isLogInFailed.value = false

    localStorage.setItem('isLoggedIn', 'true')
    router.push('/profile')
  }
  else {
    isLogInFailed.value = true
  }
}
</script>

<template>
  <div class='login-form'>
    <div class='container'>
      <div class='login-form__inner'>
        <div class='login-form__title'>Log in to your account</div>
        <input
          class='login-form__login-input input'
          v-model='login'
          @input='isLogInFailed = false'
          @keyup.enter='logIn'
          type='text'
          placeholder='Login'
        >
        <input
          class='login-form__password-input input'
          v-model='password'
          @input='isLogInFailed = false'
          @keyup.enter='logIn'
          type='password'
          placeholder='Password'
        >
        <div
          class='login-form__error-message'
          :class='{"visible-message": isLogInFailed}'
        >
          Wrong login or password!
        </div>
        <beyond-button @click='logIn'>Log in</beyond-button>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/animations';

$loginFormInputWidth: 85%;

.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: $minAppHeight;
  height: 100vh;
}

.login-form__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 25px;
  width: fit-content;

  text-align: center;

  border: 2px solid $mainAppColor;

  -webkit-animation: login-form-scale-up 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: login-form-scale-up 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.login-form__title {
  margin-bottom: 15px;

  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
}

.input {
  margin: 5px;
  padding: 5px;
  width: $loginFormInputWidth;

  font-family: $secondAppFontFamily;
  font-size: 18px;

  outline: none;
}

.login-form__error-message {
  display: none;
  padding: 10px;
  width: $loginFormInputWidth;

  font-size: 15px;
  text-transform: uppercase;

  color: $errorColor;
  border: 2px solid $errorColor;
}

.visible-message {
  display: block;
}

@media (max-width: 385px) {
  .login-form__title {
    font-size: 18px;
  }
}
</style>
