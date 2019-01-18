<template>
<div>
<b-container fluid>
  <b-container class="footer-container">
    <b-row>
      <b-col class="footer-qr" cols="2"><span class="qr-title">凤凰金服</span><img src="https://www.fenghuangjinfu.com/static/themes/bgy/img/foot/f-r1-1.png" alt=""></b-col>
      <b-col class="footer-contact" cols="4"><span>4009-630-638</span><span>法定工作日：9:00--18:00</span></b-col>
      <b-col class="footer-about" cols="2">
        <img src="https://www.fenghuangjinfu.com/static/themes/bgy/img/foot/f-r1-2.png" alt=""><span>关于我们</span>
        <ul>
          <li><router-link to="/about">凤凰金服</router-link></li>
          <li><router-link to="/joinus">加入我们</router-link></li>
          <li><router-link to="contact">联系我们</router-link></li>
        </ul>
      </b-col>
      <b-col class="footer-service" cols="2">
        <img src="https://www.fenghuangjinfu.com/static/themes/bgy/img/foot/f-r1-2.png" alt="">
        <span>服务说明</span>
        <ul>
          <li style="text-indent: 5px"><router-link to="/trend">平台动态</router-link></li>
        </ul>
      </b-col>
      <b-col class="footer-help" cols="2">
        <img src="https://www.fenghuangjinfu.com/static/themes/bgy/img/foot/f-r1-4.png" alt="">
        <span>帮助中心</span>
        <ul>
          <li style="text-indent: 5px">常见问题</li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</b-container>
<b-container class="copyright" fluid>
  <div class="copyright-wrap">
  <span> ©2015凤凰金服All Rights Reserved .</span>
  <img src="https://www.fenghuangjinfu.com/static/themes/default/img/police.png" alt="">
  <span>粤ICP备15105271号</span>
  <img src="https://seal.websecurity.norton.com/getseal?at=0&sealid=3&dn=www.fenghuangjinfu.com&lang=zh_cn&tpt=transparent" alt="">
  </div>
</b-container>
</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer-container {
  color: $footerFontColor;
  padding-top: 20px;

  .footer-qr {
    .qr-title {
      display: block;
      width: 100px;
      text-align: center;
      font-size: $baseFontSize;
    }
  }

  .footer-contact {
    text-align: center;

    span:first-child {
      display: block;
      font-size: 1.2*$extremeLargeFontSize;
    }

    span:last-child {
      display: block;
      font-size: 1.2*$baseFontSize;
    }
  }

  .footer-about, .footer-service, .footer-help {
    img {
      display: inline-block;
      margin-right: 5px;
      margin-bottom: 5px;
    }

    span:first-of-type {
      display: inline-block;
      font-size: $middleFontSize;
      font-weight: bold;
    }
    ul {
      li {
        display: block;
        margin-left: 30px;
        margin-top: 10px;
        a{
          color: $footerFontColor
        }
      }
    }
  }
}
.copyright{
  margin-top: 30px;
  padding: 0;
  height: 80px;
  background-color: $footerBgColor;
  .copyright-wrap{
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: $footerCopyrightFontColor;
    font-size: $baseFontSize;
    font-weight: bold;
  }
}
</style>
