import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index/index.vue'
import NewsPage from '@/pages/news/news.vue'
import SourcePage from '@/pages/source/source.vue'
import AboutPage from '@/pages/about/about.vue'
import NewsDetailPage from '@/pages/news/newsDetail/newsDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'IndexPage',
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
    },
    {
      path: '/newsDetail',
      name: 'NewsDetailPage',
      component: NewsDetailPage
    }
  ]
})
