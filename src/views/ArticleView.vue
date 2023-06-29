<script>
export default {
  props: {
    id: { type: String, required: true }
  },
  data() {
    return {
      // TODO: Change this mess...
      selectedArticle: this.$store.state.articles.find(art => art.id === parseInt(this.id)) !== undefined ?
        this.$store.state.articles.find(art => art.id === parseInt(this.id)) :
        this.$router.push({ name: 'not-found'})
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
@import '@/assets/scss/variables';
@import '@/assets/scss/animations';

.detailed-article {
  position: absolute;
  top: $absSectionTopIndentDesktop;
  right: 0;
  left: 0;
}

.detailed-article__title {
  font-size: $sectionTitleDesktopFontSize;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;

  -webkit-animation: text-expand 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: text-expand 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
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
  font-size: 21px;
  font-family: $secondAppFontFamily;
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
  .detailed-article {
    top: $absSectionTopIndentMobile;
  }

  .detailed-article__title {
    font-size: $sectionTitleMobileFontSize;
  }
}
</style>
