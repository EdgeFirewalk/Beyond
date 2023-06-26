<script>
export default {
  props: {
    id: { type: String, required: true }
  },
  data() {
    return {
      selectedArticle: this.$store.state.articles.find(art => art.id === parseInt(this.id))
    }
  }
}
</script>

<template>
  <div class='detailed-article'>
    <div class='container'>
      <div class='detailed-article__inner'>
        <div class='detailed-article__title'>{{ selectedArticle.title }}</div>
        <div class='detailed-article__date'>{{ selectedArticle.publicationDate }}</div>
        <img class='detailed-article__img' :src='selectedArticle.imageUrl' alt='Article img'>
        <div class='detailed-article__text'>{{ selectedArticle.text }}</div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
$articleTitleFontSize: 30px;

.detailed-article {
  position: absolute;
  top: 65px;
  right: 0;
  left: 0;
}

.detailed-article__title {
  font-size: $articleTitleFontSize;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
}

.detailed-article__date {
  margin-bottom: 25px;

  text-align: center;
}

.detailed-article__img {
  margin-right: 15px;
  width: 250px;
  height: 250px;

  float: left;
  object-fit: cover;
}

.detailed-article__text {
  font-size: 20px;
  font-family: Calibri, sans-serif;
  text-align: justify;
}

@media (max-width: 430px) {
  .detailed-article__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .detailed-article__img {
    margin: 0 0 10px 0;
  }
}

@media (max-width: 385px) {
  $articleTitleFontSize: 28px;

  .detailed-article {
    top: 100px;
  }

  .detailed-article__title {
    font-size: $articleTitleFontSize;
  }
}
</style>
