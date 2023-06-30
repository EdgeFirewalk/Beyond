<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo" @click="this.$router.push(`/`)">Beyond</div>
        <div class="header__nav">
          <router-link class="header__menu-item" to="/">Home</router-link>
          <router-link class="header__menu-item" to="/articles">Articles</router-link>
          <router-link class="header__menu-item" to="/profile">Profile</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

$headerLogoFontSize: 40px;
$headerNavFontSize: 20px;

.header {
  position: absolute;
  top: 5px;
  right: 0;
  left: 0;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  font-size: $headerLogoFontSize;
  text-transform: uppercase;

  cursor: pointer;
}

.header__nav {
  display: flex;
}

.header__menu-item {
  position: relative;

  margin: 0 5px;

  font-size: $headerNavFontSize;
  text-decoration: none;

  border-bottom: 2px solid transparent;

  transition-property: border-color;
  transition-duration: 0.2s;
}

.header__menu-item:last-child {
  margin-right: 0;
}

.header__menu-item:hover {
  border-color: $mainAppColor;
}

@media (max-width: 385px) {
  .header__inner {
    flex-direction: column;
  }

  .header__nav {
    justify-content: space-around;
    padding-top: 5px;
    width: 100%;
  }
}
</style>
