<template>
  <div>
    <home-header></home-header>
    <home-navbar></home-navbar>
    <left-nav>
      <div slot="about-content-title">合作伙伴</div>
      <div slot="about-content">
        <div class="about-partner-content">
          暂无
        </div>
      </div>
    </left-nav>
    <home-footer></home-footer>
  </div>
</template>

<script>
import LeftNav from './components/LeftNav'
import HomeHeader from '../components/Header'
import HomeNavbar from '../components/Navbar'
import HomeFooter from '../components/Footer'
export default {
  name: 'About',
  components: {
    HomeHeader,
    HomeNavbar,
    HomeFooter,
    LeftNav
  }
}
</script>

<style lang="scss" scoped>
.about-partner-content{
  margin-top: 20px;
  font-size: $baseFontSize;
  color: $baseBlack;
}
</style>
