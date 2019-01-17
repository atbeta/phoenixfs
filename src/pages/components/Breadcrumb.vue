<template>
  <b-breadcrumb :items="items"/>
</template>
<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      items: [{
        text: '首页',
        href: '/'
      }, {
        text: '关于我们',
        href: '/about'
      }, {
        text: '关于我们',
        active: true
      }]
    }
  }
}
</script>

<style scoped>

</style>
