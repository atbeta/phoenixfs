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
         <li>首页</li>
         <li>个人中心</li>
         <li>关于我们</li>
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
  line-height: 100px;
  .nar-list{
    text-align: right;
    li{
      display: inline-block;
      list-style-type: none;
      width: 80px;
      margin-left: 10px;
      font-size: $middleFontSize;
      color: $baseBlack;
      &:hover{
      }
    }
  }
}
</style>
