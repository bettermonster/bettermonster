import Vue from 'vue'
import Router from 'vue-router'
import User from '@/page/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        header: () => import('@/components/header'),
        default: () => import('@/page/home'),
        footer: () => import('@/components/footer')
      }
    },
    {
      path: '/user',
      components: {
        default: User
      },
      children: [
        {
          path: '',
          redirect: 'relogin'
        },
        {
          path: 'relogin',
          component: () => import('@/page/user/relogin')
        },
        {
          path: 'login',
          component: () => import('@/page/user/login')
        },
        {
          path: 'register',
          component: () => import('@/page/user/register')
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      components: {
        // header: () => import('@/components/header'),
        default: () => import('@/page/detail')
      }
    },
    {
      path: '/musicstart',
      name: 'musicstart',
      components: {
        // header: () => import('@/components/header'),
        default: () => import('@/page/musicstart')
      }
    },
    {
      path: '/search',
      name: 'search',
      components: {
        // header: () => import('@/components/header'),
        default: () => import('@/page/search'),
        footer: () => import('@/components/footer')
      }
    },
    {
      path: '/video',
      components: {
        default: () => import('@/page/video')
      },
      children: [
        {
          path: '',
          name: 'video',
          components: {
            header: () => import('@/components/header'),
            default: () => import('@/page/video/video')
          }
        },
        {
          path: 'mvstart',
          name: 'mvstart',
          component: () => import('@/page/mvstart')
        }
      ]
    },
    {
      path: '/radio',
      components: {
        default: () => import('@/page/radio')
      },
      children: [
        {
          path: '',
          components: {
            header: () => import('@/components/header'),
            default: () => import('@/page/radio/radio')
          }
        },
        {
          path: 'radiodetail',
          component: () => import('@/page/radio/radiodetail')
        }
      ]
    },
    {
      path: '/mymusic',
      components: {
        default: () => import('@/page/mymusic')
      },
      children: [
        {
          path: '',
          components: {
            default: () => import('@/page/mymusic/mymusic'),
            footer: () => import('@/components/footer')
          }
        }
      ]
    }
  ]
})
