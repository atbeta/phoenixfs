<template>
<b-container class="news-container" fluid>
  <b-container>
    <b-row class="title-container">
    <b-col cols="10" class="title-left"><span>平台动态</span></b-col>
    <b-col cols="2" class="title-more"><router-link to="/trend">更多</router-link><span class="iconfont">&#xe604;</span></b-col>
    </b-row>
    <ul class="news-content-list">
      <li class="news-item" v-for="item in news" :key="item.id" v-show="current===item.index">
        <b-row>
        <b-col cols="5" class="news-item-cover">
          <img :src="item.imgUrl" alt="">
        </b-col>
        <b-col cols="7" class="news-item-content">
          <div class="news-item-title">
            {{item.title}}
          </div>
          <div class="news-item-text">
            {{item.summary}}
          </div>
          <div class="news-item-selector">
            <span :class="current===1?active:''" @click="current=1"></span>
            <span :class="current===2?active:''" @click="current=2"></span>
            <span :class="current===3?active:''" @click="current=3"></span>
            <span :class="current===4?active:''" @click="current=4"></span>
            <span :class="current===5?active:''" @click="current=5"></span></div>
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
  name: 'News',
  data () {
    return {
      current: 1,
      active: 'active',
      news: [{
        index: 1,
        id: '0001',
        imgUrl: 'https://www.fenghuangjinfu.com:8443/upload/image/20181211/1544513237024036396.png',
        title: '这是第一条新闻的标题',
        summary: '这是第一条新闻的摘要内容这是第一条新闻的摘要内容这是第一条新闻的摘要内容这是第一条新闻的摘要内容这是第一条新闻的摘要内容',
        detail: '这是第一条新闻的详细内容这是第一条新闻的详细内容这是第一条新闻的详细内容这是第一条新闻的详细内容这是第一条新闻的详细内容'
      },
      {
        index: 2,
        id: '0002',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547836905171&di=a89805e929eba776050351fddbfa0e00&imgtype=0&src=http%3A%2F%2Fp1.img.cctvpic.com%2Fphotoworkspace%2Fcontentimg%2F2018%2F12%2F24%2F2018122420004060437.jpg',
        title: '这是第二条新闻的标题',
        summary: '这是第二条新闻的摘要内容这是第二条新闻的摘要内容这是第二条新闻的摘要内容这是第二条新闻的摘要内容这是第二条新闻的摘要内容',
        detail: '这是第二条新闻的详细内容这是第二条新闻的详细内容这是第二条新闻的详细内容这是第二条新闻的详细内容这是第二条新闻的详细内容'
      },
      {
        index: 3,
        id: '0003',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547837756621&di=24ac4b2ec7ef1cc6e38a7376c94d68d5&imgtype=0&src=http%3A%2F%2Fe0.ifengimg.com%2F07%2F2018%2F1226%2F959ACBF4D0B01488896B5430DA23E7FE3C843AEE_size31_w486_h257.jpeg',
        title: '这是第三条新闻的标题',
        summary: '这是第三条新闻的摘要内容这是第三条新闻的摘要内容这是第三条新闻的摘要内容这是第三条新闻的摘要内容这是第三条新闻的摘要内容',
        detail: '这是第三条新闻的详细内容这是第三条新闻的详细内容这是第三条新闻的详细内容这是第三条新闻的详细内容这是第三条新闻的详细内容'
      },
      {
        index: 4,
        id: '0004',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547837791012&di=b9a9d6c8143d7545d9d51e1b3bd07820&imgtype=0&src=http%3A%2F%2Fp1.img.cctvpic.com%2Fphotoworkspace%2Fcontentimg%2F2019%2F01%2F06%2F2019010619543717622.jpg',
        title: '这是第四条新闻的标题',
        summary: '这是第四条新闻的摘要内容这是第四条新闻的摘要内容这是第四条新闻的摘要内容这是第四条新闻的摘要内容这是第四条新闻的摘要内容',
        detail: '这是第四条新闻的详细内容这是第四条新闻的详细内容这是第四条新闻的详细内容这是第四条新闻的详细内容这是第四条新闻的详细内容'
      },
      {
        index: 5,
        id: '0005',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547837806928&di=210d4b224b70ff45eaca4e17d3d73e6b&imgtype=0&src=http%3A%2F%2Fi1143.photobucket.com%2Falbums%2Fn640%2Fgiraysait%2Frevize_zpsrqkjneuh.jpg',
        title: '这是第五条新闻的标题',
        summary: '这是第五条新闻的摘要内容这是第五条新闻的摘要内容这是第五条新闻的摘要内容这是第五条新闻的摘要内容这是第五条新闻的摘要内容',
        detail: '这是第五条新闻的详细内容这是第五条新闻的详细内容这是第五条新闻的详细内容这是第五条新闻的详细内容这是第五条新闻的详细内容'
      }]
    }
  }
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
    a{
      color: $baseBlack;
    }
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
    img{
      display: block;
      width: 100%;
      height: 240px;
    }
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
    .news-item-selector{
      position: absolute;
      bottom: -5px;
      left: 20px;
      >span{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin:0 5px;
        background-color: $baseWhite;
        border: 1px solid $baseOrange;
      }
      >span.active{
        background-color: $baseOrange;
      }
    }
  }
}
</style>
