<script>
import BeyondArticle from '@/components/BeyondArticle.vue'
export default {
  components: {
    BeyondArticle
  },
  data() {
    return {
      articles: [...this.$store.state.articles]
    }
  }
}
</script>

<template>
  <div class="article-list">
    <div class="container">
      <div class="article-list__inner">
        <!-- TODO: Pass an object to article instead of all the properties -->
        <beyond-article
          v-for="article in articles"
          :key="article.id"
          :id="article.id"
          :image-url="article.imageUrl"
          :title="article.title"
          :description="article.description"
          :publication-date="article.publicationDate"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.article-list {
  position: absolute;
  top: $absSectionTopIndentDesktop;
  right: 0;
  left: 0;
}

.article-list__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 385px) {
  .article-list {
    top: $absSectionTopIndentMobile;
  }
}
</style>
