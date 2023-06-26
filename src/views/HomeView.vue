<template>
  <div class='home'>
    <div class='container'>
      <div class='home__inner'>
        <div class='home__title'>Welcome to</div>
        <div class='home__sub-title'>Beyond</div>
        <div class='home__slogan'>The only place where you can see news from all over the world and beyond</div>
      </div>
    </div>
  </div>
  <footer class='footer'>
    <div class='container'>
      <div class='footer__inner'>
        <p class='footer__copyright'>Made by <a class='footer__link' href='https://github.com/EdgeFirewalk' target='_blank'>EdgeFirewalk</a></p>
      </div>
    </div>
  </footer>
</template>

<style lang='scss' scoped>
$homeTitleFontSize: 80px;
$homeSubTitleFontSize: 120px;
$homeSloganFontFamily: Calibri, sans-serif;
$homeSloganFontSize: 25px;

@-webkit-keyframes sub-title-underline {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    opacity: 1;
  }
}
@keyframes sub-title-underline {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    opacity: 1;
  }
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  text-align: center;

  background-color: rgba(255, 255, 255, 0.7);
  background-image: url("../assets/home_background.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: screen;
}

.home__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home__title {
  font-size: $homeTitleFontSize;
}

.home__sub-title {
  position: relative;

  padding-bottom: 15px;

  font-size: $homeSubTitleFontSize;
  text-transform: uppercase;
  line-height: 80px;
}

.home__sub-title::after {
  position: absolute;
  top: 100%;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 2px;

  background-color: black;

  content: '';
  -webkit-animation: sub-title-underline 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: sub-title-underline 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

.home__slogan {
  margin-top: 10px;

  font-family: $homeSloganFontFamily;
  font-size: $homeSloganFontSize;
}

.footer {
  position: absolute;
  right: 0;
  bottom: 5px;
  left: 0;
}

.footer__inner {
  text-align: center;
}

.footer__link {
  font-size: 18px;
  text-decoration: none;

  color: black;
  border-bottom: 1px solid black;
}

@media (max-width: 768px) {
  $homeTitleFontSize: 60px;
  $homeSubTitleFontSize: 105px;
  $homeSloganFontSize: 24px;

  .home__title {
    font-size: $homeTitleFontSize;
  }

  .home__sub-title {
    font-size: $homeSubTitleFontSize;
    line-height: 65px;
  }

  .home__slogan {
    font-size: $homeSloganFontSize;
  }
}

@media (max-width: 480px) {
  $homeTitleFontSize: 50px;
  $homeSubTitleFontSize: 90px;
  $homeSloganFontSize: 22px;

  .home__title {
    font-size: $homeTitleFontSize;
  }

  .home__sub-title {
    padding-bottom: 10px;

    font-size: $homeSubTitleFontSize;
  }

  .home__slogan {
    font-size: $homeSloganFontSize;
  }
}

@media (max-width: 385px) {
  $homeTitleFontSize: 40px;
  $homeSubTitleFontSize: 70px;
  $homeSloganFontSize: 21px;

  .home__title {
    font-size: $homeTitleFontSize;
  }

  .home__sub-title {
    font-size: $homeSubTitleFontSize;
    line-height: 50px;
  }

  .home__slogan {
    font-size: $homeSloganFontSize;
  }
}

// Not sure if I should keep it here yet
@media (max-height: 270px) {
  .footer {
    display: none;
  }
}
</style>
