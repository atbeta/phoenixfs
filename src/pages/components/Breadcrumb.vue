<template>
  <b-container fluid class="breadcrumb-container">
    <b-container class="breadcrumb-wrapper">
      <b-row>
      <b-breadcrumb :items="items" />
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: {
    page: ''
  },
  data () {
    return {
      items: [{
        text: '首页',
        href: '#/'
      }, {
        text: '关于我们',
        href: '#/about'
      }, {
        text: this.page,
        active: true
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb-container{
  background-color: $baseBgColor;
  font-size: $baseFontSize;
  .breadcrumb-wrapper{
    margin-bottom: 0;
    padding-bottom: 0;
    .breadcrumb{
      margin-bottom: 0;
      a{
        color: $baseGray;
      }
      li:last-child{
        span{
          color: $breadcrumbOrange;
        }
      }
    }
  }
}
</style>
