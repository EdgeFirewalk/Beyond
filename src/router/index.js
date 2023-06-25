import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '@/views/ArticlesView.vue'
import ArticleView from '@/views/ArticleView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})

export default router
