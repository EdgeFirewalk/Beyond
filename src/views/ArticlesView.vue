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
  <div class='article-list'>
    <div class='container'>
      <div class='article-list__inner'>
        <beyond-article
          v-for='article in articles'
          :key='article.id'
          :id='article.id'
          :image-url='article.imageUrl'
          :title='article.title'
          :description='article.description'
          :publication-date='article.publicationDate'
        />
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.article-list {
  position: absolute;
  top: 65px;
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
    top: 90px;
  }
}
</style>
