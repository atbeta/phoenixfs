<template>
  <div>
  <home-header></home-header>
  <home-navbar></home-navbar>
  <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeNavbar from './components/Navbar'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNavbar,
    HomeSwiper
  }
}
</script>

<style scoped>
</style>
