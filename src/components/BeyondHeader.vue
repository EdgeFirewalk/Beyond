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
  left: 0;
  right: 0;
}

.header__logo {
  font-size: $headerLogoFontSize;

  text-transform: uppercase;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.header__menu-item:hover {
  color: $headerMenuItemHoverColor;
  border-bottom: 1px solid $headerMenuItemHoverColor;
}

// Mobile
@media (min-width: 320px) {
  $headerLogoFontSize: 25px;
  $headerNavFontSize: 15px;

  .header__logo {
    font-size: $headerLogoFontSize;
  }

  .header__menu-item {
    margin: 0 5px;

    font-size: $headerNavFontSize;
  }
}

// Mobile landscape
@media (min-width: 480px) {
  $headerNavFontSize: 17px;

  .header__menu-item {
    font-size: $headerNavFontSize;
  }
}

// Small tablets
@media (min-width: 600px) {
  $headerLogoFontSize: 28px;

  .header__logo {
    font-size: $headerLogoFontSize;
  }
}

// Tablets portrait
@media (min-width: 768px) {
  $headerLogoFontSize: 30px;
  $headerNavFontSize: 18px;

  .header__logo {
    font-size: $headerLogoFontSize;
  }

  .header__menu-item {
    font-size: $headerNavFontSize;
  }
}

// Tablets landscape / Netbooks
@media (min-width: 1024px) {
  $headerLogoFontSize: 35px;
  $headerNavFontSize: 19px;

  .header__logo {
    font-size: $headerLogoFontSize;
  }

  .header__menu-item {
    font-size: $headerNavFontSize;
  }
}

// Desktop
@media (min-width: 1280px) {
  $headerLogoFontSize: 40px;
  $headerNavFontSize: 20px;

  .header__logo {
    font-size: $headerLogoFontSize;

    text-transform: uppercase;
  }

  .header__menu-item {
    font-size: $headerNavFontSize;
  }
}
</style>
