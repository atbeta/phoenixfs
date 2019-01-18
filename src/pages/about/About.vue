<template>
<div>
<home-header></home-header>
<home-navbar></home-navbar>
<breadcrumb class="left-nav-breadcrumb" page='关于我们'></breadcrumb>
<left-nav>
  <div slot="about-content-title">关于我们</div>
  <div slot="about-content">
    <div class="about-us-content">
      <div class="about-us-content-title">
        凤凰金服，创新型智慧信息科技服务平台
      </div>
      <p>凤凰金服（www.fenghuangjinfu.com）是深圳市金石信息科技服务有限公司倾力打造的创新型智慧信息科技服务平台。</p>
      <p>凤凰金服以提供优质的科技信息服务为理念，不断优化互联网交易信息平台的服务体验，并联手国内知名企业，利用互联网信息技术及资源共享的优势，依法提供更多元化的优质互联网信息展示服务。</p>
      <div class="about-us-content-title">平台特色</div>
      <p>智慧创新：通过大数据、云计算、人工智能等互联网前沿技术，打造全方位多角度的智慧科技信息服务平台；</p>
      <p>服务优质：完善的客户服务体系，确保为客户提供有效、及时的产品信息服务。</p>
      <div class="about-us-content-title">大事记</div>
      <p>Ø  2015年10月19日深圳市金石信息科技服务有限公司成立。</p>
      <p>Ø  2015年12月12日凤凰金服平台正式上线。</p>
      <p>Ø  2017年5月31日平台注册用户突破100,000。</p>
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
  name: 'About',
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
.about-us-content{
  .about-us-content-title{
    margin-bottom: 15px;
    margin-top: 40px;
    padding-top: 30px;
    font-size: $navFontSize;
    font-weight: bold;
    color: $navOrange;
    &:nth-child(n+2){
      border-top: 1px solid $aboutBorderColor;
    }
    &:first-child{
      margin-top: 10px;
    }
  }
  p{
    font-size: $baseFontSize;
    text-indent: 2em;
    color: $baseGray;
    margin-bottom: 10px;
    &:last-child{
      margin-bottom: 50px;
    }
  }
}
</style>
