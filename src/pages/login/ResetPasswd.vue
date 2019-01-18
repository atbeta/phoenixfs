<template>
<div>
<home-header></home-header>
<home-navbar></home-navbar>
<forget-passwd></forget-passwd>
<home-footer></home-footer>
</div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeNavbar from '../components/Navbar'
import HomeFooter from '../components/Footer'
import ForgetPasswd from './components/ForgetPasswd'
export default {
  name: 'ResetPasswd',
  components: {
    HomeHeader,
    HomeNavbar,
    HomeFooter,
    ForgetPasswd
  }
}
</script>

<style scoped>

</style>
