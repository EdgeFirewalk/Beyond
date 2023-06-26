<script setup>
import { useRouter } from 'vue-router'

let router = useRouter()
function logIn() {
  localStorage.isLoggedIn = true
  router.push({ path: '/profile' })
}
</script>

<template>
  <div style='position: absolute; margin-top: 110px'>
    <div class='container'>
      <div>
        <button @click='logIn'>LOG IN</button>
      </div>
    </div>
  </div>
</template>

<style></style>
