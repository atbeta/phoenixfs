<template>
<b-container class="header-outer-container" fluid>
  <b-container>
  <b-row class="header-container">
    <b-col class="header-left" cols="9">
      <div class="hot-line"><span>客服热线:</span><span>4009-630-638</span></div>
      <div class="wechat"><span>微信公众号</span><a href=""><img src="" alt=""></a></div>
    </b-col>
    <b-col class="header-right" cols="3">
      <div class="login"><router-link to="/login"><span>登录</span></router-link></div>
      <div class="help"><span>帮助</span></div>
    </b-col>
  </b-row>
  </b-container>
</b-container>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header-outer-container{
  background-color: $headerBgColor;
  box-shadow: 0 3px 5px #e5e5e5;
}
.header-container{
  color: $baseWhite;
  height: 40px;
  font-size: $headerFontSize;
  .header-left{
    div{
      display: inline-block;
      line-height: 40px;
    }
    .hot-line{
      padding-right: 30px;
      span:first-child{
        padding-right: 10px;
      }
      span:last-child{
        font-size: $middleFontSize;
      }
    }
    .wechat{
    }
  }
  .header-right{
    text-align: right;
    div{
      display: inline-block;
      line-height: 40px;
    }
    .login{
      height: 30px;
      line-height: 30px;
      padding-left: 10px;
      padding-right: 10px;
      margin-right: 20px;
      border-radius: 3px;
      background-color: $baseOrange;
      a{
        color: $baseWhite;
      }
    }
    .help{
    }
  }
}
</style>
