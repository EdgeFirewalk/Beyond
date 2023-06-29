<template>
  <button class='beyond-button'>
    <slot></slot>
  </button>
</template>

<style lang='scss' scoped>
@import '@/assets/scss/variables';

.beyond-button {
    margin: 10px 0;
    padding: 10px 18px;

    font-size: 18px;

    background-color: $secondAppColor;
    border: 2px solid $mainAppColor;

    transition-property: color, background-color;
    transition-duration: 0.3s;

    cursor: pointer;
}

.beyond-button:hover {
    color: $secondAppColor;
    background-color: $mainAppColor;
}
</style>
