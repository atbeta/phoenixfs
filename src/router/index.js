import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import About from '@/pages/about/About'
import Notice from '@/pages/about/Notice'
import Contact from '@/pages/about/Contact'
import Joinus from '@/pages/about/Joinus'
import Partner from '@/pages/about/Partner'
import Trend from '@/pages/about/Trend'
import ResetPasswd from '../pages/login/ResetPasswd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/joinus',
      name: 'Joinus',
      component: Joinus
    },
    {
      path: '/partner',
      name: 'Partner',
      component: Partner
    },
    {
      path: '/trend',
      name: 'Trend',
      component: Trend
    },
    {
      path: '/resetpw',
      name: 'ResetPasswd',
      component: ResetPasswd
    }
  ]
})
