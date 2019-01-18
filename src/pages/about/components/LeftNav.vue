<template>
  <b-container fluid class="about-container">
    <b-container>
      <b-row>
        <b-col cols="3" class="left-nav-list">
          <ul>
            <li class="nav-list-item">关于我们</li>
            <li class="nav-list-item"><router-link to="/notice">平台公告</router-link></li>
            <li class="nav-list-item"><router-link to="/about">关于我们</router-link></li>
            <li class="nav-list-item"><router-link to="/contact">联系我们</router-link></li>
            <li class="nav-list-item"><router-link to="/joinus">加入我们</router-link></li>
            <li class="nav-list-item"><router-link to="/partner">合作伙伴</router-link></li>
            <li class="nav-list-item"><router-link to="/trend">平台动态</router-link></li>
          </ul>
        </b-col>
        <b-col cols="9" class="about-content-container">
          <div class="about-content-wrapper">
          <div class="about-content-title">
            <slot name="about-content-title">关于我们</slot>
          </div>
          <div class="about-content">
          <slot name="about-content"></slot>
          </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
export default {
  name: 'LeftNav',
  props: {
    index: {
      type: Number,
      default: 2
    }
  },
  mounted () {
    let currentItem = document.querySelectorAll('.left-nav-list>ul>li')[this.index]
    currentItem.classList.add('current-page-item')
  }
}
</script>

<style lang="scss" scoped>
.about-container{
  background-color: $baseBgColor;
  padding-bottom: 20px;
}
.left-nav-list{
  .nav-list-item:first-child{
    height: 60px;
    line-height: 60px;
    background-color: $navOrange;
    color: $baseWhite;
    font-weight: bold;
  }
  .nav-list-item{
    height: 43px;
    line-height: 43px;
    font-size: $middleFontSize;
    text-align: center;
    background-color: $baseWhite;
    color: $baseBlack;
    &:hover:nth-child(n+2){
      background-color: $baseHoverColor;
    }
    a{
      text-decoration: none;
      color: $baseBlack;
    }
  }
  .current-page-item{
    background-color: $baseHoverColor;
  }
}
.about-content-container{
  padding-top: 10px;
  background-color: $baseWhite;
  padding-left: 40px;
  padding-right: 10px;
  .about-content-wrapper{
    .about-content-title{
      font-size: $titleFontSize;
      font-weight: bold;
      color: $baseBlack;
    }
    .about-content{
      margin-top: 15px;
      margin-right: 20px;
      border-top: 2px solid $aboutBorderColor;
    }
  }
}
</style>
