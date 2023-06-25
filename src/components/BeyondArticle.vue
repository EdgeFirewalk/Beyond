<script>
export default {
  props: {
    id: { type: Number, required: true },
    imageUrl: String,
    title: String,
    description: String,
    publicationDate: String
  }
}
</script>

<template>
  <router-link class='article' :to='`article/${id}`'>
    <img class='article__img' :src='imageUrl' alt='Article img'>
    <div class='article__right'>
      <p class='article__title'>{{ title }}</p>
      <p class='article__description'>{{ description }}</p>
      <p class='article__publication-date'>{{ publicationDate }}</p>
    </div>
  </router-link>
</template>

<style lang='scss' scoped>
$articleBorderRadius: 15px;
$articleTitleFontSize: 22px;
$articleDateFontSize: 14px;

$mainArticleColor: black;
$secondArticleColor: rgba(0, 0, 0, 0.75);

.article {
  display: flex;
  margin: 5px 0;
  padding: 5px;
  width: 100%;

  font-family: Calibri, sans-serif;
  text-decoration: none;

  color: $mainArticleColor;
  border: 1px solid $mainArticleColor;
  border-radius: $articleBorderRadius;
}

.article:hover {
  box-shadow: 0 0 5px $secondArticleColor;
}

.article__img {
  margin-right: 10px;
  width: 100px;
  height: 100px;

  border-radius: $articleBorderRadius;

  object-fit: cover;
}

.article__right {
  width: 100%;
}

.article__title {
  font-size: $articleTitleFontSize;
  font-weight: bold;
}

.article__description {
  color: $secondArticleColor;
}

.article__publication-date {
  font-size: $articleDateFontSize;
  text-align: right;
}
</style>
