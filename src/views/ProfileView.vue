<script setup>
import BeyondButton from '@/components/BeyondButton.vue'

import { useRouter } from 'vue-router'

const router = useRouter()
function logOut() {
  localStorage.setItem('isLoggedIn', 'false')
  router.go(0)
}
</script>

<template>
  <div class="profile">
    <div class="container">
      <div class="profile__inner">
        <div class="profile__title">Public profile</div>
        <img class="profile__img" src="../assets/profile_icon.png" alt="Account img" />
        <div class="profile__name">User</div>
        <div class="profile__creation-date">Member since: 22.06.2023</div>
        <beyond-button class="profile__log-out-button" @click="logOut">Log out</beyond-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/animations';

$profileNameFontSize: 25px;

$secondAccountColor: rgba(0, 0, 0, 0.75);

.profile {
  position: absolute;
  top: $absSectionTopIndentDesktop;
  right: 0;
  left: 0;
}

.profile__inner {
  display: flex;
  flex-direction: column;
  align-items: center;

  -webkit-animation: profile-scale-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: profile-scale-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.profile__title {
  margin-bottom: 15px;

  font-size: $sectionTitleDesktopFontSize;
  text-transform: uppercase;
  text-decoration: underline;
}

.profile__img {
  width: 110px;
  height: 110px;

  border: 2px solid $mainAppColor;
  border-radius: 100%;

  object-fit: cover;
}

.profile__name {
  font-size: $profileNameFontSize;
  font-weight: bold;
  text-transform: uppercase;
}

.profile__creation-date {
  margin-bottom: 10px;

  line-height: 10px;

  color: $secondAccountColor;
}

@media (max-width: 385px) {
  .profile {
    top: $absSectionTopIndentMobile;
  }

  .profile__title {
    font-size: $sectionTitleMobileFontSize;
  }
}
</style>
