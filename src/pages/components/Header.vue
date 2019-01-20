<template>
<b-container class="header-outer-container" fluid>
  <b-container>
  <b-row class="header-container">
    <b-col class="header-left" cols="9">
      <div class="hot-line"><span>客服热线:</span><span>4009-630-638</span></div>
      <div class="wechat"><span>微信公众号</span><a class="wechat-hover" href="javascript:"><span class="wechat-icon iconfont">&#xe647;</span>
        <img src="https://www.fenghuangjinfu.com/static/themes/bgy/img/head/head-erweima.png" alt="" class="qr-code">
      </a></div>
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
      a{
        position: relative;
        color: $baseWhite;
        text-decoration: none;
      }
      .qr-code{
        position: absolute;
        z-index: 99;
        top: 18px;
        right: -56px;
        width: 9rem;
        max-width: none;
        height: 10rem;
        transform: scale(0);
        transform-origin: top right;
        opacity: 0;
        -webkit-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
      }
      .wechat-hover:hover {
        .qr-code{
          transform: scale(1);
          opacity: 1;
        }
        .wechat-icon{
          color: $wechatGreen;
        }
      }
      .wechat-icon{
        font-size: $largeFontSize;
      }
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
