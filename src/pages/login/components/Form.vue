<template>
<b-container class="login-form-container" fluid>
<b-container >
  <b-row align-h="between">
    <b-col cols="6" class="login-form-left">
      <div class="img-wrap">
      <img src="https://img.pbeta.cn/other/login-img.png" alt="" >
      </div>
    </b-col>
    <b-col cols="6" >
      <div class="login-form-wrapper">
      <b-form class="form-content" @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row class="form-username-wrapper">
          <span class="iconfont">&#xe67b;</span>
        <b-form-group id="form-username-group"
                      >
          <b-form-input id="form-username"
                        type="text"
                        v-model="form.text"
                        required
                        placeholder="用户名/手机号">
          </b-form-input>
        </b-form-group>
        </b-row>
        <b-row class="form-password-wrapper">
          <span class="iconfont">&#xe645;</span>
        <b-form-group id="form-password-group"
                      >
          <b-form-input id="form-password"
                        type="password"
                        v-model="form.password"
                        required
                        placeholder="请输入密码">
          </b-form-input>
        </b-form-group>
        </b-row>
        <b-form-group id="seven-days-group">
          <b-form-checkbox-group v-model="form.checked" id="seven-days">
            <b-form-checkbox value="me">记住7天</b-form-checkbox>
            <span class="reset-pw"><router-link to="/resetpw">忘记密码</router-link></span>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button class="login-button" type="submit">立即登录</b-button>
        <!--<b-button type="reset" variant="danger">Reset</b-button>-->
      </b-form>
      </div>
    </b-col>
  </b-row>
</b-container>
</b-container>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        {text: 'Select One', value: null},
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.login-form-container{
  background-color: $baseBgColor;
  .login-form-left{
    .img-wrap{
      img{
        display: block;
        width: 100%;
      }
    }
  }
  .login-form-wrapper{
    margin: 40px auto 0;
    background-color: $baseWhite;
    width: 340px;
    height: 410px;
    border-top: 4px solid $loginOrange;
    .form-content{
      padding-top: 90px;
      margin-left: 30px;
      margin-right: 30px;
      color: $baseGray;
      ::-webkit-input-placeholder { color: $baseGray;
        font-size: $baseFontSize; }
      ::-moz-placeholder { color: $baseGray;
        font-size: $baseFontSize;} /* firefox 19+ */
      :-ms-input-placeholder { color: $baseGray;
        font-size: $baseFontSize;} /* ie */
      input:-moz-placeholder { color: $baseGray;
        font-size: $baseFontSize;}
      .form-username-wrapper{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border: 1px solid $baseBorderColor;
        border-radius: 4px;
        margin-bottom: 20px;
        margin-left: 0;
        margin-right: 0;
        span{
          display: inline-block;
          padding:0 10px;
          margin-top: 5px;
          height: 28px;
          line-height: 30px;
          border-right: 1px solid $baseLightGray;
        }
        #form-username{
          border: 0;
          width: 100%;
          &:focus{
            border-color: $baseWhite;
            outline: 0;
            box-shadow: none;
          }
          &:invalid{
            border-color: $baseWhite;
            outline: 0;
            box-shadow: none;
          }
        }
      }
      .form-password-wrapper{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border: 1px solid $baseBorderColor;
        border-radius: 4px;
        margin-bottom: 20px;
        margin-left: 0;
        margin-right: 0;
        span{
          display: inline-block;
          padding:0 10px;
          margin-top: 5px;
          height: 28px;
          line-height: 30px;
          border-right: 1px solid $baseLightGray;
        }
        #form-password{
          border: 0;
          width: 100%;
          &:focus{
            border-color: $baseWhite;
            outline: 0;
            box-shadow: none;
          }
          &:invalid{
            border-color: $baseWhite;
            outline: 0;
            box-shadow: none;
          }
        }
      }
      #seven-days-group {
        margin-top: 10px;
        #seven-days {
          font-size: $baseFontSize;
          .reset-pw {
            display: inline-block;
            float: right;
            a{
              color: $baseGray;
            }
          }
        }
      }
      .login-button{
        margin-top: 20px;
        width: 100%;
        background-color: $loginOrange;
        border: 0;
        font-size: $middleFontSize;
        font-weight: bold;
      }
    }
  }
}
</style>
