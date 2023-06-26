<script>
export default {
  methods: {
    logOut() {
      localStorage.isLoggedIn = false
    }
  }
}
</script>

<template>
  <div class='profile'>
    <div class='container'>
      <div class='profile__inner'>
        <div class='profile__title'>Public profile</div>
        <img class='profile__img' src='https://www.freeiconspng.com/thumbs/account-icon/account-icon-8.png' alt='Account img'>
        <div class='profile__name'>User</div>
        <div class='profile__creation-date'>Member since: 22.06.2023</div>
        <button class='profile__log-out-button' @click='logOut'>Log out</button>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
$profileTitleFontSize: 30px;
$profileNameFontSize: 25px;

$secondAccountColor: rgba(0, 0, 0, 0.75);

.profile {
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
}

.profile__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile__title {
  font-size: $profileTitleFontSize;
  text-decoration: underline;
}

.profile__img {
  width: 110px;
  height: 110px;

  border-radius: 360px;

  object-fit: cover;
}

.profile__name {
  font-size: $profileNameFontSize;
  font-weight: bold;
  text-transform: uppercase;
}

.profile__creation-date {
  line-height: 8px;

  color: $secondAccountColor;
}

.profile__log-out-button {
  margin: 20px 0;
  padding: 10px 15px;

  font-size: $profileNameFontSize - 8px;

  background-color: white;
  border: 2px solid black;

  transition-property: color, background-color;
  transition-duration: 0.3s;
  cursor: pointer;
}

.profile__log-out-button:hover {
  color: white;
  background-color: black;
}
</style>
