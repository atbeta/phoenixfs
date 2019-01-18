<template>
  <div>
    <home-header></home-header>
    <home-navbar></home-navbar>
    <breadcrumb class="left-nav-breadcrumb" page='合作伙伴'></breadcrumb>
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
import Breadcrumb from '../components/Breadcrumb'
import HomeHeader from '../components/Header'
import HomeNavbar from '../components/Navbar'
import HomeFooter from '../components/Footer'
export default {
  name: 'Partner',
  components: {
    HomeHeader,
    HomeNavbar,
    HomeFooter,
    LeftNav,
    Breadcrumb
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
