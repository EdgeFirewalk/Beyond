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
        <beyond-article v-for="article in articles" :key="article.id" :articleObj="article" />
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

@media (max-width: $minAppWidth) {
  .article-list {
    top: $absSectionTopIndentMobile;
  }
}
</style>
