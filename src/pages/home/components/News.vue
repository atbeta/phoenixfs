<template>
<b-container class="news-container" fluid>
  <b-container>
    <b-row class="title-container">
    <b-col cols="10" class="title-left"><span>平台动态</span></b-col>
    <b-col cols="2" class="title-more">更多 <span class="iconfont">&#xe604;</span></b-col>
    </b-row>
    <ul class="news-content-list">
      <li class="news-item">
        <b-row>
        <b-col cols="5" class="news-item-cover">
          <img src="https://www.fenghuangjinfu.com:8443/upload/image/20181211/1544513237024036396.png" alt="">
        </b-col>
        <b-col cols="7" class="news-item-content">
          <div class="news-item-title">
            关于凤凰金服平台业务调整的通知
          </div>
          <div class="news-item-text">
            即日起，凤凰金服平台将全面停止凤凰金服APP下载，网站平台、微信公众号及APP的新用户注册（原注册用户半年内仍可以凭原账户及密码登录，但相关充值功能关闭）。
          </div>
          <div class="news-item-detail"><span>查看详情</span></div>
        </b-col>
        </b-row>
      </li>
    </ul>
  </b-container>
</b-container>
</template>

<script>
export default {
  name: 'News'
}
</script>

<style lang="scss" scoped>
.news-container{
  background-color: $baseBgColor;
  padding-bottom: 8px;
}
.title-container{
  height: 60px;
  line-height: 60px;
}
  .title-left{
    font-size: $extremeLargeFontSize;
    font-weight: 500;
    span:first-child{
      display: inline-block;
      height: 60px;
      line-height: 60px;
      border-bottom: 2px solid $baseOrange;
    }
  }
  .title-more{
    text-align: right;
    padding-right: 20px;
  }
.news-content-list{
  padding: 0;
  li{
    list-style-type: none;
  }
}
.news-item{
  background-color: $baseWhite;
  padding-top: 50px;
  padding-bottom: 42px;
  position: relative;
  .news-item-cover{
    padding-left: 40px;
  }
  .news-item-content{
    .news-item-title{
      color: $baseBlue;
      font-weight: bold;
      font-size: $middleFontSize;
      margin-bottom: 10px;
    }
    .news-item-text{
      color: $baseBlack;
      margin-right: 40px;
      font-size: $baseFontSize;
      line-height: 2*$baseFontSize;
    }
    .news-item-detail{
      span{
        position: absolute;
        bottom: 0;
        right: 20px;
        width: 80px;
        height: 30px;
        line-height: 30px;
        margin-right: 40px;
        background-color: $baseOrange;
        text-align: center;
        font-size: $baseFontSize;
        color: $baseWhite;
      }
    }
  }
}
</style>
