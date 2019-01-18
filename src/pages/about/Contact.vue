<template>
  <div>
    <home-header></home-header>
    <home-navbar></home-navbar>
    <breadcrumb class="left-nav-breadcrumb" page='联系我们'></breadcrumb>
    <left-nav :index="3">
      <div slot="about-content-title">联系我们</div>
      <div slot="about-content">
        <div class="about-contact-content">
          <div class="amap-wrapper">
          <el-amap class="amap-box" :vid="'amap-vue'" :center="center" :zoom="zoom"></el-amap>
          </div>
          <div class="about-contact-detail">
            <p>地址：广东省深圳市前海深港合作区临海大道59号海运中心主塔楼2116C</p>
            <p>邮编：518000</p>
            <p>客服电话：4009-630-638</p>
            <p>客服邮箱： cs@fenghuangjinfu.com </p>
          </div>
          <div class="about-contact-qr">
            <span><img src="https://www.fenghuangjinfu.com:8443/upload/image/20151209/1449651004091096209.png" alt=""></span>
            <span><img src="https://www.fenghuangjinfu.com:8443/upload/image/20151209/1449651007705029819.png" alt=""></span>
          </div>
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
  name: 'Contact',
  components: {
    HomeHeader,
    HomeNavbar,
    HomeFooter,
    LeftNav,
    Breadcrumb
  },
  data () {
    return {
      center: [113.902830, 22.514940],
      zoom: 15
    }
  }
}
</script>

<style lang="scss" scoped>
.about-contact-content{
  margin: 30px 10px;
  .amap-box{
    height: 400px;
  }
  .about-contact-detail{
    p{
      margin: 15px 0;
      font-size: $baseFontSize;
    }
  }
  .about-contact-qr{
    span{
      display: inline-block;
      margin-right: 15px;
    }
  }
}
</style>
