<script>
export default {
  props: {
    id: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    publicationDate: { type: String, required: true }
  }
}
</script>

<template>
  <router-link class="article" :to="{ name: 'article', params: { id: this.id } }">
    <img class="article__img" :src="imageUrl" alt="Article img" />
    <div class="article__right">
      <p class="article__title">{{ title }}</p>
      <p class="article__description">{{ description }}</p>
      <p class="article__publication-date">{{ publicationDate }}</p>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/animations';

$articleTitleFontSize: 22px;
$articleDescriptionFontSize: 19px;
$articleDateFontSize: 15px;

.article {
  display: flex;
  margin: 5px 0;
  padding: 7px;
  width: 100%;

  font-family: $secondAppFontFamily;
  text-decoration: none;

  color: $mainAppColor;
  border: 2px solid $mainAppColor;

  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
}

.article:hover {
  transform: translate(-5px, -5px);
  box-shadow: 5px 5px 0 $thirdAppColor;
}

.article__img {
  margin-right: 10px;
  width: 100px;
  height: 100px;

  object-fit: cover;

  -webkit-animation: article-img-flip-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: article-img-flip-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.article__right {
  width: 100%;
}

.article__title {
  font-size: $articleTitleFontSize;
  font-weight: bold;
  text-transform: uppercase;

  -webkit-animation: text-expand 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: text-expand 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

.article__description {
  font-size: $articleDescriptionFontSize;

  color: $thirdAppColor;

  -webkit-animation: text-expand 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: text-expand 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

.article__publication-date {
  margin-top: 10px;

  font-size: $articleDateFontSize;
  text-align: right;
}

@media (max-width: 320px) {
  $articleTitleFontSize: 20px;
  $articleDescriptionFontSize: 18px;

  .article__title {
    font-size: $articleTitleFontSize;
  }

  .article__description {
    font-size: $articleDescriptionFontSize;
  }
}
</style>
