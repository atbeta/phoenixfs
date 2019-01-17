import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import About from '@/pages/about/About'
import Notice from '@/pages/about/Notice'
import Contact from '@/pages/about/Contact'
import Partner from '@/pages/about/Partner'

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
      path: '/partner',
      name: 'Partner',
      component: Partner
    }
  ]
})
