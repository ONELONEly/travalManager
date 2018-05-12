<template>
  <div id="login">
    <!--背景-->
    <img class="login_bg" src="../../assets/background.jpg">
    <!--名字-->
    <h2 class="login_website_name">企业差旅管理平台</h2>
    <!--登陆盒子-->
    <mu-paper class="login_box" :zDepth="2" >
      <!--登陆头像-->
      <img class="login_head_img" src="../../assets/head_img.png">
      <!--用户登陆文字-->
      <p class="login_user_label">用户登陆</p>
      <!--用户名-->
      <mu-text-field v-model="username" label="用户名" :errorText="usernameError" hintText="请输入用户名" :maxLength = "11" labelFloat /><br/>
      <!--密码-->
      <mu-text-field v-model="password" label="密码" :errorText="passwordError" hintText="请输入密码" :maxLength = "20" type="password" labelFloat/>
      <!--登陆按钮-->
      <mu-float-button icon="arrow_forward" class="login_submit_btn" @click="onLogin"/>
      <p class="response_message"><span>{{msg}}</span></p>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // 数据
  data () {
    return {
      msg: '',
      username: '',
      password:'',
      usernameError:'',
      passwordError:''
    }
  },
  methods: {
    onLogin() {
      this.usernameError = '';
      this.passwordError = '';
      if(this.inputValidation()) {
        let postData = this.$qs.stringify({
          username: this.username,
          password: this.password
        });
        this.$http.post("/travalManager/loginCheck", postData).then(function (res) {
          if (res.data.data) {
            this.msg = '';
            this.$router.push('/home');
          } else {
            this.msg = "密码错误";
          }
        }.bind(this));

      }
    },
    inputValidation() {

      if(this.username.length < 1 || this.username.indexOf(' ') > -1 || this.username.length > 11){
        this.usernameError = "请输入用户名（不包含空格，且在11个字符之内）";
        return false;
      }else{
        this.usernameError = '';
      }

      if(this.password.length < 1 || this.password.indexOf(' ') > -1 || this.password.length > 20){
        this.passwordError = "请输入密码（不包含空格，且在20个字符之内）";
        return false;
      }else{
        this.passwordError = '';
      }

      return true;

    }
  }
}
</script>

<style lang="scss">
  #login {
    text-align: center;
    // 背景
    .login_bg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
    }
    // 网站名字
    .login_website_name {
      margin-top: 50px;
      font-size: 2rem;
      font-weight: normal;
      color: white;
    }
    // 登陆盒子
    .login_box {
      position: relative;
      display: inline-block;
      margin-top: 50px;
      width: 320px;
      height: 400px;
      text-align: center;
      // 用户登陆头像
      .login_head_img {
        margin: 20px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      // 用户登陆文字
      .login_user_label {
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        color: #03a9f4;
      }
     .response_message {
       margin: 0;
       padding: 0;
       font-size: 1.0rem;
       color: #f00;
     }
      // 登陆按钮
      .login_submit_btn {
        position: absolute;
        width: 60px;
        height: 60px;
        right: -30px;
      }
    }
  }
</style>
