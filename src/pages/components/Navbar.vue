<template>
<b-container fluid>
  <b-container>
   <b-row class="nav-container">
     <b-col cols="8">
       <div class="logo">
         <img src="https://www.fenghuangjinfu.com/static/pic/logo/bb" alt="">
       </div>
     </b-col>
     <b-col cols="4">
       <ul class="nar-list">
         <li><router-link to="/"><span>首页</span></router-link></li>
         <li><router-link to="/login"><span>个人中心</span></router-link></li>
         <li><span>关于我们</span></li>
       </ul>
     </b-col>
   </b-row>
  </b-container>
</b-container>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.nav-container{
  height: 100px;
  .logo{
    line-height: 100px;
  }
  .nar-list{
    text-align: right;
    li{
      display: inline-block;
      list-style-type: none;
      width: 90px;
      text-align: center;
      font-size: $middleFontSize;
      color: $baseBlack;
      a{
        color: $baseBlack;
        &:hover{
        color: $baseBlack;
      }
      }
      span{
        display: inline-block;
        width: 90px;
        height: 40px;
        margin-top: 30px;
        &:hover{
          border-bottom: 4px solid $baseOrange;
        }
      }
    }
  }
}
</style>
