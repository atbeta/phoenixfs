<template>
  <div>
    <home-header></home-header>
    <home-navbar></home-navbar>
    <login-form></login-form>
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeHeader from '../components/Header'
import HomeNavbar from '../components/Navbar'
import HomeFooter from '../components/Footer'
import LoginForm from './components/Form'
export default {
  name: 'personal',
  components: {
    HomeHeader,
    HomeNavbar,
    HomeFooter,
    LoginForm
  }
}
</script>

<style scoped>

</style>
