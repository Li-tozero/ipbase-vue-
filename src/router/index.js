import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index/index.vue'
import NewsPage from '@/pages/news/news.vue'
import SourcePage from '@/pages/source/source.vue'
import AboutPage from '@/pages/about/about.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/index',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/news',
      name: 'NewsPage',
      component: NewsPage
    },
    {
      path: '/source',
      name: 'SourcePage',
      component: SourcePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    }
  ]
})
