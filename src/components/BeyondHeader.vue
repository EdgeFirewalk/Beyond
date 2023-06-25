<template>
  <header class='header'>
    <div class='container'>
      <div class='header__inner'>
        <div class='header__logo'>Beyond</div>
        <div class='header__nav'>
          <router-link class='header__menu-item' to='/'>Home</router-link>
          <router-link class='header__menu-item' to='/articles'>Articles</router-link>
          <router-link class='header__menu-item' to='/profile'>Profile</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang='scss' scoped>
$headerLogoFontSize: 40px;
$headerNavFontSize: 20px;
$headerMenuItemHoverColor: rgba(0, 0, 0, 0.5);

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
}

.header__nav {
  display: flex;
}

.header__menu-item {
  margin: 0 5px;

  font-size: $headerNavFontSize;
  text-decoration: none;

  color: black;
  border-bottom: 1px solid transparent;
}

.header__menu-item:last-child {
  margin-right: 0;
}

.header__menu-item:hover {
  color: $headerMenuItemHoverColor;
  border-bottom: 1px solid $headerMenuItemHoverColor;
}

@media (max-width: 385px) {
  .header__inner {
    flex-direction: column;
  }

  .header__nav {
    justify-content: space-evenly;
    padding-top: 5px;
    width: 100%;
  }
}
</style>
