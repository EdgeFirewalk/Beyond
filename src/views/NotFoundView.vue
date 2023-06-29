<template>
  <div class='error'>
    <div class='container'>
      <div class='error__inner'>
        <div class='error__code'>404</div>
        <div class='error__text'>Looks like the page you were looking for does not exist</div>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
@import '@/assets/scss/variables';

.error {
  display: flex;
  align-items: center;
  min-height: $minAppHeight;
  height: 100vh;

  text-align: center;
}

.error__code {
  font-size: 60px;
  text-decoration: underline;
}

.error__text {
  font-size: 35px;
}

@media (max-width: 385px) {
  .error__code {
    font-size: $sectionTitleDesktopFontSize;
  }

  .error__text {
    font-size: $sectionTitleMobileFontSize;
  }
}
</style>
