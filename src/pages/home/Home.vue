<template>
  <div>
  <home-header></home-header>
  <home-navbar></home-navbar>
  <home-swiper></home-swiper>
  <home-news></home-news>
  <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeNavbar from '../components/Navbar'
import HomeSwiper from './components/Swiper'
import HomeNews from './components/News'
import HomeFooter from '../components/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNavbar,
    HomeSwiper,
    HomeNews,
    HomeFooter
  }
}
</script>

<style scoped>
</style>
