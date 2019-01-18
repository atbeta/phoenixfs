<template>
  <div>
    <home-header></home-header>
    <home-navbar></home-navbar>
    <breadcrumb class="left-nav-breadcrumb" page='平台公告'></breadcrumb>
    <left-nav :index="1">
      <div slot="about-content-title">平台公告</div>
      <div slot="about-content">
        <div class="about-notice-content">
          <ul>
            <li>
              <span class="list-circle"></span>
              <span>1.关于凤凰金服平台业务调整的通知</span>
              <span>2018-12-05</span>
            </li>
          </ul>
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
  name: 'Notice',
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
.about-notice-content{
  ul{
    margin-top: 20px;
    li{
      display: block;
      height: 60px;
      line-height: 60px;
      border-top: 1px dashed $baseLightGray;
      border-bottom: 1px dashed $baseLightGray;
      font-size: $baseFontSize;
      font-weight: bold;
      color: $baseBlack;
      .list-circle{
        display: inline-block;
        width: 12px;
        height: 12px;
        margin: 0 10px;
        border-radius: 50%;
        border: 1px solid $hoverBlue;
        }
      &:hover{
        background-color: $baseHoverColor;
        .list-circle{
          background-color: $hoverBlue;
        &+span{
          color: $hoverBlue;
        }
        }
      }
      span:last-child{
        font-weight: normal;
        display: inline-block;
        float: right;
        margin-right: 30px;
      }
      }
  }
}
</style>
