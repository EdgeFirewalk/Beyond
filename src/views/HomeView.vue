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
</template>

<style lang='scss' scoped>
$homeTitleFontSize: 80px;
$homeSubTitleFontSize: 120px;
$homeSloganFontFamily: Calibri, sans-serif;
$homeSloganFontSize: 25px;

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  text-align: center;

  background-color: rgba(255, 255, 255, 0.7);
  background-image: url("../assets/home_background.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: screen;
}

.home__title {
  font-size: $homeTitleFontSize;
}

.home__sub-title {
  margin: 0 auto;
  padding-bottom: 15px;
  width: fit-content;

  font-size: $homeSubTitleFontSize;
  text-transform: uppercase;
  line-height: 80px;

  border-bottom: 2px solid black;
}

.home__slogan {
  margin-top: 10px;

  font-family: $homeSloganFontFamily;
  font-size: $homeSloganFontSize;
}

// Mobile
@media (min-width: 320px) {
  $homeTitleFontSize: 45px;
  $homeSubTitleFontSize: 70px;
  $homeSloganFontSize: 20px;

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

// Mobile landscape
@media (min-width: 480px) {
  $homeTitleFontSize: 47px;
  $homeSubTitleFontSize: 100px;
  $homeSloganFontSize: 23px;

  .home__title {
    font-size: $homeTitleFontSize;
  }

  .home__sub-title {
    font-size: $homeSubTitleFontSize;
    line-height: 75px;
  }

  .home__slogan {
    font-size: $homeSloganFontSize;
  }
}

// Small tablets
@media (min-width: 600px) {
  $homeTitleFontSize: 50px;
  $homeSubTitleFontSize: 105px;
  $homeSloganFontSize: 25px;

  .home__title {
    font-size: $homeTitleFontSize;
  }

  .home__sub-title {
    font-size: $homeSubTitleFontSize;
  }

  .home__slogan {
    font-size: $homeSloganFontSize;
  }
}

// Tablets portrait
@media (min-width: 768px) {
  $homeTitleFontSize: 55px;
  $homeSubTitleFontSize: 115px;

  .home__title {
    font-size: $homeTitleFontSize;
  }

  .home__sub-title {
    font-size: $homeSubTitleFontSize;
    line-height: 80px;
  }

  .home__slogan {
    font-size: $homeSloganFontSize;
  }
}

// Tablets landscape / Netbooks
@media (min-width: 1024px) {
  $homeTitleFontSize: 65px;
  $homeSubTitleFontSize: 120px;

  .home__title {
    font-size: $homeTitleFontSize;
  }

  .home__sub-title {
    font-size: $homeSubTitleFontSize;
  }
}

// Desktop
@media (min-width: 1280px) {
  $homeTitleFontSize: 80px;

  .home__title {
    font-size: $homeTitleFontSize;
  }
}
</style>
