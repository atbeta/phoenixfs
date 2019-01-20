<template>
  <b-container fluid class="reset-pw-outer-container">
    <b-container class="reset-pw-container">
      <b-row align-h="center" >
        <b-col cols="12">
          <div class="reset-pw-title">忘记密码</div>
        </b-col>
        <b-col cols="6">
          <div class="reset-pw-form-container">
            <div class="reset-pw-phone"><span>用绑定手机重置密码</span></div>
            <div class="reset-pw-progress">
              <div class="progress-circle active">
                <span>1</span>
                <span>填写手机</span>
                <span class="progress-line"><span class="progressbar"></span></span>
              </div>
              <div class="progress-circle active last">
                <span>2</span>
                <span>填写验证码</span>
                <span class="progress-line"><span class="progressbar"></span></span>
              </div>
              <div class="progress-circle">
                <span>3</span>
                <span>设置新密码</span>
                <span class="progress-line"><span class="progressbar"></span></span>
              </div>
              <div class="progress-circle">
                <span>4</span>
                <span>完成</span>
              </div>
            </div>
            <b-row class="reset-pw-form-wrapper" align-h="center">
            <b-form>
            <b-form-group id="reset-pw-phone-group"
                          horizontal
                          :label-cols="3"
                          breakpoint="md"
                          label="手机号码"
                          label-for="reset-pw-phone">
              <b-form-input placeholder="请输入手机号码" id="reset-pw-phone"></b-form-input>
            </b-form-group>
            <b-form-group id="reset-pw-code-group"
                          horizontal
                          :label-cols="3"
                          breakpoint="md"
                          label="验证码"
                          label-for="reset-pw-code">
              <b-form-input placeholder="请输入验证码" id="reset-pw-code"></b-form-input>
              <span class="pw-code-img"><img src="https://www.fenghuangjinfu.com/jcaptcha/findPwdByPhone" alt=""></span>
            </b-form-group>
              <b-button class="reset-pw-button" type="submit">提交</b-button>
            </b-form>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'ForgetPasswd'
}
</script>

<style lang="scss" scoped>
.reset-pw-outer-container{
  padding: 20px 10px;
  background-color: $baseBgColor;
  }
.reset-pw-container{
  padding: 10px;
  background-color: $baseWhite;
  border-radius: 5px;
 .reset-pw-title{
   height: 40px;
   line-height: 40px;
   margin: 0 30px;
   font-size: $middleFontSize;
   font-weight: bold;
   border-bottom: 1px solid $aboutBorderColor;
   color: $baseBlack;
 }
 .reset-pw-phone{
   text-align: center;
   margin: 30px 0;
   span{
     display: inline-block;
     width: 240px;
     height: 54px;
     line-height: 54px;
     color: $baseWhite;
     background-color: $loginOrange;
     border-radius: 2px;
   }
 }
 .reset-pw-progress{
   width: 500px;
   margin: 0 24px;
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-between;
   .progress-circle{
     min-width: 80px;
     position: relative;
     color: $inactiveGray;
     span{
       display: block;
     }
     >span:first-child{
       margin: 5px auto;
       width: 40px;
       height: 40px;
       line-height: 30px;
       text-align: center;
       border: 5px solid $inactiveGray;
       border-radius: 50%;
     }
     >span:nth-child(2){
       width: 80px;
       text-align: center;
       font-weight: bold;
     }
     .progress-line{
       position: absolute;
       top: 20px;
       left: 60px;
       width: 100px;
       height: 8px;
       background: $inactiveGray;
     }
     &.active{
       color: $baseGreen;
       >span:first-child{
         border-color: $baseGreen;
       }
       span.progressbar{
         height: 8px;
         width: 100%;
         background-color: $baseGreen;
       }
     }
     &.active.last{
       span.progressbar{
         width: 50%;
         border-top-right-radius: 4px;
         border-bottom-right-radius: 4px;
       }
     }
   }
 }
 .reset-pw-form-wrapper{
   margin: 20px 0;
   text-align: center;
   ::-webkit-input-placeholder { color: $baseGray;
     font-size: $baseFontSize; }
   ::-moz-placeholder { color: $baseGray;
     font-size: $baseFontSize;} /* firefox 19+ */
   :-ms-input-placeholder { color: $baseGray;
     font-size: $baseFontSize;} /* ie */
   input:-moz-placeholder { color: $baseGray;
     font-size: $baseFontSize;}
   #reset-pw-phone-group{
     label{
       font-size: $baseFontSize !important;
     }
     #reset-pw-phone{
       width: 240px;
     }
   }
   #reset-pw-code-group{
     position: relative;
     #reset-pw-code{
       width: 160px;
       margin-bottom: 20px;
     }
     .pw-code-img{
       img{
         position: absolute;
         top: 2px;
         right: -5px;
       }
     }
   }
   .reset-pw-button{
     width: 170px;
     background-color: $baseLightBlue;
     border: none;
   }
 }
}
</style>
